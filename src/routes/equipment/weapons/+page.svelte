<script lang="ts">
    import WeaponTable from '$lib/components/equipment/WeaponTable.svelte';
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
        <WeaponTable weapons={category.weapons} />
    {/snippet}
</SectionedLayout>
