<script lang="ts">
    import type { Armor } from '$types';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let { armor, caption }: { armor: Armor[]; caption?: string | undefined } =
        $props();

    const columns = [
        'Armor',
        'Armor Class',
        'Damage Reduction',
        'Stamina Cost',
        'Effects',
        'Requirements',
    ];
</script>

<DataTable {caption} {columns} rows={armor}>
    {#snippet row(piece)}
        <th scope="row">
            <Nameplate
                name={piece.name}
                images={piece.images}
                badge={piece.unique ? 'Unique' : undefined}
            />
        </th>
        <td>{piece.armorClass.toFixed(1)}</td>
        <td>{piece.damageReduction.toFixed(1)}</td>
        <td>{piece.staminaCost.toFixed(1)}</td>
        <td><ValueList items={piece.effects} /></td>
        <td><RequirementsList requirements={piece.requirements} /></td>
    {/snippet}
</DataTable>
