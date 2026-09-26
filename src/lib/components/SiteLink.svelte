<script lang="ts">
    import { base } from '$app/paths';
    import { isExternal, isFragment } from '$lib/links';
    import type { Href } from '$types';
    import type { Snippet } from 'svelte';

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
    <!-- eslint-disable-next-line svelte/no-navigation-without-resolve -- resolve() is typed per route and cannot take any-route hrefs -->
    <a href="{base}{href}" class={className}>{@render children()}</a>
{/if}
