import { capitalize } from '$lib/format';
import type { Requirements } from '$types';

/** Requirements as the site wrote them, e.g. "20 Strength", "Two-handed", "Gifted Only". */
export function formatRequirements(requirements: Requirements): string[] {
    const { strength, agility, intelligence, faith, level } = requirements;
    const out: string[] = [];
    if (strength !== undefined) out.push(`${strength} Strength`);
    if (agility !== undefined) out.push(`${agility} Agility`);
    if (intelligence !== undefined) out.push(`${intelligence} Intelligence`);
    if (faith !== undefined) out.push(`${faith} Faith`);
    if (level !== undefined) out.push(`Level ${level} Minimum`);
    if (requirements.twoHanded) out.push('Two-handed');
    if (requirements.deity) out.push(`${capitalize(requirements.deity)} Only`);
    if (requirements.soulColor) {
        out.push(`${capitalize(requirements.soulColor)} Soul Color Only`);
    }
    if (requirements.classes)
        out.push(`${requirements.classes.join(' & ')} Only`);
    if (requirements.gender)
        out.push(`${capitalize(requirements.gender)} Only`);
    return out;
}
