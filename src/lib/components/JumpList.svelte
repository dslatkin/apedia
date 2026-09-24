<script lang="ts">
    import type { Category } from '$types';

    /**
     * Links to the sections of the current page, shown before them so a reader can jump
     * straight to one: weapon categories, gallery sections, monster level bands, clans.
     * Written "Axes | Crushing | Daggers" as on the old pages, and kept in view on wide
     * screens as the page scrolls.
     */
    let { items, label = 'Sections' }: { items: Category[]; label?: string } =
        $props();
</script>

<nav
    aria-label={label}
    class="-mx-3 border-y border-black bg-gray-light px-3 py-2 sm:-mx-6 sm:px-6 md:sticky md:top-0 md:z-10 md:-mx-8 md:px-8"
>
    <ul
        class="flex flex-wrap justify-center gap-x-2 gap-y-1 text-sm [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:content-['|']"
    >
        {#each items as item (item.id)}
            <li>
                <a href="#{item.id}" class="whitespace-nowrap">{item.label}</a>
            </li>
        {/each}
    </ul>
</nav>
