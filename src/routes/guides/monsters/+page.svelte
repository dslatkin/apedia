<script lang="ts">
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import MonsterTable from '$lib/components/world/MonsterTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    sections={data.sections}
    sectionsLabel="Levels"
>
    {#snippet section(band)}
        <MonsterTable monsters={band.monsters} />
    {/snippet}
</SectionedLayout>
