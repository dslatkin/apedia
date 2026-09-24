<script lang="ts">
    /** A short list of values, e.g. an item's effects, with a placeholder when there are none. */
    let { items, empty = 'None' }: { items: string[]; empty?: string } =
        $props();
</script>

{#if items.length}
    <ul class="space-y-0.5">
        {#each items as item, index (index)}
            <li>{item}</li>
        {/each}
    </ul>
{:else}
    <span>{empty}</span>
{/if}
