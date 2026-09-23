/** Markdown source text. Plain CommonMark, no extensions or embedded components. */
export type Markdown = string;

/** ISO 8601 calendar date, e.g. "2003-10-27". */
export type IsoDate = string;

/** Path to a file under `static/`, without a leading slash, e.g. "images/weapons/axes/rustyaxe.gif". */
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

/** A page whose body is written in Markdown. Used for guides and other prose pages. */
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
