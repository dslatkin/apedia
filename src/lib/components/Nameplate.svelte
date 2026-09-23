<script lang="ts">
    import { asset } from '$app/paths';
    import type { Image } from '$types';

    /**
     * The name of an entry beside its in-game picture(s), with an optional badge such as
     * "Unique". Used as the row header of data tables.
     */
    let {
        name,
        images,
        badge,
    }: { name: string; images: Image[]; badge?: string | undefined } = $props();
</script>

{#each images as image (image.src)}
    <img src={asset(image.src)} alt={image.alt} />
{/each}
<span>{name}</span>
{#if badge}
    <span>({badge})</span>
{/if}
