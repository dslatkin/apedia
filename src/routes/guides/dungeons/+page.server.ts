import { dungeons } from './dungeons';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Dungeon Locations',
    dungeons,
});
