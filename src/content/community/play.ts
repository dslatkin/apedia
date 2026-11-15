import type { MarkdownPage } from '$types';
import servers from './servers.md?raw';
import play from './play.md?raw';

export const playPage: MarkdownPage = {
    slug: 'play',
    title: 'Play Today',
    body: play.replace('<!-- servers -->', servers),
};
