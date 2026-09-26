import type { Deity, Image, Markdown, SoulColor } from './common';

export interface Requirements {
    strength?: number;
    agility?: number;
    intelligence?: number;
    faith?: number;
    level?: number;
    twoHanded?: boolean;
    deity?: Deity;
    soulColor?: SoulColor;
    classes?: string[];
    gender?: 'male' | 'female';
}

export interface EquipmentBase {
    id: string;
    name: string;
    images: Image[];
    unique?: boolean;
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

export type Percent = number;

export interface Weapon extends EquipmentBase {
    category: WeaponCategory;
    damage: {
        min: number;
        max: number;
    };
    staminaCost: number;
    attackSpeed: number;
    critical?: {
        hit: Percent;
        fumble: Percent;
    };
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

export type ScrollCategory = 'mundane' | 'fighter' | 'apprentice' | 'neophyte';

export interface Scroll extends EquipmentBase {
    category: ScrollCategory;
    skill: string;
}
