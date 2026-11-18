<script lang="ts">
    import { page } from '$app/state';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    import Prose from './Prose.svelte';

    let {
        title,
        author,
        introHtml,
        centerTitle = false,
        children,
    }: {
        title: string;
        author?: string | undefined;
        introHtml?: string | undefined;
        centerTitle?: boolean;
        children?: Snippet | undefined;
    } = $props();

    const documentTitle = $derived(
        page.route.id === '/'
            ? page.data.siteTitle
            : `${title} – ${page.data.siteTitle}`,
    );
</script>

<svelte:head>
    <title>{documentTitle}</title>
</svelte:head>

<header class="mb-6 md:mb-8">
    {#if page.data.archiveNoticeHtml}
        <Prose
            html={page.data.archiveNoticeHtml}
            class="mb-6 border border-black bg-green-light px-4 py-3 text-center text-sm"
        />
    {/if}
    <h1
        class={twMerge(
            'text-2xl font-bold md:text-3xl',
            centerTitle && 'text-center',
        )}
    >
        {title}
    </h1>
    {#if author}
        <p class="mt-1 text-sm italic">Written by {author}</p>
    {/if}
    {#if introHtml}
        <Prose html={introHtml} class="mt-4" />
    {/if}
    {@render children?.()}
</header>
