<script lang="ts">
    import { asset, resolve } from '$app/paths';
    import { page } from '$app/state';
    import type { NavMenu } from '$types';
    import SiteNav from './SiteNav.svelte';

    let { title, menus }: { title: string; menus: NavMenu[] } = $props();
</script>

<header>
    <a href={resolve('/')} class="block border-b border-black bg-white">
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
