import type { Href, Image, Markdown, Picture, SitePath } from './common';

export interface Site {
    title: string;
    menus: NavItem[];
    home: HomePage;
    footer: Footer;
    /** Shown at the top of the Guides and Equipment pages. */
    archiveNotice: Markdown;
}

export interface NavMenu {
    label: string;
    href?: SitePath;
    items: NavItem[];
}

export type NavItem = NavLink | NavMenu;

export interface NavLink {
    label: string;
    href: Href;
}

export interface HomePage {
    intro: Markdown;
    randomWeapons: Picture[];
}

export interface Footer {
    links: NavLink[];
    notice: Markdown;
    banner?: Image;
}
