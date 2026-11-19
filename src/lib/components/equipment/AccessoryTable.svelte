<script lang="ts">
    import type { Accessory } from '$types';
    import DataTable from '../DataTable.svelte';
    import DataMinedNote from './DataMinedNote.svelte';
    import EquipmentName from './EquipmentName.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let {
        accessories,
        caption,
    }: { accessories: Accessory[]; caption?: string | undefined } = $props();

    const noteId = $props.id();

    const columns = ['Accessory', 'Effects', 'Requirements'];
</script>

<DataTable {caption} {columns} rows={accessories}>
    {#snippet row(accessory)}
        <th scope="row">
            <EquipmentName item={accessory} {noteId} />
        </th>
        <td><ValueList items={accessory.effects} /></td>
        <td><RequirementsList requirements={accessory.requirements} /></td>
    {/snippet}
    {#snippet footnote()}
        <DataMinedNote items={accessories} id={noteId} />
    {/snippet}
</DataTable>
