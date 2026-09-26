import { shardsPage } from '$content/community/shards';
import { loadMarkdownPage } from '$lib/server/pages';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => loadMarkdownPage(shardsPage);
