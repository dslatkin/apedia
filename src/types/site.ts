import type { Href, Image, Markdown, Picture, SitePath } from './common';

export interface Site {
    title: string;
    menus: NavItem[];
    home: HomePage;
    footer: Footer;
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
    randomWeapons: Picture[];
}

export interface Footer {
    links: NavLink[];
    notice: Markdown;
    banner?: Image;
}
