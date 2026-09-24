<script lang="ts">
    import { tw } from '$lib/tw';
    import { twMerge } from 'tailwind-merge';

    /**
     * Markdown that a `load` function has already rendered to HTML. This is the only place
     * rendered content is inserted as HTML; it is authored in this repository, not by
     * visitors, so it is trusted.
     */
    let {
        html,
        class: className,
    }: { html: string; class?: string | undefined } = $props();

    /** Rendered elements cannot carry classes, so they are styled from here. */
    const prose = tw(
        'leading-relaxed [&_blockquote]:my-4 [&_blockquote]:border-l-4 [&_blockquote]:border-black [&_blockquote]:pl-4 [&_blockquote]:italic [&_code]:font-mono [&_code]:text-sm [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:uppercase [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-bold [&_hr]:my-6 [&_hr]:border-black [&_img]:inline-block [&_img]:max-w-full [&_img]:align-middle [&_li]:my-1 [&_li>ol]:my-1 [&_li>ul]:my-1 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&>:first-child]:mt-0 [&>:last-child]:mb-0',
    );
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- see above -->
<div class={twMerge(prose, className)}>{@html html}</div>
