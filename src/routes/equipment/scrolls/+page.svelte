<script lang="ts">
    import ScrollTable from '$lib/components/equipment/ScrollTable.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    sections={data.sections}
    sectionsLabel="Classes"
>
    {#snippet section(category)}
        <ScrollTable scrolls={category.scrolls} />
    {/snippet}
</SectionedLayout>
