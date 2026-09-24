import { newsPosts } from '$content/news';
import { site } from '$content/site';
import { renderMarkdown } from '$lib/server/markdown';
import type { PageServerLoad } from './$types';

const LATEST_POSTS = 5;

export const load: PageServerLoad = () => ({
    title: 'Current News',
    posts: newsPosts.slice(0, LATEST_POSTS).map((post) => ({
        date: post.date,
        html: renderMarkdown(post.body).html,
    })),
    randomWeapons: site.home.randomWeapons,
});
