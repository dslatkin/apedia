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

<!-- News on the left with the random weapon beside it, as on the old home page. -->
<div class="md:grid md:grid-cols-4 md:items-start md:gap-8">
    <aside
        aria-labelledby="random-weapon"
        class="flex flex-col items-center gap-3 border border-black bg-green-light p-4 text-center md:col-start-4 md:row-start-1"
    >
        <h2 id="random-weapon" class="font-bold uppercase">Random Weapon</h2>
        {#if weapon}
            <PictureLink picture={weapon} />
            <p class="text-xs">Click the picture for an enlargement.</p>
        {/if}
    </aside>

    <div class="mt-6 md:col-span-3 md:col-start-1 md:row-start-1 md:mt-0">
        <p class="border border-black bg-teal px-3 py-2 text-sm font-bold">
            Current known items in the database: {data.itemCount}
        </p>
        <div class="mt-6">
            {#each data.posts as post (post.date)}
                <NewsArticle {post} />
            {/each}
        </div>
        <p class="mt-8"><a href={resolve('/news')}>Older news</a></p>
    </div>
</div>
