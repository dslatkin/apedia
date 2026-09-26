<script lang="ts">
    import { resolve } from '$app/paths';
    import PageHeader from '$lib/components/PageHeader.svelte';
</script>

<div class="mx-auto max-w-prose">
    <PageHeader title="Message Sent" />
    <p>Thanks! Your message has been sent.</p>
    <p class="mt-4"><a href={resolve('/')}>Back to the home page</a></p>
</div>
