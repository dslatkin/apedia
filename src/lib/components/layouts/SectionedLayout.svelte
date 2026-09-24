<script lang="ts" generics="T extends { id: string; title: string }">
    import type { Snippet } from 'svelte';
    import JumpList from '../JumpList.svelte';
    import PageHeader from '../PageHeader.svelte';
    import Section from '../Section.svelte';

    let {
        title,
        author,
        introHtml,
        sections,
        sectionsLabel = 'Sections',
        section,
    }: {
        title: string;
        author?: string | undefined;
        introHtml?: string | undefined;
        sections: T[];
        sectionsLabel?: string;
        section: Snippet<[T]>;
    } = $props();

    let jumpItems = $derived(
        sections.map(({ id, title }) => ({ id, label: title })),
    );
</script>

<PageHeader {title} {author} {introHtml} />
<JumpList items={jumpItems} label={sectionsLabel} />
{#each sections as item (item.id)}
    <Section id={item.id} title={item.title}>
        {@render section(item)}
    </Section>
{/each}
