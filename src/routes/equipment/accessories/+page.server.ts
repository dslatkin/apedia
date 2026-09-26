import { accessories } from '$content/equipment/accessories';
import { accessoryCategories } from '$content/equipment/categories';
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
