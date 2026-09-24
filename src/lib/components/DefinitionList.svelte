<script module lang="ts">
    import type { Link } from '$types';

    export type DefinitionEntry = { term: string } & (
        { text: string } | { list: string[] } | { links: Link[] }
    );
</script>

<script lang="ts">
    import LinkList from './LinkList.svelte';
    import ValueList from './ValueList.svelte';

    let { entries }: { entries: DefinitionEntry[] } = $props();
</script>

<dl
    class="grid grid-cols-1 gap-px border border-black bg-black text-sm sm:grid-cols-[max-content_1fr]"
>
    {#each entries as entry (entry.term)}
        <dt class="bg-green-dark px-3 py-2 font-bold">{entry.term}</dt>
        <dd class="bg-teal px-3 py-2">
            {#if 'text' in entry}
                {entry.text}
            {:else if 'list' in entry}
                <ValueList items={entry.list} />
            {:else}
                <LinkList links={entry.links} class="list-none pl-0" />
            {/if}
        </dd>
    {/each}
</dl>
