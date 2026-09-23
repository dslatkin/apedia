<script lang="ts">
    import Prose from '../Prose.svelte';

    /** The copyright and credits notice shown at the bottom of every page. */
    let { noticeHtml }: { noticeHtml: string } = $props();
</script>

<footer>
    <Prose html={noticeHtml} />
</footer>
