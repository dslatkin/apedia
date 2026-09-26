<script lang="ts">
    import ArmorTable from '$lib/components/equipment/ArmorTable.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    sections={data.sections}
    sectionsLabel="Slots"
>
    {#snippet section(slot)}
        <ArmorTable armor={slot.armor} />
    {/snippet}
</SectionedLayout>
