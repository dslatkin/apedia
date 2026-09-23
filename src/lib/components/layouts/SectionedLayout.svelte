<script lang="ts" generics="T extends { id: string; title: string }">
    import type { Snippet } from 'svelte';
    import JumpList from '../JumpList.svelte';
    import PageHeader from '../PageHeader.svelte';
    import Section from '../Section.svelte';

    /**
     * A page split into linkable sections with a jump list before them: the equipment
     * pages, the bestiary, commands, screenshot galleries, clans, downloads. The page
     * supplies what goes inside each section.
     */
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
