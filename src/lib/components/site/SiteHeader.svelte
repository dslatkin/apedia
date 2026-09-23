<script lang="ts">
    import { resolve } from '$app/paths';
    import type { NavMenu } from '$types';
    import SiteNav from './SiteNav.svelte';

    /** The site's name, linking home, and its navigation. Shown at the top of every page. */
    let { title, menus }: { title: string; menus: NavMenu[] } = $props();
</script>

<header>
    <p><a href={resolve('/')}>{title}</a></p>
    <SiteNav {menus} />
</header>
