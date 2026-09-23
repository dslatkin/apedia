<script lang="ts">
    import type { Command } from '$types';

    /** How a command is typed, e.g. `/tell or /t <NAME> <MESSAGE>`, marked when removed. */
    let {
        command,
    }: { command: Pick<Command, 'name' | 'aliases' | 'args' | 'removed'> } =
        $props();

    let forms = $derived([command.name, ...(command.aliases ?? [])]);
</script>

{#snippet signature()}
    <code>
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
    <del>{@render signature()}</del> (removed)
{:else}
    {@render signature()}
{/if}
