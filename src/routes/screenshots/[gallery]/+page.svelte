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
            <Prose html={gallery.introHtml} class="mb-4" />
        {/if}
        <!-- Cells overlap by 1px so neighboring borders form a single line; empty grid slots stay transparent. -->
        <ul class="grid pt-px pl-px sm:grid-cols-2 lg:grid-cols-3">
            {#each gallery.screenshots as screenshot (screenshot.full)}
                <li class="-mt-px -ml-px border border-black bg-teal">
                    <ScreenshotFigure {screenshot} />
                </li>
            {/each}
        </ul>
    {/snippet}
</SectionedLayout>
