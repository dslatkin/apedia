<script lang="ts">
    /**
     * Markdown that a `load` function has already rendered to HTML. This is the only place
     * rendered content is inserted as HTML; it is authored in this repository, not by
     * visitors, so it is trusted.
     */
    let { html }: { html: string } = $props();
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- see above -->
<div>{@html html}</div>
