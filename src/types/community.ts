import type { ExternalUrl, IsoDate, Link, Markdown } from './common';

/** Another Whispers in Akarra website. */
export interface Fansite {
    name: string;
    url: ExternalUrl;
    description: string;
}

/** The Guilds & Clans page. */
export interface ClanDirectory {
    intro: Markdown;
    /** When the allied/hostile settings were last checked in game. */
    diplomacyUpdated: IsoDate;
    /** In order of founding, oldest first. */
    clans: Clan[];
}

export interface Clan {
    /** Used as the `#fragment` anchor. */
    id: string;
    name: string;
    /** Up to 4 characters, shown beside members' names in game. */
    tag: string;
    /** The five founding leaders. */
    creators: string[];
    /** Ids of clans this clan is allied with. */
    allied: string[];
    /** Ids of clans this clan is hostile towards. */
    hostile: string[];
    /** Conditions for joining, as written on the site, e.g. "Level 45". */
    requirements?: string;
    links?: Link[];
    quote?: Quote;
}

export interface Quote {
    text: string;
    /** Who said it, e.g. a member's name or "Clan Site". */
    attribution: string;
}
