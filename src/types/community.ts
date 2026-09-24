import type { ExternalUrl, IsoDate, Link, Markdown } from './common';

export interface Fansite {
    name: string;
    url: ExternalUrl;
    description: string;
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
