import type { MarkdownPage } from '$types';
import history from './history.md?raw';

export const historyPage: MarkdownPage = {
    slug: 'history',
    title: 'History',
    body: history,
};
