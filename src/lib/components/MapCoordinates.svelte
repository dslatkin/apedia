<script lang="ts">
    import type { Coordinates } from '$types';

    /** A position on the world map. */
    let { location }: { location: Coordinates } = $props();
</script>

<span>X: {location.x}, Y: {location.y}</span>
