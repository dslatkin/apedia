<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import NpcTable from '$lib/components/world/NpcTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title={data.title} />
<NpcTable npcs={data.npcs} />
