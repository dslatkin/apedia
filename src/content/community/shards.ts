import type { MarkdownPage } from '$types';
import shards from './shards.md?raw';

export const shardsPage: MarkdownPage = {
    slug: 'shards',
    title: 'Shards',
    body: shards,
};
