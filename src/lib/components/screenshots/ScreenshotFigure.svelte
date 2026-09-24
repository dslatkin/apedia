<script lang="ts">
    import { asset } from '$app/paths';
    import type { ScreenshotView } from '$lib/views';
    import PictureLink from '../PictureLink.svelte';
    import Prose from '../Prose.svelte';

    /** A screenshot with its caption, extra views and credit. Fills a cell of the gallery grid. */
    let { screenshot }: { screenshot: ScreenshotView } = $props();
</script>

<figure
    class="flex h-full flex-col items-center gap-2 p-3 text-center text-sm sm:p-4"
>
    <PictureLink picture={screenshot} />
    <figcaption class="flex flex-col gap-1">
        <strong>{screenshot.name}</strong>
        <Prose html={screenshot.descriptionHtml} class="leading-normal" />
        {#if screenshot.alternates}
            <ul class="flex flex-wrap justify-center gap-x-3">
                {#each screenshot.alternates as view (view.full)}
                    <li><a href={asset(view.full)}>{view.label}</a></li>
                {/each}
            </ul>
        {/if}
        {#if screenshot.submittedBy}
            <p class="text-xs italic">Submitted by {screenshot.submittedBy}</p>
        {/if}
    </figcaption>
</figure>
