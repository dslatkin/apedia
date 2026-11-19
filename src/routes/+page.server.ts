import { newsPosts } from './news/posts';
import { site } from './site';
import { renderMarkdown } from '$lib/server/markdown';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => {
    const [latest] = newsPosts;
    if (!latest) error(500, 'There are no news posts');
    return {
        title: 'Welcome!',
        introHtml: renderMarkdown(site.home.intro).html,
        post: { date: latest.date, html: renderMarkdown(latest.body).html },
        randomWeapons: site.home.randomWeapons,
    };
};
