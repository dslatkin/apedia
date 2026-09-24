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
    <main id="content" class="px-3 py-5 sm:px-6 sm:py-6 md:px-8 md:py-8">
        {@render children()}
    </main>
    <SiteFooter noticeHtml={data.footerHtml} banner={data.footerBanner} />
</div>
