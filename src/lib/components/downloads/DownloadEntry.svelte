<script lang="ts">
    import { asset } from '$app/paths';
    import { formatBytes } from '$lib/format';
    import type { Download } from '$types';
    import DefinitionList, {
        type DefinitionEntry,
    } from '../DefinitionList.svelte';

    let { download }: { download: Download } = $props();

    let entries = $derived<DefinitionEntry[]>([
        { term: 'Version', text: download.version },
        { term: 'File Name', text: download.fileName },
        { term: 'File Size', text: formatBytes(download.fileSize) },
        {
            term: 'Mirrors',
            links: download.mirrors.map((mirror) => ({
                label: mirror.location,
                href: mirror.url,
            })),
        },
    ]);
</script>

<p class="mb-4 text-center">
    <a
        href={asset(download.file)}
        class="inline-block border border-black bg-green-dark px-5 py-2 font-bold text-black uppercase no-underline hover:bg-blue hover:text-white"
    >
        Download now
    </a>
</p>
<DefinitionList {entries} />
