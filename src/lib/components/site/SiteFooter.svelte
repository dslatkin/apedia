<script lang="ts">
    import { asset } from '$app/paths';
    import type { Image, NavLink } from '$types';
    import SiteLink from '../SiteLink.svelte';

    let {
        links,
        banner,
    }: {
        links: NavLink[];
        banner?: Image | undefined;
    } = $props();
</script>

<footer class="bg-white px-3 py-8 text-center text-sm sm:px-6 md:px-8 md:py-10">
    {#if banner}
        <p class="mb-6">
            <img
                src={asset(banner.src)}
                alt={banner.alt}
                width="468"
                height="60"
                class="mx-auto block h-auto max-w-full"
            />
        </p>
    {/if}
    <nav aria-label="Footer">
        <ul
            class="flex flex-wrap justify-center gap-x-2 gap-y-1 [&>li:not(:last-child)]:after:ml-2 [&>li:not(:last-child)]:after:content-['|']"
        >
            {#each links as link (link.href)}
                <li><SiteLink href={link.href}>{link.label}</SiteLink></li>
            {/each}
        </ul>
    </nav>
</footer>
