import type { Coordinates, Image, Markdown } from './common';

/** A non-player character, listed on the NPC Locations page. */
export interface Npc {
    id: string;
    name: string;
    /** More than one when the NPC has variants, e.g. the three horse colors. */
    images: Image[];
    /** Absent when the location is unknown or deliberately left for players to find. */
    location?: Coordinates;
    notes?: Markdown;
}

/** A level restriction on entering a dungeon. */
export type LevelLimit = number | 'none' | 'unknown';

export interface Dungeon {
    id: string;
    name: string;
    entrances: DungeonEntrance[];
    minLevel: LevelLimit;
    maxLevel: LevelLimit;
    /** Marked "(No Entry)" on the site. */
    noEntry?: boolean;
}

export interface DungeonEntrance {
    /** e.g. "Gifted Entrance", "Spectator Entrance". Absent when there is only one kind. */
    label?: string;
    location: Coordinates;
}

/** A respawn obelisk and the area it stands in. */
export interface Obelisk {
    id: string;
    area: string;
    location: Coordinates;
}
