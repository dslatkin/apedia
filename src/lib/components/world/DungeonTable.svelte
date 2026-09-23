<script lang="ts">
    import type { Dungeon, LevelLimit } from '$types';
    import DataTable from '../DataTable.svelte';
    import MapCoordinates from '../MapCoordinates.svelte';
    import Nameplate from '../Nameplate.svelte';

    /** Where each dungeon is and who may enter. */
    let {
        dungeons,
        caption,
    }: { dungeons: Dungeon[]; caption?: string | undefined } = $props();

    const columns = ['Dungeon', 'Entrances', 'Minimum Level', 'Maximum Level'];

    function limit(value: LevelLimit): string {
        if (value === 'none') return 'None';
        if (value === 'unknown') return 'Unknown';
        return `Level ${value}`;
    }
</script>

<DataTable {caption} {columns} rows={dungeons}>
    {#snippet row(dungeon)}
        <th scope="row">
            <Nameplate
                name={dungeon.name}
                images={[]}
                badge={dungeon.noEntry ? 'No Entry' : undefined}
            />
        </th>
        <td>
            <ul>
                {#each dungeon.entrances as entrance, index (index)}
                    <li>
                        {#if entrance.label}{entrance.label}:{/if}
                        <MapCoordinates location={entrance.location} />
                    </li>
                {/each}
            </ul>
        </td>
        <td>{limit(dungeon.minLevel)}</td>
        <td>{limit(dungeon.maxLevel)}</td>
    {/snippet}
</DataTable>
