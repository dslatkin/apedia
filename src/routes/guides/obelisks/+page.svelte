<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import ObeliskTable from '$lib/components/world/ObeliskTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title={data.title} />
<ObeliskTable obelisks={data.obelisks} />
