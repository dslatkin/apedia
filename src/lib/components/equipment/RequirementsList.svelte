<script lang="ts">
    import { formatRequirements } from '$lib/equipment';
    import type { Requirements } from '$types';
    import ValueList from '../ValueList.svelte';

    let { requirements }: { requirements: Requirements } = $props();
</script>

<ValueList items={formatRequirements(requirements)} />
