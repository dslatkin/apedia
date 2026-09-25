import { websiteDirectory } from '$content/community/websites';
import { renderMarkdown } from '$lib/server/markdown';
import type { Website } from '$types';
import type { PageServerLoad } from './$types';

const toLinks = (websites: Website[]) =>
    websites.map((website) => ({
        label: website.name,
        href: website.url,
        description: website.description,
    }));

export const load: PageServerLoad = () => ({
    title: 'Websites',
    introHtml: renderMarkdown(websiteDirectory.intro).html,
    active: toLinks(websiteDirectory.active),
    inactive: toLinks(websiteDirectory.inactive),
});
