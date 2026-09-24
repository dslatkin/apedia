<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem, NavMenu } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    /**
     * The menu bar for wide screens, working as the old one did and with no script: a
     * menu opens while the pointer is over it, and an entry with a sub-menu (marked `>`)
     * opens that to its side. Only links can take focus; a focused link opens every menu
     * above it, so the keyboard reaches everything by tabbing.
     *
     * A closed menu is clipped to a pixel rather than hidden, so its links stay in the tab
     * order. Menus are placed with CSS anchor positioning, flipping to the other side at
     * the edge of the viewport; browsers without it place them with `top-full`/`left-full`.
     */
    let { menus }: { menus: NavMenu[] } = $props();

    /** Any entry: highlighted while the pointer or focus is inside it, sub-menu included. */
    const item = tw(
        'relative [anchor-scope:--menu] focus-within:bg-blue focus-within:text-white hover:bg-blue hover:text-white',
    );
    const label = tw(
        'flex items-center justify-between gap-4 px-3 py-1.5 whitespace-nowrap text-inherit no-underline [anchor-name:--menu]',
    );
    const topLabel = tw(
        'block px-2 py-1.5 text-center whitespace-nowrap [anchor-name:--menu]',
    );
    /** A sub-menu, clipped away until its entry is hovered or holds focus. */
    const submenu = tw(
        'pointer-events-none absolute z-20 h-px w-px divide-y divide-black overflow-hidden border border-black bg-purple text-black shadow-[4px_4px_0_#00000066] [clip:rect(0,0,0,0)] [li:is(:hover,:focus-within)>&]:pointer-events-auto [li:is(:hover,:focus-within)>&]:h-auto [li:is(:hover,:focus-within)>&]:w-max [li:is(:hover,:focus-within)>&]:min-w-40 [li:is(:hover,:focus-within)>&]:overflow-visible [li:is(:hover,:focus-within)>&]:[clip:auto]',
    );
    /** Under the top-level label. */
    const dropdown = tw(
        'top-full left-0 supports-[anchor-name:--menu]:[top:anchor(bottom)] supports-[anchor-name:--menu]:[left:anchor(left)] supports-[anchor-name:--menu]:[position-anchor:--menu] supports-[anchor-name:--menu]:[position-try-fallbacks:flip-inline]',
    );
    /** Beside the entry that opens it. */
    const flyout = tw(
        'top-0 left-full supports-[anchor-name:--menu]:[top:anchor(top)] supports-[anchor-name:--menu]:[left:anchor(right)] supports-[anchor-name:--menu]:[position-anchor:--menu] supports-[anchor-name:--menu]:[position-try-fallbacks:flip-inline]',
    );
</script>

{#snippet caret()}
    <span aria-hidden="true">&gt;</span>
{/snippet}

{#snippet entries(list: NavItem[], depth: number)}
    <ul class={twMerge(submenu, depth === 1 ? dropdown : flyout)}>
        {#each list as entry (entry.label)}
            <li class={item}>
                {#if 'items' in entry}
                    {#if entry.href}
                        <SiteLink href={entry.href} class={label}>
                            {entry.label}
                            {@render caret()}
                        </SiteLink>
                    {:else}
                        <span class={label}>
                            {entry.label}
                            {@render caret()}
                        </span>
                    {/if}
                    {@render entries(entry.items, depth + 1)}
                {:else}
                    <SiteLink href={entry.href} class={label}
                        >{entry.label}</SiteLink
                    >
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<nav aria-label="Site" class="relative z-20 hidden bg-purple md:block">
    <ul class="flex">
        {#each menus as menu (menu.label)}
            <li class={twMerge(item, 'flex-1')}>
                <span class={topLabel}>{menu.label}</span>
                {@render entries(menu.items, 1)}
            </li>
        {/each}
    </ul>
</nav>
