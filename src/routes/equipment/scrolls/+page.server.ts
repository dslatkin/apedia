import { scrollCategories } from '../categories';
import { scrolls } from './scrolls';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Scrolls',
    sections: scrollCategories.map((category) => ({
        id: category.id,
        title: category.label,
        scrolls: scrolls.filter((scroll) => scroll.category === category.id),
    })),
});
