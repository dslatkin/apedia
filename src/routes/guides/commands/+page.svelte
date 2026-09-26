<script lang="ts">
    import CommandTable from '$lib/components/commands/CommandTable.svelte';
    import ShortcutTable from '$lib/components/commands/ShortcutTable.svelte';
    import SectionedLayout from '$lib/components/layouts/SectionedLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<SectionedLayout
    title={data.title}
    introHtml={data.introHtml}
    sections={data.sections}
>
    {#snippet section(group)}
        {#if 'commands' in group}
            <CommandTable commands={group.commands} />
        {:else}
            <ShortcutTable shortcuts={group.shortcuts} />
        {/if}
    {/snippet}
</SectionedLayout>
