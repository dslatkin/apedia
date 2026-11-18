import type { ExternalUrl, IsoDate, Link, Markdown } from './common';

export interface Website {
    name: string;
    url: ExternalUrl;
    description: string;
}

export interface WebsiteDirectory {
    intro: Markdown;
    active: Website[];
    inactive: Website[];
}

export interface ClanDirectory {
    intro: Markdown;
    diplomacyUpdated: IsoDate;
    clans: Clan[];
}

export interface Clan {
    id: string;
    name: string;
    tag: string;
    creators: string[];
    allied: string[];
    hostile: string[];
    requirements?: string;
    links?: Link[];
    quote?: Quote;
}

export interface Quote {
    text: string;
    attribution: string;
}

export interface Shard {
    name: string;
    /** As shown in lists, e.g. "2005–2006" or "2018 to today". */
    years: string;
    description: string;
    /** Set while the shard can still be played. */
    running?: { url: ExternalUrl; discord: ExternalUrl };
}
