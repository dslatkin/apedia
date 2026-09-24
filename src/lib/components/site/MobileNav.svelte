<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem, NavMenu } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    /**
     * The menus for small screens, built for touch and no script: a button opens them as
     * a popover panel under the sticky bar (the button is the panel's anchor), and each
     * menu is a `<details>` element, sharing a `name` so only one is open at a time.
     */
    let { menus }: { menus: NavMenu[] } = $props();

    const panel = tw(
        'fixed inset-x-0 top-12 bottom-auto m-0 h-auto max-h-[calc(100dvh-3rem)] w-auto overflow-y-auto border-0 border-t border-black bg-purple p-0 text-black supports-[anchor-name:--menu]:[top:anchor(bottom)]',
    );
    const summary = tw(
        'flex cursor-pointer list-none items-center justify-between gap-2 px-4 py-3 whitespace-nowrap select-none group-open:bg-blue group-open:text-white hover:bg-blue hover:text-white [&::-webkit-details-marker]:hidden',
    );
    const list = tw(
        'divide-y divide-black border-t border-black bg-gray-light',
    );
    const link = tw(
        'block px-4 py-2 text-black no-underline hover:bg-blue hover:text-white',
    );
    const groupLabel = tw('block px-4 py-2 font-bold');
</script>

{#snippet entries(list_: NavItem[], depth: number)}
    <ul class={list}>
        {#each list_ as entry (entry.label)}
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
                        class={twMerge(link, depth > 1 && 'pl-8')}
                    >
                        {entry.label}
                    </SiteLink>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<!-- The bar stays at the top of the screen so the menu is always in reach. -->
<nav aria-label="Site" class="sticky top-0 z-20 bg-purple md:hidden">
    <button
        type="button"
        popovertarget="site-menu"
        class="flex items-center gap-3 px-4 py-3 font-bold"
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
            <li class="border-t border-black first:border-t-0">
                <details name="site-menu" class="group">
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
