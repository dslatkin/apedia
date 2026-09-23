<script lang="ts">
    import type { NavItem, NavMenu } from '$types';
    import SiteLink from '../SiteLink.svelte';

    /** The site's menus, nested as in the old drop-down menu bar. */
    let { menus }: { menus: NavMenu[] } = $props();
</script>

{#snippet items(list: NavItem[])}
    <ul>
        {#each list as item (item.label)}
            <li>
                {#if 'items' in item}
                    <span>{item.label}</span>
                    {@render items(item.items)}
                {:else}
                    <SiteLink href={item.href}>{item.label}</SiteLink>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<nav aria-label="Site">
    {@render items(menus)}
</nav>
