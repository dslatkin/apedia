<script lang="ts">
    import type { Heading } from '$lib/markdown';

    /** An outline of a prose page, built from its level 2 and 3 headings. */
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

<nav aria-labelledby="table-of-contents">
    <h2 id="table-of-contents">Table of Contents</h2>
    <ol>
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
