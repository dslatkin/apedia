<script lang="ts">
    import { formatDate } from '$lib/format';
    import type { NewsPostView } from '$lib/views';
    import Prose from '../Prose.svelte';

    /** One dated news post. Posts have no titles, so the date is the heading. */
    let { post }: { post: NewsPostView } = $props();
</script>

<article class="mt-8 first:mt-0">
    <h2 class="font-bold">
        <time datetime={post.date}>{formatDate(post.date)}</time>
    </h2>
    <Prose html={post.html} class="mt-3" />
</article>
