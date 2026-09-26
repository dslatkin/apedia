import { historyPage } from '$content/about/history';
import { loadMarkdownPage } from '$lib/server/pages';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => loadMarkdownPage(historyPage);
