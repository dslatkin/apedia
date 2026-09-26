import type { Coordinates, Image, Markdown } from './common';

export interface Npc {
    id: string;
    name: string;
    images: Image[];
    location?: Coordinates;
    notes?: Markdown;
}

export type LevelLimit = number | 'none' | 'unknown';

export interface Dungeon {
    id: string;
    name: string;
    entrances: DungeonEntrance[];
    minLevel: LevelLimit;
    maxLevel: LevelLimit;
    noEntry?: boolean;
}

export interface DungeonEntrance {
    label?: string;
    location: Coordinates;
}

export interface Obelisk {
    id: string;
    area: string;
    location: Coordinates;
}
