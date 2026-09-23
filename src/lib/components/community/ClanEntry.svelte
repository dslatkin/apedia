<script lang="ts">
    import type { ClanView } from '$lib/views';
    import BlockQuote from '../BlockQuote.svelte';
    import DefinitionList, {
        type DefinitionEntry,
    } from '../DefinitionList.svelte';

    /** Everything known about one clan. Shown inside the clan's section. */
    let { clan }: { clan: ClanView } = $props();

    let entries = $derived.by(() => {
        const out: DefinitionEntry[] = [
            { term: 'Tag', text: clan.tag },
            { term: 'Creators', list: clan.creators },
        ];
        if (clan.requirements) {
            out.push({ term: 'Requirements', text: clan.requirements });
        }
        out.push(
            clan.allied.length
                ? { term: 'Allied', links: clan.allied }
                : { term: 'Allied', text: 'None' },
            clan.hostile.length
                ? { term: 'Hostile', links: clan.hostile }
                : { term: 'Hostile', text: 'None' },
        );
        if (clan.links.length) out.push({ term: 'Links', links: clan.links });
        return out;
    });
</script>

<DefinitionList {entries} />
{#if clan.quote}
    <BlockQuote quote={clan.quote} />
{/if}
