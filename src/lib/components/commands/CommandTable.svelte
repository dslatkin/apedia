<script lang="ts">
    import type { CommandView } from '$lib/views';
    import DataTable from '../DataTable.svelte';
    import Prose from '../Prose.svelte';
    import CommandSignature from './CommandSignature.svelte';

    /** One group of slash commands. */
    let {
        commands,
        caption,
    }: { commands: CommandView[]; caption?: string | undefined } = $props();

    const columns = ['Command', 'Explanation'];
</script>

<DataTable {caption} {columns} rows={commands} variant="text">
    {#snippet row(command)}
        <th scope="row" class="whitespace-nowrap"
            ><CommandSignature {command} /></th
        >
        <td><Prose html={command.descriptionHtml} class="leading-normal" /></td>
    {/snippet}
</DataTable>
