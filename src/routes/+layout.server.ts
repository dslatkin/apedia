import { site } from '$content/site';
import { renderMarkdown } from '$lib/server/markdown';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

/** What every page needs: the site's name and menus for the header, and the footer. */
export const load: LayoutServerLoad = () => ({
    siteTitle: site.title,
    menus: site.menus,
    footerHtml: renderMarkdown(site.footer.notice).html,
    footerBanner: site.footer.banner,
});
