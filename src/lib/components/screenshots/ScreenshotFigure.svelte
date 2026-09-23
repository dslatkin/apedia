<script lang="ts">
    import { asset } from '$app/paths';
    import type { ScreenshotView } from '$lib/views';
    import PictureLink from '../PictureLink.svelte';
    import Prose from '../Prose.svelte';

    /** A screenshot with its caption, extra views and credit. */
    let { screenshot }: { screenshot: ScreenshotView } = $props();
</script>

<figure>
    <PictureLink picture={screenshot} />
    <figcaption>
        <strong>{screenshot.name}</strong>
        <Prose html={screenshot.descriptionHtml} />
        {#if screenshot.alternates}
            <ul>
                {#each screenshot.alternates as view (view.full)}
                    <li><a href={asset(view.full)}>{view.label}</a></li>
                {/each}
            </ul>
        {/if}
        {#if screenshot.submittedBy}
            <p>Submitted by {screenshot.submittedBy}</p>
        {/if}
    </figcaption>
</figure>
