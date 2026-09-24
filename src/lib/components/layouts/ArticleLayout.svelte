<script lang="ts">
    import type { Heading } from '$lib/markdown';
    import PageHeader from '../PageHeader.svelte';
    import Prose from '../Prose.svelte';
    import TableOfContents from '../TableOfContents.svelte';

    /**
     * A page of prose: guides, Contact Me, Special Thanks. Gets a table of contents when the
     * body has more than one section. Kept to a readable measure, as the old text columns were.
     */
    let {
        title,
        author,
        html,
        headings,
    }: {
        title: string;
        author?: string | undefined;
        html: string;
        headings: Heading[];
    } = $props();

    let sections = $derived(headings.filter((heading) => heading.level === 2));
</script>

<article class="mx-auto max-w-prose">
    <PageHeader {title} {author} />
    {#if sections.length > 1}
        <TableOfContents {headings} />
    {/if}
    <Prose {html} />
</article>
