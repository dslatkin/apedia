<script lang="ts">
    import { page } from '$app/state';
    import type { Snippet } from 'svelte';
    import Prose from './Prose.svelte';

    /**
     * The top of every page: its `<h1>`, a byline when a player wrote the page, an optional
     * introduction, and anything else that belongs above the content. Also sets the
     * document title.
     */
    let {
        title,
        author,
        introHtml,
        children,
    }: {
        title: string;
        author?: string | undefined;
        introHtml?: string | undefined;
        children?: Snippet | undefined;
    } = $props();
</script>

<svelte:head>
    <title>{title} – {page.data.siteTitle}</title>
</svelte:head>

<header class="mb-6 md:mb-8">
    <h1 class="text-2xl font-bold md:text-3xl">{title}</h1>
    {#if author}
        <p class="mt-1 text-sm italic">Written by {author}</p>
    {/if}
    {#if introHtml}
        <Prose html={introHtml} class="mt-4" />
    {/if}
    {@render children?.()}
</header>
