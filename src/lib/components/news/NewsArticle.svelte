<script lang="ts">
    import { formatDate } from '$lib/format';
    import type { NewsPostView } from '$lib/views';
    import Prose from '../Prose.svelte';

    /** One dated news post. Posts have no titles, so the date is the heading. */
    let { post }: { post: NewsPostView } = $props();
</script>

<article>
    <header>
        <h2><time datetime={post.date}>{formatDate(post.date)}</time></h2>
        <p>Posted by {post.author}</p>
    </header>
    <Prose html={post.html} />
</article>
