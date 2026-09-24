import type {
    ExternalUrl,
    Href,
    Image,
    Markdown,
    Picture,
    SitePath,
} from './common';

/** Top-level description of the site: the navigation tree and the pieces shared by every page. */
export interface Site {
    title: string;
    /** The drop-down menu bar, in display order. */
    menus: NavMenu[];
    home: HomePage;
    footer: Footer;
}

/** A top-level menu (News, Screenshots, Downloads, Guides, Equipment, Community, Contact). */
export interface NavMenu {
    label: string;
    /** The page a nested menu's entries are sections of, e.g. Weapons for its categories. */
    href?: SitePath;
    items: NavItem[];
}

/** A menu entry is either a link or a nested sub-menu (e.g. Guides > Monsters > Levels 0-24). */
export type NavItem = NavLink | NavMenu;

export interface NavLink {
    label: string;
    href: Href;
}

export interface HomePage {
    /** Pictures shown at random in the "Random Weapon" box. */
    randomWeapons: Picture[];
}

export interface Footer {
    /** Copyright and credit notice. */
    notice: Markdown;
    /** A banner linking to another site, as fansites of the time traded. */
    banner?: FooterBanner;
}

export interface FooterBanner {
    image: Image;
    href: ExternalUrl;
}
