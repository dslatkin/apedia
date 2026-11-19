<script lang="ts">
    import { tw } from '$lib/tw';
    import type { NavItem } from '$types';
    import { twMerge } from 'tailwind-merge';
    import SiteLink from '../SiteLink.svelte';

    let { menus }: { menus: NavItem[] } = $props();

    const summary = tw(
        'flex cursor-pointer list-none items-center gap-3 select-none [&::-webkit-details-marker]:hidden',
    );
    const menuSummary = tw(
        'justify-between border-x border-black bg-purple px-4 py-3 whitespace-nowrap group-open/menu:border-b group-open/menu:bg-blue group-open/menu:text-white hover:bg-blue hover:text-white',
    );
    const link = tw(
        'block border-x border-black bg-purple px-3 py-2 text-black no-underline hover:bg-blue hover:text-white',
    );
    const groupLabel = tw(
        'block border-x border-black bg-purple px-3 py-2 italic',
    );
    const parentRow = tw('border-b border-black');
    const fade = tw(
        'transition-opacity duration-200 group-open/nav:opacity-0 motion-reduce:transition-none',
    );
    const turn = tw(
        'origin-center transition-transform duration-200 [transform-box:fill-box] motion-reduce:transition-none',
    );
</script>

<!--
    Each row draws its own side borders and only the rows are purple, and the nav covers the
    frame's side borders, so each inset submenu shows the page background beside it out to the
    edge. The negative bottom margin lays its last
    row's border over the line that closes its parent.
-->
{#snippet entries(list: NavItem[])}
    <ul class="mx-3 -mb-px">
        {#each list as entry (entry.label)}
            <li class="border-b border-black">
                {#if 'items' in entry}
                    {#if entry.href}
                        <SiteLink
                            href={entry.href}
                            class={twMerge(link, parentRow)}
                        >
                            {entry.label}
                        </SiteLink>
                    {:else}
                        <span class={twMerge(groupLabel, parentRow)}>
                            {entry.label}
                        </span>
                    {/if}
                    {@render entries(entry.items)}
                {:else}
                    <SiteLink href={entry.href} class={link}>
                        {entry.label}
                    </SiteLink>
                {/if}
            </li>
        {/each}
    </ul>
{/snippet}

<nav aria-label="Site" class="-mx-px bg-gray-dark md:hidden">
    <details class="group/nav">
        <summary
            class={twMerge(
                summary,
                'border-x border-black bg-purple px-4 py-3 font-bold',
            )}
        >
            <svg
                class="size-5"
                viewBox="0 0 20 20"
                aria-hidden="true"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
            >
                <path d="M2 5h16M2 15h16" class={fade} />
                <!-- Two bars on top of each other, so the middle bar splits into the X. -->
                <path
                    d="M2 10h16"
                    class={twMerge(turn, 'group-open/nav:rotate-45')}
                />
                <path
                    d="M2 10h16"
                    class={twMerge(turn, 'group-open/nav:-rotate-45')}
                />
            </svg>
            Menu
        </summary>
        <ul class="divide-y divide-black border-t border-black">
            {#each menus as menu (menu.label)}
                <li>
                    {#if !('items' in menu)}
                        <SiteLink
                            href={menu.href}
                            class={twMerge(link, 'px-4 py-3')}
                        >
                            {menu.label}
                        </SiteLink>
                    {:else}
                        <details name="site-menu" class="group/menu">
                            <summary class={twMerge(summary, menuSummary)}>
                                {menu.label}
                                <span
                                    aria-hidden="true"
                                    class="transition-transform duration-200 group-open/menu:rotate-90 motion-reduce:transition-none"
                                >
                                    &gt;
                                </span>
                            </summary>
                            {@render entries(menu.items)}
                        </details>
                    {/if}
                </li>
            {/each}
        </ul>
    </details>
</nav>
