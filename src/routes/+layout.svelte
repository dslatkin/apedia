<script lang="ts">
    import SiteFooter from '$lib/components/site/SiteFooter.svelte';
    import SiteHeader from '$lib/components/site/SiteHeader.svelte';
    import type { LayoutProps } from './$types';
    import './layout.css';

    let { data, children }: LayoutProps = $props();
</script>

<a
    href="#content"
    class="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-50 focus:border focus:border-black focus:bg-white focus:px-3 focus:py-2"
>
    Skip to content
</a>

<!-- The old pages were one bordered table: banner, menu bar, content and footer, with black lines between them. -->
<div
    class="mx-auto max-w-4xl divide-y divide-black border-black bg-gray-light sm:my-4 sm:border md:my-8"
>
    <SiteHeader title={data.siteTitle} menus={data.menus} />
    <!-- The gutters are variables so a page can bleed past them, e.g. `-mx-(--gutter-x)`. -->
    <main
        id="content"
        class="px-(--gutter-x) py-(--gutter-y) [--gutter-x:--spacing(3)] [--gutter-y:--spacing(5)] sm:[--gutter-x:--spacing(6)] sm:[--gutter-y:--spacing(6)] md:[--gutter-x:--spacing(8)] md:[--gutter-y:--spacing(8)]"
    >
        {@render children()}
    </main>
    <SiteFooter noticeHtml={data.footerHtml} banner={data.footerBanner} />
</div>
