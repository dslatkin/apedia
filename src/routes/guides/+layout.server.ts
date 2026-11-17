import { loadArchiveNotice } from '$lib/server/pages';
import type { LayoutServerLoad } from './$types';

export const load: LayoutServerLoad = () => loadArchiveNotice();
