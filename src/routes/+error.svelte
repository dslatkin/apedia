<script lang="ts">
    import { resolve } from '$app/paths';
    import { page } from '$app/state';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<PageHeader
    title={page.status === 404 ? 'Page Not Found' : `Error ${page.status}`}
/>

<p>{page.error?.message ?? 'Something went wrong.'}</p>
<p class="mt-4"><a href={resolve('/')}>Back to the home page</a></p>
