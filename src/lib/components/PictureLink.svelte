<script lang="ts">
    import { asset } from '$app/paths';
    import type { Picture } from '$types';

    /** A thumbnail that links to the full-size picture. */
    let { picture }: { picture: Picture } = $props();
</script>

<a href={asset(picture.full)}>
    <img src={asset(picture.thumbnail)} alt={picture.name} />
</a>
