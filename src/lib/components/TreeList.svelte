<script module lang="ts">
    /** A node in a tree of in-page links. Roots have no parent. */
    export interface TreeNode {
        id: string;
        label: string;
        parent?: string | undefined;
    }
</script>

<script lang="ts">
    /** Nested links to sections of the current page, e.g. the character class tree. */
    let { nodes, label = 'Tree' }: { nodes: TreeNode[]; label?: string } =
        $props();
</script>

{#snippet branch(parent: string | undefined)}
    {@const children = nodes.filter((node) => node.parent === parent)}
    {#if children.length}
        <ul>
            {#each children as node (node.id)}
                <li>
                    <a href="#{node.id}">{node.label}</a>
                    {@render branch(node.id)}
                </li>
            {/each}
        </ul>
    {/if}
{/snippet}

<nav aria-label={label}>
    {@render branch(undefined)}
</nav>
