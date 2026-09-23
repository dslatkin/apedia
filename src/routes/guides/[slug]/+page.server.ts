import { guides } from '$content/guides';
import { loadMarkdownPage } from '$lib/server/pages';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
    guides.map((guide) => ({ slug: guide.slug }));

export const load: PageServerLoad = ({ params }) => {
    const guide = guides.find((g) => g.slug === params.slug);
    if (!guide) error(404, 'No such guide');
    return loadMarkdownPage(guide);
};
