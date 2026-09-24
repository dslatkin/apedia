<script lang="ts">
    import { base } from '$app/paths';
    import { isExternal, isFragment } from '$lib/links';
    import type { Href } from '$types';
    import type { Snippet } from 'svelte';

    /**
     * A link whose target comes from content, so it may lead to another page on the site,
     * to a section of the current page, or off the site. Site links get the base path
     * prefixed, which is what `resolve()` does for a pathname; `resolve()` itself is typed
     * per route, so it cannot take a link that may point at any route.
     */
    let {
        href,
        class: className,
        children,
    }: { href: Href; class?: string | undefined; children: Snippet } = $props();
</script>

{#if isExternal(href)}
    <a {href} rel="external" class={className}>{@render children()}</a>
{:else if isFragment(href)}
    <a href="#{href.slice(1)}" class={className}>{@render children()}</a>
{:else}
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- see above -->
    <a href="{base}{href}" class={className}>{@render children()}</a>
{/if}
