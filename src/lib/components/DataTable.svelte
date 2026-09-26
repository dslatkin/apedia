<script lang="ts" generics="T">
    import { tw } from '$lib/tw';
    import type { Snippet } from 'svelte';
    import { twMerge } from 'tailwind-merge';

    let {
        caption,
        columns,
        rows,
        row,
        variant = 'data',
    }: {
        caption?: string | undefined;
        columns: string[];
        rows: T[];
        row: Snippet<[T]>;
        variant?: 'data' | 'text';
    } = $props();

    const table = tw(
        'w-full border-separate border-spacing-px bg-black text-sm [&_tbody_th]:px-2 [&_tbody_th]:py-2 [&_tbody_th]:font-normal [&_td]:px-2 [&_td]:py-2 [&_thead_th]:bg-green-dark [&_thead_th]:px-2 [&_thead_th]:py-2 [&_thead_th]:align-middle [&_thead_th]:text-xs [&_thead_th]:font-bold [&_thead_th]:uppercase',
    );
    const variants = {
        data: tw(
            '[&_tbody_th]:bg-teal [&_tbody_th]:text-center [&_tbody_th]:align-middle [&_td]:bg-teal [&_td]:text-center [&_td]:align-middle',
        ),
        text: tw(
            '[&_tbody_th]:bg-gray-light [&_tbody_th]:text-left [&_tbody_th]:align-top [&_td]:bg-gray-light [&_td]:text-left [&_td]:align-top',
        ),
    };
</script>

<div class="overflow-x-auto">
    <table class={twMerge(table, variants[variant])}>
        {#if caption}
            <caption class="mb-2 caption-top text-left font-bold"
                >{caption}</caption
            >
        {/if}
        <thead>
            <tr>
                {#each columns as column (column)}
                    <th scope="col">{column}</th>
                {/each}
            </tr>
        </thead>
        <tbody>
            {#each rows as item, index (index)}
                <tr>{@render row(item)}</tr>
            {/each}
        </tbody>
    </table>
</div>
