<script lang="ts">
    import type { Obelisk } from '$types';
    import DataTable from '../DataTable.svelte';
    import MapCoordinates from '../MapCoordinates.svelte';

    /** Where each respawn obelisk stands. */
    let {
        obelisks,
        caption,
    }: { obelisks: Obelisk[]; caption?: string | undefined } = $props();

    const columns = ['Area', 'Location'];
</script>

<DataTable {caption} {columns} rows={obelisks}>
    {#snippet row(obelisk)}
        <th scope="row">{obelisk.area}</th>
        <td><MapCoordinates location={obelisk.location} /></td>
    {/snippet}
</DataTable>
