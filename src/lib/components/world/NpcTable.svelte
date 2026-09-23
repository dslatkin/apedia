<script lang="ts">
    import type { NpcView } from '$lib/views';
    import DataTable from '../DataTable.svelte';
    import MapCoordinates from '../MapCoordinates.svelte';
    import Nameplate from '../Nameplate.svelte';
    import Prose from '../Prose.svelte';

    /** Where to find each non-player character. */
    let { npcs, caption }: { npcs: NpcView[]; caption?: string | undefined } =
        $props();

    const columns = ['NPC', 'Location', 'Notes'];
</script>

<DataTable {caption} {columns} rows={npcs}>
    {#snippet row(npc)}
        <th scope="row"><Nameplate name={npc.name} images={npc.images} /></th>
        <td>
            {#if npc.location}
                <MapCoordinates location={npc.location} />
            {:else}
                Unknown
            {/if}
        </td>
        <td>
            {#if npc.notesHtml}
                <Prose html={npc.notesHtml} />
            {/if}
        </td>
    {/snippet}
</DataTable>
