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
        <!-- A black grid with a teal cell per screenshot, like the old tables, but as many across as fit. -->
        <ul
            class="grid gap-px border border-black bg-black sm:grid-cols-2 lg:grid-cols-3"
        >
            {#each gallery.screenshots as screenshot (screenshot.full)}
                <li class="bg-teal"><ScreenshotFigure {screenshot} /></li>
            {/each}
        </ul>
    {/snippet}
</SectionedLayout>
