<script module lang="ts">
    export interface TreeNode {
        id: string;
        label: string;
        parent?: string | undefined;
    }
</script>

<script lang="ts">
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

<nav
    aria-label={label}
    class="my-6 border border-black bg-teal p-4 sm:p-5 [&_li]:my-1 [&_ul_ul]:ml-2 [&_ul_ul]:border-l [&_ul_ul]:border-black [&_ul_ul]:pl-4 [&>ul>li>a]:font-bold"
>
    {@render branch(undefined)}
</nav>
