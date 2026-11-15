import type { MarkdownPage } from '$types';
import { runningServers } from '../community/play';
import shards from './shards.md?raw';
import theOriginal from './the-original.md?raw';

/** The parts of the history, in reading order. Each is served at `/history/<slug>`. */
export const historyParts: MarkdownPage[] = [
    {
        slug: 'the-original',
        title: 'The Original',
        body: theOriginal,
    },
    {
        slug: 'shards',
        title: 'Shards',
        body: shards.replace('<!-- servers -->', runningServers),
    },
];
