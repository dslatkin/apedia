<script lang="ts">
    import AccessoryTable from '$lib/components/equipment/AccessoryTable.svelte';
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
        <AccessoryTable accessories={category.accessories} />
    {/snippet}
</SectionedLayout>
