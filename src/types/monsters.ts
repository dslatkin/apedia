import type { Image, SoulColor } from './common';

/** How a monster behaves towards players. A monster can have more than one. */
export type Attitude = 'peaceful' | 'hostile' | 'cooperative' | 'slayer';

/** Distances a monster can attack from. A monster can have more than one. */
export type AttackRange = 'very-close' | 'close' | 'far';

/** A spell a monster casts, or a creature it summons, and the color of magic used. */
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
    /** Other notable behaviors, e.g. "Double Target Attack", "Darkness Emitting", "Stealth Mode". */
    traits?: string[];
    /** Only appears when summoned during events or as a random spawn. */
    eventOnly?: boolean;
}
