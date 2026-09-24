<script lang="ts">
    import type { Shortcut } from '$types';
    import DataTable from '../DataTable.svelte';
    import KeyCombo from '../KeyCombo.svelte';

    /** The keyboard shortcuts. */
    let {
        shortcuts,
        caption,
    }: { shortcuts: Shortcut[]; caption?: string | undefined } = $props();

    const columns = ['Shortcut', 'Explanation'];
</script>

<DataTable {caption} {columns} rows={shortcuts} variant="text">
    {#snippet row(shortcut)}
        <th scope="row" class="whitespace-nowrap"
            ><KeyCombo keys={shortcut.keys} /></th
        >
        <td>{shortcut.description}</td>
    {/snippet}
</DataTable>
