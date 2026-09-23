<script lang="ts">
    import LinkList from '$lib/components/LinkList.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title={data.title} />
<LinkList links={data.links} />
