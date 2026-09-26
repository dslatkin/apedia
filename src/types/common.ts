import type { Pathname, PathnameWithSearchOrHash } from '$app/types';

export type Markdown = string;

export type IsoDate = string;

export type AssetPath = string;

export type ExternalUrl =
    `http://${string}` | `https://${string}` | `mailto:${string}`;

export type SitePath = PathnameWithSearchOrHash;

export type SitePathname = Pathname;

export type FragmentHref = `#${string}`;

export type Href = SitePath | FragmentHref | ExternalUrl;

export interface Image {
    src: AssetPath;
    alt: string;
}

export interface Picture {
    name: string;
    thumbnail: AssetPath;
    full: AssetPath;
}

export interface Link {
    label: string;
    href: Href;
}

export interface Category<Id extends string = string> {
    id: Id;
    label: string;
}

export interface Coordinates {
    x: number;
    y: number;
}

export interface MarkdownPage {
    slug: string;
    title: string;
    author?: string;
    body: Markdown;
}

export type SoulColor = 'white' | 'red' | 'green' | 'blue' | 'yellow';

export type Deity = 'gifted' | 'shining';
