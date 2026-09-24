import { accessories } from '$content/equipment/accessories';
import { armor } from '$content/equipment/armor';
import { items } from '$content/equipment/items';
import { scrolls } from '$content/equipment/scrolls';
import { weapons } from '$content/equipment/weapons';
import { newsPosts } from '$content/news';
import { site } from '$content/site';
import { renderMarkdown } from '$lib/server/markdown';
import type { PageServerLoad } from './$types';

/** How many of the newest posts the home page shows. */
const LATEST_POSTS = 5;

export const load: PageServerLoad = () => ({
    title: 'Current News',
    posts: newsPosts.slice(0, LATEST_POSTS).map((post) => ({
        date: post.date,
        html: renderMarkdown(post.body).html,
    })),
    randomWeapons: site.home.randomWeapons,
    itemCount:
        weapons.length +
        armor.length +
        accessories.length +
        items.length +
        scrolls.length,
});
