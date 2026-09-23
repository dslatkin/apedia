<script lang="ts">
    import type { Scroll } from '$types';
    import DataTable from '../DataTable.svelte';
    import Nameplate from '../Nameplate.svelte';
    import ValueList from '../ValueList.svelte';
    import RequirementsList from './RequirementsList.svelte';

    /** The scrolls readable by one class. */
    let {
        scrolls,
        caption,
    }: { scrolls: Scroll[]; caption?: string | undefined } = $props();

    const columns = ['Scroll', 'Skill', 'Effects', 'Requirements'];
</script>

<DataTable {caption} {columns} rows={scrolls}>
    {#snippet row(scroll)}
        <th scope="row">
            <Nameplate
                name={scroll.name}
                images={scroll.images}
                badge={scroll.unique ? 'Unique' : undefined}
            />
        </th>
        <td>{scroll.skill}</td>
        <td><ValueList items={scroll.effects} /></td>
        <td><RequirementsList requirements={scroll.requirements} /></td>
    {/snippet}
</DataTable>
