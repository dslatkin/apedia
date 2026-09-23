import { renderMarkdown } from '$lib/server/markdown';
import type { MarkdownPage } from '$types';

/** What a page of prose needs: its body rendered, and its headings for a table of contents. */
export function loadMarkdownPage(page: MarkdownPage) {
    const { html, headings } = renderMarkdown(page.body);
    return { title: page.title, author: page.author, html, headings };
}
