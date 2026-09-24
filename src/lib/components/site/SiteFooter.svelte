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

<footer class="bg-white px-3 py-8 text-center text-sm sm:px-6 md:px-8 md:py-10">
    {#if banner}
        <p class="mb-6">
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
    <Prose html={noticeHtml} class="leading-normal" />
</footer>
