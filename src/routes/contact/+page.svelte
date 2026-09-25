<script lang="ts">
    import ContactForm from '$lib/components/contact/ContactForm.svelte';
    import ArticleLayout from '$lib/components/layouts/ArticleLayout.svelte';
    import type { PageProps } from './$types';

    let { data }: PageProps = $props();
</script>

<ArticleLayout
    title={data.title}
    author={data.author}
    html={data.html}
    headings={data.headings}
>
    <ContactForm accessKey={data.accessKey} />
</ArticleLayout>
