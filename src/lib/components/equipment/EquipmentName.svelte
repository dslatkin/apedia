<script lang="ts">
    import type { EquipmentBase } from '$types';
    import Nameplate from '../Nameplate.svelte';

    let { item, noteId }: { item: EquipmentBase; noteId: string } = $props();
</script>

<Nameplate
    name={item.name}
    images={item.images}
    badge={item.unique ? 'Unique' : undefined}
    footnoteId={item.dataMined ? `data-mined-${noteId}` : undefined}
/>
