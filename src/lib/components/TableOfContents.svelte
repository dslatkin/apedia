<script lang="ts">
    import type { Heading } from '$lib/markdown';

    let { headings }: { headings: Heading[] } = $props();

    interface Entry {
        heading: Heading;
        children: Heading[];
    }

    let entries = $derived.by(() => {
        const out: Entry[] = [];
        for (const heading of headings) {
            if (heading.level === 2) {
                out.push({ heading, children: [] });
            } else if (heading.level === 3) {
                out.at(-1)?.children.push(heading);
            }
        }
        return out;
    });
</script>

<nav
    aria-labelledby="table-of-contents"
    class="my-6 border border-black bg-teal p-4 sm:p-5"
>
    <h2 id="table-of-contents" class="mb-2 font-bold uppercase">
        Table of Contents
    </h2>
    <ol
        class="list-decimal pl-6 [&_li]:my-1 [&_ol]:list-[lower-alpha] [&_ol]:pl-6"
    >
        {#each entries as { heading, children } (heading.id)}
            <li>
                <a href="#{heading.id}">{heading.text}</a>
                {#if children.length}
                    <ol>
                        {#each children as child (child.id)}
                            <li><a href="#{child.id}">{child.text}</a></li>
                        {/each}
                    </ol>
                {/if}
            </li>
        {/each}
    </ol>
</nav>
