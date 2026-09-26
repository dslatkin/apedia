<script lang="ts">
    import type { NavItem } from '$types';
    import DesktopNav from './DesktopNav.svelte';
    import MobileNav from './MobileNav.svelte';

    let { menus }: { menus: NavItem[] } = $props();
</script>

<MobileNav {menus} />
<DesktopNav {menus} />
