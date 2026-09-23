<script lang="ts">
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import Prose from '$lib/components/Prose.svelte';
    import ScreenshotFigure from '$lib/components/screenshots/ScreenshotFigure.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    introHtml={data.introHtml}
    sections={data.sections}
>
    {#snippet section(gallery)}
        {#if gallery.introHtml}
            <Prose html={gallery.introHtml} />
        {/if}
        <ul>
            {#each gallery.screenshots as screenshot (screenshot.full)}
                <li><ScreenshotFigure {screenshot} /></li>
            {/each}
        </ul>
    {/snippet}
</SectionedLayout>
