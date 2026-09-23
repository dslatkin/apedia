import type { Image, SoulColor } from './common';

/** How a monster behaves towards players. A monster can have more than one. */
export type Attitude = 'peaceful' | 'hostile' | 'cooperative' | 'slayer';

/** Distances a monster can attack from. A monster can have more than one. */
export type AttackRange = 'very-close' | 'close' | 'far';

/** A spell a monster casts, a creature it summons, or another ability, and the color of magic involved. */
export interface MonsterAbility {
    name: string;
    color?: SoulColor;
}

export interface Monster {
    id: string;
    name: string;
    image: Image;
    level: number;
    attitudes: Attitude[];
    attackRanges: AttackRange[];
    casts?: MonsterAbility[];
    summons?: MonsterAbility[];
    /** Other notable abilities, e.g. "Spider Poison I" (yellow), "Double Target Attack", "Stealth Mode". */
    traits?: MonsterAbility[];
    /** Only appears when summoned during events or as a random spawn. */
    eventOnly?: boolean;
}

/** A range of levels the bestiary is split into, e.g. "Levels 25 - 49". */
export interface LevelBand {
    /** Used as the `#fragment` anchor, e.g. "levels-25-49". */
    id: string;
    label: string;
    min: number;
    /** Absent for the open-ended top band. */
    max?: number;
}
