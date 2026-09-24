<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem, NavMenu } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    /**
     * The menus for small screens, built for touch and no script. The Menu button is the
     * summary of a `<details>` element, so the menus open in place and push the page down.
     * Each menu is a `<details>` too, sharing a `name` so only one is open at a time.
     * Sub-menus keep the bar's color and are indented a step per level, as on the desktop.
     */
    let { menus }: { menus: NavMenu[] } = $props();

    const summary = tw(
        'flex cursor-pointer list-none items-center gap-3 select-none [&::-webkit-details-marker]:hidden',
    );
    const menuSummary = tw(
        'justify-between px-4 py-3 whitespace-nowrap group-open/menu:bg-blue group-open/menu:text-white hover:bg-blue hover:text-white',
    );
    const link = tw(
        'block py-2 pr-4 text-black no-underline hover:bg-blue hover:text-white',
    );
    const groupLabel = tw('block py-2 pr-4 font-bold');
    /** Left padding for each level of sub-menu. */
    const indent = [tw('pl-4'), tw('pl-8'), tw('pl-12'), tw('pl-16')];
</script>

{#snippet entries(list: NavItem[], depth: number)}
    <ul class="divide-y divide-black border-t border-black">
        {#each list as entry (entry.label)}
            <li>
                {#if 'items' in entry}
                    {#if entry.href}
                        <SiteLink
                            href={entry.href}
                            class={twMerge(link, indent[depth], 'font-bold')}
                        >
                            {entry.label}
                        </SiteLink>
                    {:else}
                        <span class={twMerge(groupLabel, indent[depth])}>
                            {entry.label}
                        </span>
                    {/if}
                    {@render entries(entry.items, depth + 1)}
                {:else}
                    <SiteLink
                        href={entry.href}
                        class={twMerge(link, indent[depth])}
                    >
                        {entry.label}
                    </SiteLink>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<nav aria-label="Site" class="bg-purple md:hidden">
    <details class="group/nav">
        <summary class={twMerge(summary, 'px-4 py-3 font-bold')}>
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
        </summary>
        <ul class="divide-y divide-black border-t border-black">
            {#each menus as menu (menu.label)}
                <li>
                    <details name="site-menu" class="group/menu">
                        <summary class={twMerge(summary, menuSummary)}>
                            {menu.label}
                            <svg
                                class="size-3 transition-transform group-open/menu:rotate-180"
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
    </details>
</nav>
