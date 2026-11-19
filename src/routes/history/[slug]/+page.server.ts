import { historyParts } from './parts';
import { loadMarkdownPage } from '$lib/server/pages';
import { error } from '@sveltejs/kit';
import type { EntryGenerator, PageServerLoad } from './$types';

export const entries: EntryGenerator = () =>
    historyParts.map((part) => ({ slug: part.slug }));

export const load: PageServerLoad = ({ params }) => {
    const part = historyParts.find((p) => p.slug === params.slug);
    if (!part) error(404, 'No such page');
    return loadMarkdownPage(part);
};
