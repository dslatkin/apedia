import { playPage } from '$content/community/play';
import { loadMarkdownPage } from '$lib/server/pages';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => loadMarkdownPage(playPage);
