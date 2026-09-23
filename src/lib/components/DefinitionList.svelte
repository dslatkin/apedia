<script module lang="ts">
    import type { Link } from '$types';

    /** One row of a definition list: a term and either text, a list of values, or links. */
    export type DefinitionEntry = { term: string } & (
        { text: string } | { list: string[] } | { links: Link[] }
    );
</script>

<script lang="ts">
    import LinkList from './LinkList.svelte';
    import ValueList from './ValueList.svelte';

    /** Facts about one thing, e.g. a download's version and size or a clan's tag and allies. */
    let { entries }: { entries: DefinitionEntry[] } = $props();
</script>

<dl>
    {#each entries as entry (entry.term)}
        <dt>{entry.term}</dt>
        <dd>
            {#if 'text' in entry}
                {entry.text}
            {:else if 'list' in entry}
                <ValueList items={entry.list} />
            {:else}
                <LinkList links={entry.links} />
            {/if}
        </dd>
    {/each}
</dl>
