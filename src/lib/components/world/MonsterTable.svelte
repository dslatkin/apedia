<script lang="ts">
    import { describeAbilities } from '$lib/monsters';
    import type { AttackRange, Attitude, Monster } from '$types';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import ValueList from '../ValueList.svelte';

    /** The monsters in one band of levels. */
    let {
        monsters,
        caption,
    }: { monsters: Monster[]; caption?: string | undefined } = $props();

    const columns = [
        'Monster',
        'Level',
        'Attitude',
        'Attack Range',
        'Abilities',
    ];

    const ATTITUDES: Record<Attitude, string> = {
        peaceful: 'Peaceful',
        hostile: 'Hostile',
        cooperative: 'Cooperative',
        slayer: 'Slayer',
    };
    const RANGES: Record<AttackRange, string> = {
        'very-close': 'Very Close',
        close: 'Close',
        far: 'Far',
    };
</script>

<DataTable {caption} {columns} rows={monsters}>
    {#snippet row(monster)}
        <th scope="row">
            <Nameplate name={monster.name} images={[monster.image]} />
        </th>
        <td>{monster.level}</td>
        <td>
            <ValueList items={monster.attitudes.map((a) => ATTITUDES[a])} />
        </td>
        <td>
            <ValueList items={monster.attackRanges.map((r) => RANGES[r])} />
        </td>
        <td><ValueList items={describeAbilities(monster)} /></td>
    {/snippet}
</DataTable>
