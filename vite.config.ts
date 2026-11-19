import tailwindcss from '@tailwindcss/vite';
import adapter from '@sveltejs/adapter-static';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

function getBasePath() {
    if (process.argv.includes('dev')) {
        return '';
    }

    const path = process.env['BASE_PATH'] ?? '';
    if (path && !path.startsWith('/')) {
        throw new Error(
            `❌ BASE_PATH must start with "/", got "${path}" instead`,
        );
    }

    return path as '' | `/${string}`;
}

export default defineConfig({
    // Fix dev container dev server
    // https://vite.dev/guide/troubleshooting#dev-containers-vs-code-port-forwarding
    server: {
        host: '127.0.0.1',
        // Lets `npm run tunnel:up` share the dev server; quick tunnel addresses are random.
        allowedHosts: ['.trycloudflare.com'],
    },
    plugins: [
        tailwindcss(),
        sveltekit({
            compilerOptions: {
                // Force runes mode for the project, except for libraries. Can be removed in svelte 6.
                runes: ({ filename }) =>
                    filename.split(/[/\\]/).includes('node_modules')
                        ? undefined
                        : true,
            },
            adapter: adapter(),
            // The contact form's no-JS redirect needs the site's absolute URL at build time.
            prerender: {
                origin: 'https://akarrianencyclopedia.com',
            },
            alias: {
                $types: 'src/types',
                $content: 'src/content',
            },
            typescript: {
                config: (config) => {
                    config['include'].push('../tunnel.ts');
                },
            },
            paths: {
                base: getBasePath(),
            },
        }),
    ],
});
