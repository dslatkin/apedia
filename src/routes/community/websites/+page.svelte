<script lang="ts">
    import LinkList from '$lib/components/LinkList.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import Section from '$lib/components/Section.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title={data.title} introHtml={data.introHtml} />

<Section id="active" title="Active">
    <LinkList links={data.active} />
</Section>

<Section id="inactive" title="Inactive">
    <LinkList links={data.inactive} />
</Section>
