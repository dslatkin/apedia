<script lang="ts">
    import ClassEntry from '$lib/components/classes/ClassEntry.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import TreeList from '$lib/components/TreeList.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let tree = $derived(
        data.classes.map(({ id, name, parent }) => ({
            id,
            label: name,
            parent,
        })),
    );
</script>

<PageHeader title={data.title} introHtml={data.introHtml} />
<TreeList nodes={tree} label="Class tree" />

{#each data.classes as characterClass (characterClass.id)}
    <Section id={characterClass.id} title={characterClass.name}>
        <ClassEntry {characterClass} />
    </Section>
{/each}
