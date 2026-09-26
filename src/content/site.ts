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

function sections(route: SitePathname, categories: Category[]): NavLink[] {
    return categories.map(({ id, label }) => ({
        label,
        href: `${route}#${id}`,
    }));
}

const GITHUB_URL = 'https://github.com/dslatkin/apedia';

function randomWeapon(file: string, name: string): Picture {
    return {
        name,
        thumbnail: `/images/pics/thumbnail/${file}`,
        full: `/images/pics/large/${file}`,
    };
}

export const site: Site = {
    title: 'Akarrian Encyclopedia',
    menus: [
        { label: 'News', href: '/news' },
        {
            label: 'Community',
            items: [
                { label: 'Shards', href: '/community/shards' },
                { label: 'Websites', href: '/community/websites' },
                { label: 'Guilds & Clans', href: '/community/clans' },
            ],
        },
        {
            label: 'Screenshots',
            items: [
                { label: 'PreAlpha 13', href: '/screenshots/pa13' },
                { label: 'Alpha 1', href: '/screenshots/a1' },
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
                    href: '/guides/commands',
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
                    href: '/guides/monsters',
                    items: sections('/guides/monsters', monsterLevelBands),
                },
            ],
        },
        {
            label: 'Equipment',
            items: [
                {
                    label: 'Weapons',
                    href: '/equipment/weapons',
                    items: sections('/equipment/weapons', weaponCategories),
                },
                {
                    label: 'Armor',
                    href: '/equipment/armor',
                    items: sections('/equipment/armor', armorSlots),
                },
                {
                    label: 'Accessories',
                    href: '/equipment/accessories',
                    items: sections(
                        '/equipment/accessories',
                        accessoryCategories,
                    ),
                },
                {
                    label: 'Items',
                    href: '/equipment/items',
                    items: sections('/equipment/items', itemCategories),
                },
                {
                    label: 'Scrolls',
                    href: '/equipment/scrolls',
                    items: sections('/equipment/scrolls', scrollCategories),
                },
            ],
        },
        {
            label: 'About',
            items: [
                { label: 'History', href: '/history' },
                { label: 'Special Thanks', href: '/thanks' },
                { label: 'Contact Me', href: '/contact' },
                { label: 'Source Code', href: GITHUB_URL },
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
        links: [
            { label: 'Contact Me', href: '/contact' },
            { label: 'Special Thanks', href: '/thanks' },
            { label: 'Source Code', href: GITHUB_URL },
        ],
        banner: {
            src: '/images/akarrabanner.gif',
            alt: 'Whispers In Akarra',
        },
        notice: 'This website and its contents are copyright Danny "Talonz" Slatkin unless otherwise noted. Whispers In Akarra (including game images, banners, etc.) are copyright Jens "Khaile" Bergensten. Please see the [Special Thanks](/thanks) page for more information.',
    },
};
