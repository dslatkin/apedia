<script lang="ts">
    import { asset } from '$app/paths';
    import type { Image } from '$types';

    let {
        name,
        images,
        badge,
    }: { name: string; images: Image[]; badge?: string | undefined } = $props();
</script>

<span class="flex flex-col items-center gap-1">
    {#if images.length}
        <span class="flex flex-wrap justify-center gap-1">
            {#each images as image (image.src)}
                <img
                    src={asset(image.src)}
                    alt={image.alt}
                    class="inline-block"
                />
            {/each}
        </span>
    {/if}
    <span class="font-bold">{name}</span>
    {#if badge}
        <span class="text-xs italic">({badge})</span>
    {/if}
</span>
