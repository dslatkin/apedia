import { site } from '$content/site';
import { renderMarkdown } from '$lib/server/markdown';
import type { MarkdownPage } from '$types';

export function loadMarkdownPage(page: MarkdownPage) {
    const { html, headings } = renderMarkdown(page.body);
    return { title: page.title, author: page.author, html, headings };
}

export function loadArchiveNotice() {
    return { archiveNoticeHtml: renderMarkdown(site.archiveNotice).html };
}
