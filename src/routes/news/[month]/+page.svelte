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
            .filter((month) => month.label !== data.title)
            .map((month): LinkListItem => ({
                label: month.label,
                href: `/news/${month.id}`,
            })),
    );
</script>

<PageHeader title={data.title} />

<div>
    {#each data.posts as post (post.date)}
        <NewsArticle {post} />
    {/each}
</div>

<nav aria-label="Other months" class="mt-10 border-t border-black pt-4">
    <h2 class="mb-2 text-sm font-bold uppercase">Other months</h2>
    <LinkList
        links={otherMonths}
        class="flex list-none flex-wrap gap-x-4 gap-y-1 pl-0 text-sm"
    />
</nav>
