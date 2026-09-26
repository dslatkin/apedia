<script module lang="ts">
    import type { Link } from '$types';

    export interface LinkListItem extends Link {
        description?: string | undefined;
    }
</script>

<script lang="ts">
    import { twMerge } from 'tailwind-merge';
    import SiteLink from './SiteLink.svelte';

    let {
        links,
        class: className,
    }: { links: LinkListItem[]; class?: string | undefined } = $props();
</script>

<ul class={twMerge('list-disc pl-5 [&>li]:my-1', className)}>
    {#each links as link, index (index)}
        <li>
            <SiteLink href={link.href}>{link.label}</SiteLink>
            {#if link.description}
                – {link.description}
            {/if}
        </li>
    {/each}
</ul>
