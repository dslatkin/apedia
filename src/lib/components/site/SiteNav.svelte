<script lang="ts">
    import type { NavMenu } from '$types';
    import DesktopNav from './DesktopNav.svelte';
    import MobileNav from './MobileNav.svelte';

    let { menus }: { menus: NavMenu[] } = $props();
</script>

<MobileNav {menus} />
<DesktopNav {menus} />
