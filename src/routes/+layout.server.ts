import { site } from './site';
import type { LayoutServerLoad } from './$types';

export const prerender = true;

export const load: LayoutServerLoad = () => ({
    siteTitle: site.title,
    siteDescription: site.description,
    menus: site.menus,
    footerLinks: site.footer.links,
    footerBanner: site.footer.banner,
});
