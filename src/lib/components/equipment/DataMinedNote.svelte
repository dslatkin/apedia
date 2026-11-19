<script lang="ts">
    import type { EquipmentBase } from '$types';

    let { items, id }: { items: EquipmentBase[]; id: string } = $props();

    let count = $derived(items.filter((item) => item.dataMined).length);
</script>

{#if count}
    <p id="data-mined-{id}" class="mt-2 scroll-mt-24 md:scroll-mt-16">
        <small class="italic">
            {#if count === 1}
                *This item was added to the website after the game shut down
                through data mining, and its recipe was likely not known before.
            {:else}
                *These items were added to the website after the game shut down
                through data mining, and their recipes were likely not known
                before.
            {/if}
        </small>
    </p>
{/if}
