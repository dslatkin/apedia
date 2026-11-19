import { obelisks } from './obelisks';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Obelisk Locations',
    obelisks,
});
