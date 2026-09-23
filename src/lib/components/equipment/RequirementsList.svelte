<script lang="ts">
    import { formatRequirements } from '$lib/equipment';
    import type { Requirements } from '$types';
    import ValueList from '../ValueList.svelte';

    /** What a character needs to use a piece of equipment. */
    let { requirements }: { requirements: Requirements } = $props();
</script>

<ValueList items={formatRequirements(requirements)} />
