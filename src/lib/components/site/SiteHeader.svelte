<script lang="ts">
    import { asset, resolve } from '$app/paths';
    import { page } from '$app/state';
    import type { NavMenu } from '$types';
    import SiteNav from './SiteNav.svelte';

    let { title, menus }: { title: string; menus: NavMenu[] } = $props();
</script>

<header>
    <a
        href={resolve('/')}
        class="block overflow-hidden border-b border-black bg-white"
    >
        <!--
            On small screens the banner is enlarged and cropped on the right so the title stays
            legible: 160% of the width at a 360px viewport, shrinking linearly to 100% by 768px,
            where the desktop menu takes over.
        -->
        <img
            src={asset('/images/title.jpg')}
            alt={title}
            width="794"
            height="81"
            class="h-auto w-[clamp(100%,calc(406.6px+47.06vw),160%)] max-w-none md:w-full"
        />
    </a>
    <!-- Re-created on every navigation, so that whatever menu was open closes. -->
    {#key page.url.href}
        <SiteNav {menus} />
    {/key}
</header>
