import { monsterLevelBands } from './levels';
import { monsters } from './monsters';
import { inBand } from '$lib/monsters';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Monsters',
    sections: monsterLevelBands.map((band) => ({
        id: band.id,
        title: band.label,
        monsters: monsters.filter((monster) => inBand(monster, band)),
    })),
});
