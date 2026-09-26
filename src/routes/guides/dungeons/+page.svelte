<script lang="ts">
    import PageHeader from '$lib/components/PageHeader.svelte';
    import DungeonTable from '$lib/components/world/DungeonTable.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title={data.title} />
<DungeonTable dungeons={data.dungeons} />
