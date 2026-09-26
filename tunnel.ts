// Share the dev server over a Cloudflare quick tunnel: `npm run tunnel:up | tunnel:down | tunnel:status`.
//
// Each tunnel gets a random *.trycloudflare.com address. The address, the process id and the
// log live in .tunnel/, which is git-ignored, so the address never ends up in the repository.

import { spawn } from 'node:child_process';
import {
    existsSync,
    mkdirSync,
    openSync,
    readFileSync,
    rmSync,
    writeFileSync,
} from 'node:fs';
import { setTimeout as sleep } from 'node:timers/promises';
import { bin, install } from 'cloudflared';

const DIR = '.tunnel';
const PID_FILE = `${DIR}/pid`;
const URL_FILE = `${DIR}/url`;
const LOG_FILE = `${DIR}/log`;
const PORT = Number(process.env['TUNNEL_PORT'] ?? 5173);
const TARGET = `http://127.0.0.1:${PORT}`;
const START_TIMEOUT_MS = 30_000;

function readFile(path: string): string | undefined {
    return existsSync(path) ? readFileSync(path, 'utf8').trim() : undefined;
}

function isRunning(pid: number): boolean {
    try {
        process.kill(pid, 0);
        return true;
    } catch {
        return false;
    }
}

/** The running tunnel, if any. Files left behind by a tunnel that died are cleared. */
function current(): { pid: number; url: string | undefined } | undefined {
    const pid = Number(readFile(PID_FILE));
    if (pid && isRunning(pid)) return { pid, url: readFile(URL_FILE) };
    rmSync(DIR, { recursive: true, force: true });
    return undefined;
}

async function devServerIsUp(): Promise<boolean> {
    try {
        await fetch(TARGET, { signal: AbortSignal.timeout(2_000) });
        return true;
    } catch {
        return false;
    }
}

async function up() {
    const running = current();
    if (running) {
        console.log(
            `Tunnel is already up: ${running.url ?? '(address unknown, see .tunnel/log)'}`,
        );
        return;
    }

    if (!existsSync(bin)) {
        console.log('Downloading cloudflared...');
        await install(bin);
    }
    if (!(await devServerIsUp())) {
        console.warn(
            `Warning: nothing is answering at ${TARGET}. Start it with \`npm run dev\`.`,
        );
    }

    mkdirSync(DIR, { recursive: true });
    const log = openSync(LOG_FILE, 'w');
    const child = spawn(bin, ['tunnel', '--no-autoupdate', '--url', TARGET], {
        detached: true,
        stdio: ['ignore', log, log],
    });
    child.unref();
    writeFileSync(PID_FILE, String(child.pid));

    const deadline = Date.now() + START_TIMEOUT_MS;
    while (Date.now() < deadline) {
        await sleep(500);
        const output = readFile(LOG_FILE) ?? '';
        const url = output.match(
            /https:\/\/[a-z0-9-]+\.trycloudflare\.com/,
        )?.[0];
        if (url && output.includes('Registered tunnel connection')) {
            writeFileSync(URL_FILE, url);
            console.log(`Tunnel is up: ${url} -> ${TARGET}`);
            return;
        }
        if (!isRunning(child.pid!)) break;
    }

    const lastLines = tail(LOG_FILE);
    await down({ quiet: true });
    console.error(
        `The tunnel did not start. Last lines of the log:\n${lastLines}`,
    );
    process.exitCode = 1;
}

async function down({ quiet = false } = {}) {
    const running = current();
    if (!running) {
        if (!quiet) console.log('Tunnel is already down.');
        return;
    }
    process.kill(running.pid, 'SIGTERM');
    for (let i = 0; i < 20 && isRunning(running.pid); i++) await sleep(250);
    if (isRunning(running.pid)) process.kill(running.pid, 'SIGKILL');
    rmSync(DIR, { recursive: true, force: true });
    if (!quiet) console.log('Tunnel is down.');
}

function status() {
    const running = current();
    console.log(
        running
            ? `Tunnel is up: ${running.url ?? '(address unknown, see .tunnel/log)'} -> ${TARGET}`
            : 'Tunnel is down.',
    );
}

function tail(path: string, lines = 10): string {
    return (readFile(path) ?? '').split('\n').slice(-lines).join('\n');
}

const command = process.argv[2];
if (command === 'up') await up();
else if (command === 'down') await down();
else if (command === 'status') status();
else {
    console.error('Usage: node tunnel.ts <up|down|status>');
    process.exitCode = 1;
}
