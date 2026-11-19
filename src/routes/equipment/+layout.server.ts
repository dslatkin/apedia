import { renderMarkdown } from '$lib/server/markdown';
import { site } from '../site';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => ({
    archiveNoticeHtml: renderMarkdown(site.archiveNotice).html,
});
