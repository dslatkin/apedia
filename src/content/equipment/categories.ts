import type {
    AccessoryCategory,
    ArmorSlot,
    Category,
    ItemCategory,
    ScrollCategory,
    WeaponCategory,
} from '$types';

export const weaponCategories: Category<WeaponCategory>[] = [
    { id: 'axes', label: 'Axes' },
    { id: 'crushing', label: 'Crushing' },
    { id: 'daggers', label: 'Daggers' },
    { id: 'non-violent', label: 'Non-Violent' },
    { id: 'ranged', label: 'Ranged' },
    { id: 'spears', label: 'Spears' },
    { id: 'staffs', label: 'Staffs' },
    { id: 'swords', label: 'Swords' },
];

export const armorSlots: Category<ArmorSlot>[] = [
    { id: 'head', label: 'Head' },
    { id: 'body', label: 'Body' },
    { id: 'hands', label: 'Hands' },
    { id: 'shields', label: 'Shields' },
    { id: 'feet', label: 'Feet' },
];

export const accessoryCategories: Category<AccessoryCategory>[] = [
    { id: 'necklaces', label: 'Necklaces' },
    { id: 'rings', label: 'Rings' },
];

export const itemCategories: Category<ItemCategory>[] = [
    { id: 'ammo', label: 'Ammo' },
    { id: 'food', label: 'Food' },
    { id: 'household', label: 'Household' },
    { id: 'junk', label: 'Junk' },
    { id: 'lights', label: 'Lights' },
    { id: 'materials', label: 'Materials' },
    { id: 'mounts', label: 'Mounts' },
    { id: 'potions', label: 'Potions' },
    { id: 'valuables', label: 'Valuables' },
];

export const scrollCategories: Category<ScrollCategory>[] = [
    { id: 'mundane', label: 'Mundane' },
    { id: 'fighter', label: 'Fighter' },
    { id: 'apprentice', label: 'Apprentice' },
    { id: 'neophyte', label: 'Neophyte' },
];
