<script lang="ts">
    import { resolve } from '$app/paths';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title="News" />

<ul
    class="grid gap-px border border-black bg-black text-sm sm:grid-cols-2 md:grid-cols-3"
>
    {#each data.months as month (month.id)}
        <li class="bg-teal px-3 py-2">
            <a href={resolve('/news/[month]', { month: month.id })}
                >{month.label}</a
            >
            <span class="text-xs">
                ({month.count}
                {month.count === 1 ? 'post' : 'posts'})
            </span>
        </li>
    {/each}
</ul>
