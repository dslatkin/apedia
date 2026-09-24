<script lang="ts">
    import { asset } from '$app/paths';
    import type { Picture } from '$types';
    import { twMerge } from 'tailwind-merge';

    /** A thumbnail that links to the full-size picture. */
    let {
        picture,
        class: className,
    }: { picture: Picture; class?: string | undefined } = $props();
</script>

<a
    href={asset(picture.full)}
    class={twMerge('inline-block border border-black bg-white', className)}
>
    <img
        src={asset(picture.thumbnail)}
        alt={picture.name}
        class="block h-auto max-w-full"
    />
</a>
