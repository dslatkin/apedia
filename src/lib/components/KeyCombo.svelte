<script lang="ts">
    /** Keys pressed together, e.g. CTRL + A. */
    let { keys }: { keys: string[] } = $props();
</script>

<kbd class="inline-flex flex-wrap items-center gap-1 font-sans text-sm">
    {#each keys as key, index (index)}
        {#if index > 0}+{/if}
        <kbd
            class="inline-block border border-black bg-gray-light px-1.5 py-0.5 font-mono text-xs font-bold"
        >
            {key}
        </kbd>
    {/each}
</kbd>
