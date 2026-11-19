<script lang="ts">
    import { tw } from '$lib/tw';
    import { twMerge } from 'tailwind-merge';

    let {
        html,
        class: className,
    }: { html: string; class?: string | undefined } = $props();

    const prose = tw(
        "leading-relaxed [&_blockquote]:my-5 [&_blockquote]:border [&_blockquote]:border-black [&_blockquote]:bg-green-light [&_blockquote]:px-4 [&_blockquote]:py-3 [&_blockquote]:text-lg [&_blockquote]:italic [&_blockquote>p]:my-0 [&_blockquote>p+p]:mt-2 [&_blockquote>p+p]:text-right [&_blockquote>p+p]:text-sm [&_blockquote>p+p]:font-bold [&_blockquote>p+p]:not-italic [&_blockquote>p:first-child]:before:content-['“'] [&_blockquote>p:first-child]:after:content-['”'] [&_code]:font-mono [&_code]:text-sm [&_h2]:mt-8 [&_h2]:mb-3 [&_h2]:text-lg [&_h2]:font-bold [&_h2]:uppercase [&_h3]:mt-6 [&_h3]:mb-2 [&_h3]:font-bold [&_hr]:my-6 [&_hr]:w-1/4 [&_hr]:border-black [&_hr]:opacity-50 [&_img]:inline-block [&_img]:max-w-full [&_img]:align-middle [&_li]:my-1 [&_li>ol]:my-1 [&_li>ul]:my-1 [&_ol]:my-3 [&_ol]:list-decimal [&_ol]:pl-6 [&_p]:my-3 [&_ul]:my-3 [&_ul]:list-disc [&_ul]:pl-6 [&>:first-child]:mt-0 [&>:last-child]:mb-0",
    );
</script>

<!-- eslint-disable-next-line svelte/no-at-html-tags -- trusted HTML rendered from Markdown in this repo -->
<div class={twMerge(prose, className)}>{@html html}</div>
