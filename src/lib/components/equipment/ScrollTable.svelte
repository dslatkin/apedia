<script lang="ts">
    import type { Scroll } from '$types';
    import DataTable from '../DataTable.svelte';
    import DataMinedNote from './DataMinedNote.svelte';
    import EquipmentName from './EquipmentName.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let {
        scrolls,
        caption,
    }: { scrolls: Scroll[]; caption?: string | undefined } = $props();

    const noteId = $props.id();

    const columns = ['Scroll', 'Skill', 'Effects', 'Requirements'];
</script>

<DataTable {caption} {columns} rows={scrolls}>
    {#snippet row(scroll)}
        <th scope="row">
            <EquipmentName item={scroll} {noteId} />
        </th>
        <td>{scroll.skill}</td>
        <td><ValueList items={scroll.effects} /></td>
        <td><RequirementsList requirements={scroll.requirements} /></td>
    {/snippet}
    {#snippet footnote()}
        <DataMinedNote items={scrolls} id={noteId} />
    {/snippet}
</DataTable>
