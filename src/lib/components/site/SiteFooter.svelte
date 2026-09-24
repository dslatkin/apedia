<script lang="ts">
    import { asset } from '$app/paths';
    import type { FooterBanner } from '$types';
    import Prose from '../Prose.svelte';

    /** The copyright and credits notice shown at the bottom of every page, with the banner above it. */
    let {
        noticeHtml,
        banner,
    }: { noticeHtml: string; banner?: FooterBanner | undefined } = $props();
</script>

<footer class="bg-white px-3 py-6 text-center text-xs sm:px-6 md:px-8">
    {#if banner}
        <p class="mb-5">
            <a
                href={banner.href}
                rel="external"
                class="inline-block border border-black"
            >
                <img
                    src={asset(banner.image.src)}
                    alt={banner.image.alt}
                    width="468"
                    height="60"
                    class="block h-auto max-w-full"
                />
            </a>
        </p>
    {/if}
    <Prose html={noticeHtml} class="mx-auto max-w-prose leading-normal" />
</footer>
