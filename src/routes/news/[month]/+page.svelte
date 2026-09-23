<script lang="ts">
    import LinkList, {
        type LinkListItem,
    } from '$lib/components/LinkList.svelte';
    import NewsArticle from '$lib/components/news/NewsArticle.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let otherMonths = $derived(
        data.months
            .filter((month) => month.id !== data.title)
            .map((month): LinkListItem => ({
                label: month.label,
                href: `/news/${month.id}`,
            })),
    );
</script>

<PageHeader title={data.title} />

{#each data.posts as post (post.date)}
    <NewsArticle {post} />
{/each}

<nav aria-label="Other months">
    <LinkList links={otherMonths} />
</nav>
