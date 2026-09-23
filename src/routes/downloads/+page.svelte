<script lang="ts">
    import DownloadEntry from '$lib/components/downloads/DownloadEntry.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    sections={data.downloads}
    sectionsLabel="Downloads"
>
    {#snippet section(download)}
        <DownloadEntry {download} />
    {/snippet}
</SectionedLayout>
