<script lang="ts">
    import { resolve } from '$app/paths';
    import PageHeader from '$lib/components/PageHeader.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<PageHeader title="News Archives" />

<ul>
    {#each data.months as month (month.id)}
        <li>
            <a href={resolve('/news/[month]', { month: month.id })}
                >{month.label}</a
            >
            ({month.count}
            {month.count === 1 ? 'post' : 'posts'})
        </li>
    {/each}
</ul>
