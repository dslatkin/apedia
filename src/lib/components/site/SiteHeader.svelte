<script lang="ts">
    import { asset, resolve } from '$app/paths';
    import { page } from '$app/state';
    import type { NavMenu } from '$types';
    import SiteNav from './SiteNav.svelte';

    /** The title banner, linking home, and the site's navigation. Shown at the top of every page. */
    let { title, menus }: { title: string; menus: NavMenu[] } = $props();
</script>

<header class="divide-y divide-black">
    <a href={resolve('/')} class="block bg-white">
        <img
            src={asset('/images/title.jpg')}
            alt={title}
            width="794"
            height="81"
            class="h-auto w-full"
        />
    </a>
    <!-- Re-created on every navigation, so that whatever menu was open closes. -->
    {#key page.url.href}
        <SiteNav {menus} />
    {/key}
</header>
