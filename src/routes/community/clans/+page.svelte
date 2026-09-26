<script lang="ts">
    import ClanEntry from '$lib/components/community/ClanEntry.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    introHtml={data.introHtml}
    sections={data.sections}
    sectionsLabel="Clans"
>
    {#snippet section(clan)}
        <ClanEntry {clan} />
    {/snippet}
</SectionedLayout>
