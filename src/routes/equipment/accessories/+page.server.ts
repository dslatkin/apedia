import { accessories } from './accessories';
import { accessoryCategories } from '../categories';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Accessories',
    sections: accessoryCategories.map((category) => ({
        id: category.id,
        title: category.label,
        accessories: accessories.filter(
            (accessory) => accessory.category === category.id,
        ),
    })),
});
