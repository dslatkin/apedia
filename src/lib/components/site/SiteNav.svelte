<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem, NavMenu } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    /**
     * The site's menus. Below `md` a button opens them as a panel of collapsible sub-menus;
     * from `md` up they are a bar with drop-downs, as on the old site. Both use the same
     * markup and no script: the panel is a popover, each sub-menu is a `<details>` element
     * (sharing a `name`, so only one is open at a time), and on wide screens each
     * drop-down is placed under its `<summary>` with CSS anchor positioning, flipping
     * sideways when it would leave the viewport. Browsers without anchor positioning get
     * the drop-down at the left of the bar instead.
     */
    let { menus }: { menus: NavMenu[] } = $props();

    /** Menus whose entries are all groups (Screenshots, Equipment) spread the groups across the bar. */
    function allGroups(items: NavItem[]): boolean {
        return items.every((item) => 'items' in item);
    }

    /**
     * The panel the button opens on small screens, below the bar (the button is its
     * anchor); the bar itself from `md` up.
     */
    const panel = tw(
        'fixed inset-x-0 top-12 bottom-auto m-0 h-auto max-h-[calc(100dvh-3rem)] w-auto overflow-y-auto border-0 border-t border-black bg-purple p-0 text-black supports-[anchor-name:--menu]:[top:anchor(bottom)] md:static md:inset-auto md:flex md:max-h-none md:overflow-visible md:border-t-0',
    );
    /** From `md` up the menus share the bar's width, each growing from its label's width. */
    const topItem = tw(
        'border-t border-black first:border-t-0 md:flex-1 md:border-t-0',
    );
    const summary = tw(
        'flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 whitespace-nowrap select-none [anchor-name:--menu] group-open:bg-blue group-open:text-white hover:bg-blue hover:text-white md:justify-center md:gap-1 md:px-2 md:py-1.5 [&::-webkit-details-marker]:hidden',
    );
    /** A sub-menu: a list under its summary on small screens, a drop-down from `md` up. */
    const dropdown = tw(
        'divide-y divide-black border-t border-black bg-gray-light md:absolute md:top-full md:z-20 md:border md:bg-purple md:shadow-[4px_4px_0_#00000066] md:supports-[anchor-name:--menu]:[top:anchor(bottom)] md:supports-[anchor-name:--menu]:[position-anchor:--menu]',
    );
    const dropdownList = tw(
        'md:left-0 md:w-max md:min-w-48 md:supports-[anchor-name:--menu]:[left:anchor(left)] md:supports-[anchor-name:--menu]:[position-try-fallbacks:flip-inline]',
    );
    const dropdownSpread = tw(
        'md:inset-x-0 md:grid md:auto-cols-fr md:grid-flow-col md:divide-x md:divide-y-0',
    );
    const group = tw('divide-y divide-black border-t border-black');
    const link = tw(
        'block px-4 py-2 text-black no-underline hover:bg-blue hover:text-white md:px-3 md:py-1.5',
    );
    const groupLabel = tw('block px-4 py-2 font-bold md:px-3 md:py-1.5');
    const nested = tw('pl-8 md:pl-6');
</script>

{#snippet entries(list: NavItem[], depth: number)}
    <ul
        class={depth === 1
            ? twMerge(dropdown, allGroups(list) ? dropdownSpread : dropdownList)
            : group}
    >
        {#each list as entry (entry.label)}
            <li>
                {#if 'items' in entry}
                    {#if entry.href}
                        <SiteLink
                            href={entry.href}
                            class={twMerge(link, 'font-bold')}
                        >
                            {entry.label}
                        </SiteLink>
                    {:else}
                        <span class={groupLabel}>{entry.label}</span>
                    {/if}
                    {@render entries(entry.items, depth + 1)}
                {:else}
                    <SiteLink
                        href={entry.href}
                        class={twMerge(link, depth > 1 && nested)}
                    >
                        {entry.label}
                    </SiteLink>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<!-- The bar stays at the top of small screens so the menu is always in reach. -->
<nav aria-label="Site" class="sticky top-0 z-20 bg-purple md:relative">
    <button
        type="button"
        popovertarget="site-menu"
        class="flex items-center gap-3 px-4 py-3 font-bold md:hidden"
    >
        <svg class="size-5" viewBox="0 0 20 20" aria-hidden="true">
            <path
                d="M2 5h16M2 10h16M2 15h16"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            />
        </svg>
        Menu
    </button>
    <ul id="site-menu" popover class={panel}>
        {#each menus as menu (menu.label)}
            <li class={topItem}>
                <details name="site-menu" class="group [anchor-scope:--menu]">
                    <summary class={summary}>
                        {menu.label}
                        <svg
                            class="size-3 transition-transform group-open:rotate-180"
                            viewBox="0 0 12 12"
                            aria-hidden="true"
                        >
                            <path
                                d="M2 4l4 4 4-4"
                                fill="none"
                                stroke="currentColor"
                                stroke-width="2"
                            />
                        </svg>
                    </summary>
                    {@render entries(menu.items, 1)}
                </details>
            </li>
        {/each}
    </ul>
</nav>
