import { newsPosts } from '$content/news';
import { formatMonth, monthOf } from '$lib/format';
import { renderMarkdown } from '$lib/server/markdown';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
    [...new Set(newsPosts.map((post) => monthOf(post.date)))].map((month) => ({
        month,
    }));

export const load: PageServerLoad = ({ params }) => {
    const posts = newsPosts.filter(
        (post) => monthOf(post.date) === params.month,
    );
    if (posts.length === 0) error(404, 'No news was posted that month');
    return {
        title: formatMonth(params.month),
        posts: posts.map((post) => ({
            date: post.date,
            html: renderMarkdown(post.body).html,
        })),
    };
};
