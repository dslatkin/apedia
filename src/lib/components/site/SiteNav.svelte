<script lang="ts">
    import type { NavMenu } from '$types';
    import DesktopNav from './DesktopNav.svelte';
    import MobileNav from './MobileNav.svelte';

    /**
     * The site's menus. Small screens get a touch-friendly panel of collapsible menus;
     * wide screens get a bar of hover menus like the old site's. They need different
     * markup, so both are rendered and one is hidden by the breakpoint.
     */
    let { menus }: { menus: NavMenu[] } = $props();
</script>

<MobileNav {menus} />
<DesktopNav {menus} />
