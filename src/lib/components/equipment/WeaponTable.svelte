<script lang="ts">
    import type { Weapon } from '$types';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let {
        weapons,
        caption,
    }: { weapons: Weapon[]; caption?: string | undefined } = $props();

    let ranged = $derived(weapons.some((weapon) => weapon.range !== undefined));
    let columns = $derived([
        'Weapon',
        'Damage (min / max)',
        'Stamina Cost',
        'Attack Speed',
        ranged ? 'Range (near / medium / far)' : 'Critical (hit / fumble)',
        'Effects',
        'Requirements',
    ]);
</script>

<DataTable {caption} {columns} rows={weapons}>
    {#snippet row(weapon)}
        <th scope="row">
            <Nameplate
                name={weapon.name}
                images={weapon.images}
                badge={weapon.unique ? 'Unique' : undefined}
            />
        </th>
        <td>{weapon.damage.min.toFixed(1)} / {weapon.damage.max.toFixed(1)}</td>
        <td>{weapon.staminaCost.toFixed(1)}</td>
        <td>{weapon.attackSpeed}</td>
        <td>
            {#if weapon.range}
                {weapon.range.near} / {weapon.range.medium} / {weapon.range.far}
            {:else if weapon.critical}
                {weapon.critical.hit}% / {weapon.critical.fumble}%
            {/if}
        </td>
        <td><ValueList items={weapon.effects} /></td>
        <td><RequirementsList requirements={weapon.requirements} /></td>
    {/snippet}
</DataTable>
