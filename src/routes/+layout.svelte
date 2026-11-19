<script lang="ts">
    import { asset } from '$app/paths';
    import { page } from '$app/state';
    import SiteFooter from '$lib/components/site/SiteFooter.svelte';
    import SiteHeader from '$lib/components/site/SiteHeader.svelte';
    import type { LayoutProps } from './$types';
    import './layout.css';

    let { data, children }: LayoutProps = $props();

    // Share cards need an absolute address.
    const shareImage = $derived(
        new URL(asset('/images/share-card.jpg'), page.url).href,
    );
</script>

<svelte:head>
    <meta name="description" content={data.siteDescription} />
    <meta property="og:type" content="website" />
    <meta property="og:title" content={data.siteTitle} />
    <meta property="og:description" content={data.siteDescription} />
    <meta property="og:image" content={shareImage} />
    <meta property="og:image:width" content="374" />
    <meta property="og:image:height" content="81" />
    <meta property="og:image:alt" content="Whispers in Akarra" />
    <meta name="twitter:card" content="summary_large_image" />
</svelte:head>

<a
    href="#content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:border focus:border-black focus:bg-white focus:px-3 focus:py-2"
>
    Skip to content
</a>

<!--
    The page is a container, so layouts can respond to its width in the same rem units as
    the frame's widths: `@5xl/page` is 64rem.
-->
<div class="@container/page">
    <div
        class="container mx-auto divide-y divide-black border border-black bg-gray-light sm:my-4 md:my-8 @5xl/page:max-lg:w-[calc(100%/3+var(--breakpoint-md)*2/3)] @5xl/page:max-lg:max-w-none"
    >
        <SiteHeader title={data.siteTitle} menus={data.menus} />
        <!-- The gutters are variables so a page can bleed past them, e.g. `-mx-(--gutter-x)`. -->
        <main
            id="content"
            class="px-(--gutter-x) py-(--gutter-y) [--gutter-x:--spacing(3)] [--gutter-y:--spacing(5)] sm:[--gutter-x:--spacing(6)] sm:[--gutter-y:--spacing(6)] md:[--gutter-x:--spacing(8)] md:[--gutter-y:--spacing(8)]"
        >
            {@render children()}
        </main>
        <SiteFooter links={data.footerLinks} banner={data.footerBanner} />
    </div>
</div>
