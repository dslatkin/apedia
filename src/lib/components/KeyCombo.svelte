<script lang="ts">
    /** Keys pressed together, e.g. CTRL + A. */
    let { keys }: { keys: string[] } = $props();
</script>

<kbd>
    {#each keys as key, index (index)}
        {#if index > 0}+{/if}<kbd>{key}</kbd>
    {/each}
</kbd>
