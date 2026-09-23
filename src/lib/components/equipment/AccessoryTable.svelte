<script lang="ts">
    import type { Accessory } from '$types';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    /** The necklaces or the rings. */
    let {
        accessories,
        caption,
    }: { accessories: Accessory[]; caption?: string | undefined } = $props();

    const columns = ['Accessory', 'Effects', 'Requirements'];
</script>

<DataTable {caption} {columns} rows={accessories}>
    {#snippet row(accessory)}
        <th scope="row">
            <Nameplate
                name={accessory.name}
                images={accessory.images}
                badge={accessory.unique ? 'Unique' : undefined}
            />
        </th>
        <td><ValueList items={accessory.effects} /></td>
        <td><RequirementsList requirements={accessory.requirements} /></td>
    {/snippet}
</DataTable>
