import { monsterLevelBands } from '$content/guides/monster-levels';
import { monsters } from '$content/guides/monsters';
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
