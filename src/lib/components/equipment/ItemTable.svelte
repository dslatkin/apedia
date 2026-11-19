<script lang="ts">
    import type { ItemView } from '$lib/views';
    import DataTable from '../DataTable.svelte';
    import DataMinedNote from './DataMinedNote.svelte';
    import EquipmentName from './EquipmentName.svelte';
    import Prose from '../Prose.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let {
        items,
        caption,
    }: { items: ItemView[]; caption?: string | undefined } = $props();

    const noteId = $props.id();

    let hasNotes = $derived(items.some((item) => item.notesHtml));
    let columns = $derived([
        'Item',
        'Effects',
        'Requirements',
        ...(hasNotes ? ['Notes'] : []),
    ]);
</script>

<DataTable {caption} {columns} rows={items}>
    {#snippet row(item)}
        <th scope="row">
            <EquipmentName {item} {noteId} />
        </th>
        <td><ValueList items={item.effects} /></td>
        <td><RequirementsList requirements={item.requirements} /></td>
        {#if hasNotes}
            <td>
                {#if item.notesHtml}
                    <Prose html={item.notesHtml} />
                {/if}
            </td>
        {/if}
    {/snippet}
    {#snippet footnote()}
        <DataMinedNote {items} id={noteId} />
    {/snippet}
</DataTable>
