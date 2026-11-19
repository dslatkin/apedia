import { weaponCategories } from '../categories';
import { weapons } from './weapons';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Weapons',
    sections: weaponCategories.map((category) => ({
        id: category.id,
        title: category.label,
        weapons: weapons.filter((weapon) => weapon.category === category.id),
    })),
});
