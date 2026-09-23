import { formatMonth, monthOf } from '$lib/format';
import type { NewsPost } from '$types';

/** The posts from one calendar month, as listed in the news archive. */
export interface NewsMonth {
    /** "YYYY-MM", used as the route parameter. */
    id: string;
    /** e.g. "October 2003" */
    label: string;
    posts: NewsPost[];
}

/** Posts grouped by month. Months and posts keep the order they were given in. */
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
