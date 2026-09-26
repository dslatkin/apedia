import type { Image, SoulColor } from './common';

export type Attitude = 'peaceful' | 'hostile' | 'cooperative' | 'slayer';

export type AttackRange = 'very-close' | 'close' | 'far';

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
    traits?: MonsterAbility[];
    eventOnly?: boolean;
}

export interface LevelBand {
    id: string;
    label: string;
    min: number;
    max?: number;
}
