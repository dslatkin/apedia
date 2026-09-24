import type { Markdown } from './common';

export interface Command {
    name: string;
    aliases?: string[];
    args?: string[];
    description: Markdown;
    removed?: boolean;
}

export interface CommandGroup {
    id: string;
    title: string;
    commands: Command[];
}

export interface Shortcut {
    keys: string[];
    description: string;
}

export interface CommandReference {
    intro: Markdown;
    groups: CommandGroup[];
    shortcuts: Shortcut[];
}
