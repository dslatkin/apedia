<script lang="ts">
    import type { Quote } from '$types';

    /** A quotation with its attribution, e.g. a clan's motto. */
    let { quote }: { quote: Quote } = $props();
</script>

<figure>
    <blockquote>
        <p>{quote.text}</p>
    </blockquote>
    <figcaption>{quote.attribution}</figcaption>
</figure>
