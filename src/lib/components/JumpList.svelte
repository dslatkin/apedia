<script lang="ts">
    import type { Category } from '$types';

    /**
     * Links to the sections of the current page, shown before them so a reader can jump
     * straight to one: weapon categories, gallery sections, monster level bands, clans.
     */
    let { items, label = 'Sections' }: { items: Category[]; label?: string } =
        $props();
</script>

<nav aria-label={label}>
    <ul>
        {#each items as item (item.id)}
            <li><a href="#{item.id}">{item.label}</a></li>
        {/each}
    </ul>
</nav>
