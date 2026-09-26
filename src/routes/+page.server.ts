import { newsPosts } from '$content/news';
import { site } from '$content/site';
import { renderMarkdown } from '$lib/server/markdown';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const [latest] = newsPosts;
    if (!latest) error(500, 'There are no news posts');
    return {
        title: 'Latest News',
        post: { date: latest.date, html: renderMarkdown(latest.body).html },
        randomWeapons: site.home.randomWeapons,
    };
};
