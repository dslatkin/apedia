<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem, NavMenu } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    let { menus }: { menus: NavMenu[] } = $props();

    const item = tw(
        'relative [anchor-scope:--menu] focus-within:bg-blue focus-within:text-white hover:bg-blue hover:text-white',
    );
    const label = tw(
        'flex items-center justify-between gap-4 px-3 py-1.5 whitespace-nowrap text-inherit no-underline [anchor-name:--menu]',
    );
    const topLabel = tw(
        'block px-2 py-1.5 text-center whitespace-nowrap [anchor-name:--menu]',
    );
    const submenu = tw(
        'pointer-events-none absolute z-20 h-px w-px divide-y divide-black overflow-hidden border border-black bg-purple text-black shadow-[4px_4px_0_#000000b3] [clip:rect(0,0,0,0)] [li:is(:hover,:focus-within)>&]:pointer-events-auto [li:is(:hover,:focus-within)>&]:h-auto [li:is(:hover,:focus-within)>&]:w-max [li:is(:hover,:focus-within)>&]:min-w-40 [li:is(:hover,:focus-within)>&]:overflow-visible [li:is(:hover,:focus-within)>&]:[clip:auto]',
    );
    const dropdown = tw(
        'top-full left-0 supports-[anchor-name:--menu]:[top:anchor(bottom)] supports-[anchor-name:--menu]:[left:anchor(left)] supports-[anchor-name:--menu]:[position-anchor:--menu] supports-[anchor-name:--menu]:[position-try-fallbacks:flip-inline] [li:is(:hover,:focus-within)>&]:min-w-full',
    );
    const flyout = tw(
        'top-0 left-full -mt-px supports-[anchor-name:--menu]:[top:anchor(top)] supports-[anchor-name:--menu]:[left:anchor(right)] supports-[anchor-name:--menu]:[position-anchor:--menu] supports-[anchor-name:--menu]:[position-try-fallbacks:flip-inline]',
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
