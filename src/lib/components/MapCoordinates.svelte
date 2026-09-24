<script lang="ts">
    import type { Coordinates } from '$types';

    let { location }: { location: Coordinates } = $props();
</script>

<span>X: {location.x}, Y: {location.y}</span>
