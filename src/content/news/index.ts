import type { NewsPost } from '$types';

const files = import.meta.glob<string>('./posts/*.md', {
    query: '?raw',
    import: 'default',
    eager: true,
});

export const newsPosts: NewsPost[] = Object.entries(files)
    .map(([path, body]) => ({
        date: path.slice('./posts/'.length, -'.md'.length),
        body,
    }))
    .sort((a, b) => b.date.localeCompare(a.date));
