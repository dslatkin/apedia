import { armor } from './armor';
import { armorSlots } from '../categories';
import type { PageServerLoad } from './$types';

export const load: PageServerLoad = () => ({
    title: 'Armor',
    sections: armorSlots.map((slot) => ({
        id: slot.id,
        title: slot.label,
        armor: armor.filter((piece) => piece.slot === slot.id),
    })),
});
