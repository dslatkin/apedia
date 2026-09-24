<script lang="ts">
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';
    import Prose from './Prose.svelte';

    let {
        id,
        title,
        level = 2,
        introHtml,
        children,
    }: {
        id: string;
        title: string;
        level?: 2 | 3;
        introHtml?: string | undefined;
        children: Snippet;
    } = $props();
</script>

<section {id} class="mt-8 scroll-mt-4 md:mt-10 md:scroll-mt-16">
    <svelte:element
        this={`h${level}`}
        class={twMerge(
            'mb-3 text-center font-bold tracking-wide uppercase',
            level === 2 ? 'text-lg' : 'text-base',
        )}
    >
        {title}
    </svelte:element>
    {#if introHtml}
        <Prose html={introHtml} class="mb-4" />
    {/if}
    {@render children()}
</section>
