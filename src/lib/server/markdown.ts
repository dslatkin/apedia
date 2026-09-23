import { slugify, type Heading } from '$lib/markdown';
import type { Markdown } from '$types';
import type { Element, Root } from 'hast';
import { toString } from 'hast-util-to-string';
import rehypeStringify from 'rehype-stringify';
import remarkParse from 'remark-parse';
import remarkRehype from 'remark-rehype';
import { unified } from 'unified';
import { visit } from 'unist-util-visit';
import type { VFile } from 'vfile';

declare module 'vfile' {
    interface DataMap {
        headings: Heading[];
    }
}

const HEADING_LEVELS: Record<string, number> = {
    h1: 1,
    h2: 2,
    h3: 3,
    h4: 4,
    h5: 5,
    h6: 6,
};

/**
 * Gives every heading an `id` following the rule described on `Markdown` in `$types`, and
 * records the headings on the file so a table of contents can be built from them.
 */
function rehypeHeadingIds() {
    return (tree: Root, file: VFile) => {
        const headings: Heading[] = [];
        const seen = new Map<string, number>();
        visit(tree, 'element', (node: Element) => {
            const level = HEADING_LEVELS[node.tagName];
            if (level === undefined) return;
            const text = toString(node);
            const base = slugify(text);
            const n = (seen.get(base) ?? 0) + 1;
            seen.set(base, n);
            const id = n === 1 ? base : `${base}-${n}`;
            node.properties.id = id;
            headings.push({ level, id, text });
        });
        file.data.headings = headings;
    };
}

export interface RenderedMarkdown {
    html: string;
    headings: Heading[];
}

const processor = unified()
    .use(remarkParse)
    .use(remarkRehype)
    .use(rehypeHeadingIds)
    .use(rehypeStringify);

/**
 * Render Markdown to HTML. This runs in `load` functions at build time, so the Markdown
 * tooling never reaches the browser. The content is authored in this repository, so the
 * HTML is trusted.
 */
export function renderMarkdown(markdown: Markdown): RenderedMarkdown {
    const file = processor.processSync(markdown);
    return { html: String(file), headings: file.data.headings ?? [] };
}
