import type { MarkdownPage } from '$types';
import servers from './servers.md?raw';
import play from './play.md?raw';

/** The list of shards running today, shared by every page that shows it. */
export const runningServers = servers;

export const playPage: MarkdownPage = {
    slug: 'play',
    title: 'Play Today',
    body: play.replace('<!-- servers -->', servers),
};
