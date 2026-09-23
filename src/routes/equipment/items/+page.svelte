<script lang="ts">
    import ItemTable from '$lib/components/equipment/ItemTable.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    sections={data.sections}
    sectionsLabel="Categories"
>
    {#snippet section(category)}
        <ItemTable items={category.items} />
    {/snippet}
</SectionedLayout>
