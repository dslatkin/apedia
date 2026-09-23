<script lang="ts">
    import SiteFooter from '$lib/components/site/SiteFooter.svelte';
    import SiteHeader from '$lib/components/site/SiteHeader.svelte';
    import type { LayoutProps } from './$types';
    import './layout.css';

    let { data, children }: LayoutProps = $props();
</script>

<SiteHeader title={data.siteTitle} menus={data.menus} />
<main>
    {@render children()}
</main>
<SiteFooter noticeHtml={data.footerHtml} />
