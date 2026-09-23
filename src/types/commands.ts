import type { Markdown } from './common';

/** A slash command typed into the chat box, e.g. `/tell <NAME> <MESSAGE>`. */
export interface Command {
    /** Primary form without the slash, e.g. "tell". */
    name: string;
    /** Alternative forms, e.g. ["t"]. */
    aliases?: string[];
    /**
     * Arguments in order, e.g. ["<NAME>", "<MESSAGE>"]. Placeholders are in angle brackets;
     * a literal choice is written as alternatives, e.g. "level | email | position | stats".
     */
    args?: string[];
    description: Markdown;
    /** Commands that have been removed from the game are still listed, marked as such. */
    removed?: boolean;
}

/** Commands are listed in three groups on the Commands page. */
export interface CommandGroup {
    /** Used as the `#fragment` anchor: "general", "fellowship", "guild". */
    id: string;
    title: string;
    commands: Command[];
}

/** A keyboard shortcut, e.g. F1 or CTRL + A. */
export interface Shortcut {
    /** Keys pressed together, e.g. ["CTRL", "A"]. */
    keys: string[];
    description: string;
}

/** The Commands page. */
export interface CommandReference {
    intro: Markdown;
    groups: CommandGroup[];
    shortcuts: Shortcut[];
}
