import { downloads } from '$content/downloads';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({ title: 'Downloads', downloads });
