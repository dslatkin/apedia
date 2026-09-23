<script lang="ts">
    import type { Snippet } from 'svelte';
    import Prose from './Prose.svelte';

    /**
     * A titled region of a page that can be linked to by its id: a weapon category, a
     * gallery section, a clan, a month of news.
     */
    let {
        id,
        title,
        level = 2,
        introHtml,
        children,
    }: {
        id: string;
        title: string;
        /** Heading level; sections nested inside another section use 3. */
        level?: 2 | 3;
        introHtml?: string | undefined;
        children: Snippet;
    } = $props();
</script>

<section {id}>
    <svelte:element this={`h${level}`}>{title}</svelte:element>
    {#if introHtml}
        <Prose html={introHtml} />
    {/if}
    {@render children()}
</section>
