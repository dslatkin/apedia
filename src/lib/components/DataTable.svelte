<script lang="ts" generics="T">
    import type { Snippet } from 'svelte';

    /**
     * The shell of a data table: caption, column headers and body. The page supplies the
     * cells of each row, using `<th scope="row">` for the cell that names the row.
     */
    let {
        caption,
        columns,
        rows,
        row,
    }: {
        caption?: string | undefined;
        columns: string[];
        rows: T[];
        row: Snippet<[T]>;
    } = $props();
</script>

<table>
    {#if caption}
        <caption>{caption}</caption>
    {/if}
    <thead>
        <tr>
            {#each columns as column (column)}
                <th scope="col">{column}</th>
            {/each}
        </tr>
    </thead>
    <tbody>
        {#each rows as item, index (index)}
            <tr>{@render row(item)}</tr>
        {/each}
    </tbody>
</table>
