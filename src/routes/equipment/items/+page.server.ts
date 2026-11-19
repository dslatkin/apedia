import { itemCategories } from '../categories';
import { items } from './items';
import { renderMarkdown } from '$lib/server/markdown';
import type { ItemView } from '$lib/views';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Items',
    sections: itemCategories.map((category) => ({
        id: category.id,
        title: category.label,
        items: items
            .filter((item) => item.category === category.id)
            .map(({ notes, ...item }): ItemView => ({
                ...item,
                notesHtml: notes ? renderMarkdown(notes).html : undefined,
            })),
    })),
});
