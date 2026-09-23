import type { LevelBand, Monster, MonsterAbility } from '$types';

export function inBand(monster: Monster, band: LevelBand): boolean {
    return (
        monster.level >= band.min &&
        (band.max === undefined || monster.level <= band.max)
    );
}

function describe(ability: MonsterAbility): string {
    return ability.color ? `${ability.name} (${ability.color})` : ability.name;
}

/** A monster's notable abilities as lines of text, the way the bestiary listed them. */
export function describeAbilities(monster: Monster): string[] {
    const out: string[] = [];
    if (monster.casts)
        out.push(`Casts: ${monster.casts.map(describe).join(', ')}`);
    if (monster.summons) {
        out.push(`Summons: ${monster.summons.map(describe).join(', ')}`);
    }
    for (const trait of monster.traits ?? []) out.push(describe(trait));
    if (monster.eventOnly)
        out.push('Only summoned during events or random spawns');
    return out;
}
