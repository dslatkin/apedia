import type { Markdown } from './common';

/**
 * A character class. Classes form a tree rooted at Mundane, with three branches
 * (Fighter, Apprentice, Neophyte) that each fan out into advanced classes.
 */
export interface CharacterClass {
    /** Used as the `#fragment` anchor. */
    id: string;
    name: string;
    /** `undefined` for the root class, Mundane. */
    parent?: string;
    description?: Markdown;
    /** Skills that define the class. Absent when the site listed them as "to be determined". */
    keySkills?: string[];
    /** Skills or levels needed to advance into the class. Absent when "to be determined". */
    requirements?: string[];
    /** Skills only this class can learn. */
    exclusiveSkills?: string[];
}

/** The Character Classes page. */
export interface ClassTree {
    intro: Markdown;
    /** Parents come before their children, in the order the site listed them. */
    classes: CharacterClass[];
}
