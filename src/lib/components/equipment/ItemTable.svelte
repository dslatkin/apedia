<script lang="ts">
    import type { ItemView } from '$lib/views';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import Prose from '../Prose.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    let {
        items,
        caption,
    }: { items: ItemView[]; caption?: string | undefined } = $props();

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
            <Nameplate
                name={item.name}
                images={item.images}
                badge={item.unique ? 'Unique' : undefined}
            />
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
</DataTable>
