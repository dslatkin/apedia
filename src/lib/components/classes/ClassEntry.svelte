<script lang="ts">
    import type { CharacterClassView } from '$lib/views';
    import DefinitionList, {
        type DefinitionEntry,
    } from '../DefinitionList.svelte';
    import Prose from '../Prose.svelte';

    let { characterClass }: { characterClass: CharacterClassView } = $props();

    const TO_BE_DETERMINED = 'To be determined';

    let entries = $derived.by(() => {
        const { parent, parentName, keySkills, requirements, exclusiveSkills } =
            characterClass;
        const out: DefinitionEntry[] = [];
        if (parent && parentName) {
            out.push({
                term: 'Advances from',
                links: [{ label: parentName, href: `#${parent}` }],
            });
        }
        out.push(
            keySkills
                ? { term: 'Key Skills', list: keySkills }
                : { term: 'Key Skills', text: TO_BE_DETERMINED },
            requirements
                ? { term: 'Requirements', list: requirements }
                : { term: 'Requirements', text: TO_BE_DETERMINED },
        );
        if (exclusiveSkills) {
            out.push({ term: 'Exclusive Skills', list: exclusiveSkills });
        }
        return out;
    });
</script>

{#if characterClass.descriptionHtml}
    <Prose html={characterClass.descriptionHtml} class="mb-3" />
{/if}
<DefinitionList {entries} />
