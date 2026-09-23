/**
 * Markdown source text. Plain CommonMark, no extensions or embedded components.
 *
 * Links to other pages use site routes (e.g. `/guides/commands`) and images use asset paths.
 * Headings get an `id` when rendered, so they can be linked to with a `#fragment`: the heading
 * text lowercased, with each run of characters other than a-z and 0-9 replaced by a single `-`,
 * and leading/trailing `-` removed. "Player vs Player" becomes `#player-vs-player`. When the same
 * id appears more than once on a page, later ones get `-2`, `-3`, and so on.
 */
export type Markdown = string;

/** ISO 8601 calendar date, e.g. "2003-10-27". */
export type IsoDate = string;

/** Root-relative path to a file under `static/`, e.g. "/images/weapons/axes/rustyaxe.gif". */
export type AssetPath = string;

/** Absolute URL to a site outside the encyclopedia. */
export type ExternalUrl = string;

export interface Image {
    src: AssetPath;
    alt: string;
}

/** An image with a small preview that links to the full-size version. */
export interface Picture {
    name: string;
    thumbnail: AssetPath;
    full: AssetPath;
}

export interface Link {
    label: string;
    /** Internal route (may include a `#fragment`) or an external URL. */
    href: string;
}

/** A position on the world map. */
export interface Coordinates {
    x: number;
    y: number;
}

/** A page whose body is written in Markdown. Used for guides and other prose pages. The title is not repeated in the body. */
export interface MarkdownPage {
    slug: string;
    title: string;
    /** In-game name of the person who wrote it, when it was not the site owner. */
    author?: string;
    body: Markdown;
}

/** The five soul colors, which are also the schools of magic. */
export type SoulColor = 'white' | 'red' | 'green' | 'blue' | 'yellow';

/** The two deities a character can follow. */
export type Deity = 'gifted' | 'shining';
