<script module lang="ts">
    import type { Link } from '$types';

    export interface LinkListItem extends Link {
        description?: string | undefined;
    }
</script>

<script lang="ts">
    import SiteLink from './SiteLink.svelte';

    /** A list of links, each with an optional description: fansites, download mirrors, clan sites. */
    let { links }: { links: LinkListItem[] } = $props();
</script>

<ul>
    {#each links as link, index (index)}
        <li>
            <SiteLink href={link.href}>{link.label}</SiteLink>
            {#if link.description}
                – {link.description}
            {/if}
        </li>
    {/each}
</ul>
