<script lang="ts">
    import type { Heading } from '$lib/markdown';
    import type { Snippet } from 'svelte';
    import PageHeader from '../PageHeader.svelte';
    import Prose from '../Prose.svelte';
    import TableOfContents from '../TableOfContents.svelte';

    let {
        title,
        author,
        html,
        headings,
        children,
    }: {
        title: string;
        author?: string | undefined;
        html: string;
        headings: Heading[];
        children?: Snippet | undefined;
    } = $props();

    let sections = $derived(headings.filter((heading) => heading.level === 2));
</script>

<article class="mx-auto max-w-prose">
    <PageHeader {title} {author} />
    {#if sections.length > 1}
        <TableOfContents {headings} />
    {/if}
    <Prose {html} />
    {@render children?.()}
</article>
