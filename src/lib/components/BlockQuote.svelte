<script lang="ts">
    import type { Quote } from '$types';

    /** A quotation with its attribution, e.g. a clan's motto. */
    let { quote }: { quote: Quote } = $props();
</script>

<figure class="mt-4 border border-black bg-gray-light p-3 sm:p-4">
    <blockquote class="italic">
        <p>“{quote.text}”</p>
    </blockquote>
    <figcaption class="mt-2 text-right text-sm font-bold">
        — {quote.attribution}
    </figcaption>
</figure>
