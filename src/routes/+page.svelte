<script lang="ts">
    import { resolve } from '$app/paths';
    import NewsArticle from '$lib/components/news/NewsArticle.svelte';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import PictureLink from '$lib/components/PictureLink.svelte';
    import type { Picture } from '$types';
    import { onMount } from 'svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();

    let weapon = $state<Picture>();
    onMount(() => {
        const { randomWeapons } = data;
        weapon =
            randomWeapons[Math.floor(Math.random() * randomWeapons.length)];
    });
</script>

<div
    class="-mx-(--gutter-x) -my-(--gutter-y) @5xl/page:grid @5xl/page:grid-cols-3"
>
    <div
        class="px-(--gutter-x) py-(--gutter-y) @5xl/page:col-span-2 @5xl/page:max-lg:px-4"
    >
        <PageHeader title={data.title} />
        <p>
            <strong>Current known items in the database:</strong>
            392
        </p>
        <div class="mt-6">
            {#each data.posts as post (post.date)}
                <NewsArticle {post} />
            {/each}
        </div>
        <p class="mt-8"><a href={resolve('/news')}>Older news</a></p>
    </div>

    <aside
        aria-labelledby="random-weapon"
        class="flex flex-col items-center gap-4 border-t border-black bg-green-light px-4 py-6 text-center @5xl/page:border-t-0 @5xl/page:border-l @5xl/page:max-lg:px-2"
    >
        <h2 id="random-weapon" class="text-xl font-bold uppercase">
            Random Weapon
        </h2>
        {#if weapon}
            <PictureLink picture={weapon} class="[zoom:1.25]" />
            <p class="font-bold">(Click the picture for an enlargement)</p>
        {/if}
    </aside>
</div>
