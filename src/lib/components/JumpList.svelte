<script lang="ts">
    import type { Category } from '$types';

    let { items, label = 'Sections' }: { items: Category[]; label?: string } =
        $props();
</script>

<nav
    aria-label={label}
    class="sticky top-0 z-10 -mx-(--gutter-x) bg-gray-light/85 px-(--gutter-x) py-2 backdrop-blur-xs"
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
