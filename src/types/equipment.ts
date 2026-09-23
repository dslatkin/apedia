import type { Deity, Image, Markdown, SoulColor } from './common';

/** Everything a character must satisfy to equip or use a piece of equipment. */
export interface Requirements {
    strength?: number;
    agility?: number;
    intelligence?: number;
    faith?: number;
    /** Minimum character level. */
    level?: number;
    twoHanded?: boolean;
    deity?: Deity;
    soulColor?: SoulColor;
    /** Class names that may use it, e.g. ["Neophyte", "Paladin"]. */
    classes?: string[];
    gender?: 'male' | 'female';
}

/** Fields shared by every kind of equipment and item. */
export interface EquipmentBase {
    id: string;
    name: string;
    /** More than one when the item has several appearances, e.g. the Iwid tablet pieces. */
    images: Image[];
    /** Only one exists in the game. */
    unique?: boolean;
    /** Effects as written on the site, e.g. "+10 Stamina Points", "Silver Edge". */
    effects: string[];
    requirements: Requirements;
    notes?: Markdown;
}

export type WeaponCategory =
    | 'axes'
    | 'crushing'
    | 'daggers'
    | 'non-violent'
    | 'ranged'
    | 'spears'
    | 'staffs'
    | 'swords';

/** A percentage from 0 to 100. */
export type Percent = number;

export interface Weapon extends EquipmentBase {
    category: WeaponCategory;
    damage: {
        min: number;
        max: number;
    };
    staminaCost: number;
    attackSpeed: number;
    /** Melee weapons only. */
    critical?: {
        hit: Percent;
        fumble: Percent;
    };
    /** Ranged weapons only. */
    range?: {
        near: number;
        medium: number;
        far: number;
    };
}

export type ArmorSlot = 'head' | 'body' | 'hands' | 'shields' | 'feet';

export interface Armor extends EquipmentBase {
    slot: ArmorSlot;
    armorClass: number;
    damageReduction: number;
    staminaCost: number;
}

export type AccessoryCategory = 'necklaces' | 'rings';

export interface Accessory extends EquipmentBase {
    category: AccessoryCategory;
}

export type ItemCategory =
    | 'ammo'
    | 'food'
    | 'household'
    | 'junk'
    | 'lights'
    | 'materials'
    | 'mounts'
    | 'potions'
    | 'valuables';

export interface Item extends EquipmentBase {
    category: ItemCategory;
}

/** Scrolls are grouped by the class that can read them. */
export type ScrollCategory = 'mundane' | 'fighter' | 'apprentice' | 'neophyte';

export interface Scroll extends EquipmentBase {
    category: ScrollCategory;
    /** The skill or spell learned by reading it. */
    skill: string;
}
