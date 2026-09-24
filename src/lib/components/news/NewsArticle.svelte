<script lang="ts">
    import { formatDate } from '$lib/format';
    import type { NewsPostView } from '$lib/views';
    import Prose from '../Prose.svelte';

    /** One dated news post. Posts have no titles, so the date is the heading, on a bar as on the old pages. */
    let { post }: { post: NewsPostView } = $props();
</script>

<article class="mt-8 first:mt-0">
    <header class="flex flex-wrap items-baseline gap-x-3 gap-y-1">
        <h2
            class="border border-black bg-blue px-3 py-1 text-sm font-bold text-white"
        >
            <time datetime={post.date}>{formatDate(post.date)}</time>
        </h2>
        <p class="text-xs italic">Posted by {post.author}</p>
    </header>
    <Prose html={post.html} class="mt-3 pl-3 sm:pl-6" />
</article>
