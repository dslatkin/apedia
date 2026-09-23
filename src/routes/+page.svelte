<script lang="ts">
    import { resolve } from '$app/paths';
    import NewsArticle from '$lib/components/news/NewsArticle.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import PictureLink from '$lib/components/PictureLink.svelte';
    import type { Picture } from '$types';
    import { onMount } from 'svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    // Picked in the browser only, so the prerendered page doesn't show one weapon and then swap it.
    let weapon = $state<Picture>();
    onMount(() => {
        const { randomWeapons } = data;
        weapon =
            randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
    });
</script>

<PageHeader title={data.title} />

<aside aria-labelledby="random-weapon">
    <h2 id="random-weapon">Random Weapon</h2>
    {#if weapon}
        <PictureLink picture={weapon} />
        <p>Click the picture for an enlargement.</p>
    {/if}
</aside>

<p>Current known items in the database: {data.itemCount}</p>

{#each data.posts as post (post.date)}
    <NewsArticle {post} />
{/each}

<p><a href={resolve('/news')}>Older news</a></p>
