import { obelisks } from '$content/guides/obelisks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Obelisk Locations',
    obelisks,
});
