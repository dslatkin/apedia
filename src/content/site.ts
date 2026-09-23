import type { Category, NavLink, Picture, Site, SitePathname } from '$types';
import {
    accessoryCategories,
    armorSlots,
    itemCategories,
    scrollCategories,
    weaponCategories,
} from './equipment/categories';
import { commandReference } from './guides/commands';
import { monsterLevelBands } from './guides/monster-levels';

/** Links to the sections of a page, e.g. each weapon category on the Weapons page. */
function sections(route: SitePathname, categories: Category[]): NavLink[] {
    return categories.map(({ id, label }) => ({
        label,
        href: `${route}#${id}`,
    }));
}

function randomWeapon(file: string, name: string): Picture {
    return {
        name,
        thumbnail: `/images/pics/thumbnail/${file}`,
        full: `/images/pics/large/${file}`,
    };
}

/**
 * Routes follow the old drop-down menu. Section anchors on data pages are the category or
 * group ids from the content (e.g. weapon categories, command groups); monster level bands
 * are `levels-0-24`, `levels-25-49`, `levels-50-74` and `levels-75`.
 */
export const site: Site = {
    title: 'Akarrian Encyclopedia',
    menus: [
        {
            label: 'News',
            items: [
                { label: 'Current News', href: '/' },
                { label: 'News Archives', href: '/news' },
            ],
        },
        {
            label: 'Screenshots',
            items: [
                {
                    label: 'PreAlpha',
                    items: [
                        { label: 'PreAlpha 13', href: '/screenshots/pa13' },
                    ],
                },
                {
                    label: 'Alpha',
                    items: [{ label: 'Alpha 1', href: '/screenshots/a1' }],
                },
            ],
        },
        {
            label: 'Downloads',
            items: [
                { label: 'Download Game', href: '/downloads#game' },
                { label: 'Public Area Editor', href: '/downloads#editor' },
            ],
        },
        {
            label: 'Guides',
            items: [
                { label: 'Getting Started', href: '/guides/getting-started' },
                { label: 'Character Classes', href: '/guides/classes' },
                { label: 'Teamplay', href: '/guides/teamplay' },
                { label: 'Fellowships', href: '/guides/fellowships' },
                {
                    label: 'Commands',
                    items: sections('/guides/commands', [
                        ...commandReference.groups.map(({ id, title }) => ({
                            id,
                            label: title.replace(' Commands', ''),
                        })),
                        { id: 'shortcuts', label: 'Shortcuts' },
                    ]),
                },
                { label: 'Technical Info', href: '/guides/technical' },
                { label: 'NPC Locations', href: '/guides/npcs' },
                { label: 'Dungeon Locations', href: '/guides/dungeons' },
                { label: 'Obelisk Locations', href: '/guides/obelisks' },
                {
                    label: 'Monsters',
                    items: sections('/guides/monsters', monsterLevelBands),
                },
            ],
        },
        {
            label: 'Equipment',
            items: [
                {
                    label: 'Weapons',
                    items: sections('/equipment/weapons', weaponCategories),
                },
                {
                    label: 'Armor',
                    items: sections('/equipment/armor', armorSlots),
                },
                {
                    label: 'Accessories',
                    items: sections(
                        '/equipment/accessories',
                        accessoryCategories,
                    ),
                },
                {
                    label: 'Items',
                    items: sections('/equipment/items', itemCategories),
                },
                {
                    label: 'Scrolls',
                    items: sections('/equipment/scrolls', scrollCategories),
                },
            ],
        },
        {
            label: 'Community',
            items: [
                { label: 'Forums', href: 'http://forums.akarra.com/' },
                { label: 'Fansites', href: '/community/fansites' },
                { label: 'Guilds & Clans', href: '/community/clans' },
            ],
        },
        {
            label: 'Contact',
            items: [
                { label: 'Contact Me', href: '/contact' },
                { label: 'Special Thanks', href: '/thanks' },
            ],
        },
    ],
    home: {
        randomWeapons: [
            randomWeapon('berdiche.jpg', 'Berdiche'),
            randomWeapon('claymore.jpg', 'Claymore'),
            randomWeapon('falchion.gif', 'Falchion (rotating)'),
            randomWeapon('flamberge.jpg', 'Flamberge'),
            randomWeapon('gladius.jpg', 'Silver Gladius'),
            randomWeapon('khyber.jpg', 'Khyber'),
            randomWeapon('rapier.jpg', 'Rapier'),
            randomWeapon('rapierparts.jpg', 'Rapier Diagram'),
            randomWeapon('stiletto.jpg', 'Stiletto'),
            randomWeapon('tegha.jpg', 'Tegha'),
        ],
    },
    footer: {
        notice: 'This website and its contents are copyright Danny "Talonz" Slatkin 2002-03 unless otherwise noted. Whispers In Akarra (including game images, banners, etc.) are copyright Jens "Khaile" Bergensten and the Whispers In Akarra Development Team. Please see the [Special Thanks](/thanks) page for more information.',
    },
};
