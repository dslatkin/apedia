import { formatMonth, monthOf } from '$lib/format';
import type { NewsPost } from '$types';

export interface NewsMonth {
    id: string;
    label: string;
    posts: NewsPost[];
}

export function groupByMonth(posts: NewsPost[]): NewsMonth[] {
    const months = new Map<string, NewsPost[]>();
    for (const post of posts) {
        const id = monthOf(post.date);
        const list = months.get(id);
        if (list) {
            list.push(post);
        } else {
            months.set(id, [post]);
        }
    }
    return [...months].map(([id, posts]) => ({
        id,
        label: formatMonth(id),
        posts,
    }));
}
