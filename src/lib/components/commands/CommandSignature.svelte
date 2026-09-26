<script lang="ts">
    import type { Command } from '$types';

    let {
        command,
    }: { command: Pick<Command, 'name' | 'aliases' | 'args' | 'removed'> } =
        $props();

    let forms = $derived([command.name, ...(command.aliases ?? [])]);
</script>

{#snippet signature()}
    <code class="font-mono text-sm font-bold">
        {#each forms as form, index (form)}
            {#if index > 0}or{/if}
            /{form}
        {/each}
        {#each command.args ?? [] as arg, index (index)}
            {arg}
        {/each}
    </code>
{/snippet}

{#if command.removed}
    <del class="text-red">{@render signature()}</del>
    <span class="text-xs">(removed)</span>
{:else}
    {@render signature()}
{/if}
