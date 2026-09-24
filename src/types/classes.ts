import type { Markdown } from './common';

export interface CharacterClass {
    id: string;
    name: string;
    parent?: string;
    description?: Markdown;
    keySkills?: string[];
    requirements?: string[];
    exclusiveSkills?: string[];
}

export interface ClassTree {
    intro: Markdown;
    classes: CharacterClass[];
}
