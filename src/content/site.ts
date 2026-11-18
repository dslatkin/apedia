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
import { historyParts } from './history';

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
                { label: 'Play Today', href: '/community/play' },
                { label: 'Websites', href: '/community/websites' },
                { label: 'Guilds & Clans', href: '/community/clans' },
            ],
        },
        {
            label: 'History',
            items: [
                ...historyParts.map(({ slug, title }) => ({
                    label: title,
                    href: `/history/${slug}` as const,
                })),
                {
                    label: 'Screenshots',
                    items: [
                        { label: 'PreAlpha 13', href: '/screenshots/pa13' },
                        { label: 'Alpha 1', href: '/screenshots/a1' },
                    ],
                },
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
                { label: 'Contact Me', href: '/contact' },
                { label: 'Source Code', href: GITHUB_URL },
                { label: 'Special Thanks', href: '/thanks' },
            ],
        },
    ],
    home: {
        intro: 'The Akarrian Encyclopedia is a reference website for and a testament to the original _Whispers in Akarra_, which was a small, free, online role-playing game that originally ran from 2002 to 2004. The Encyclopedia is still maintained by Talonz, who took it over from Trance in 2003. Akarra itself was created by Jens Bergensten, best known as the lead developer and designer of Minecraft.\n\nMore information about the game can be found under "History" in the site navigation, or you can jump into a shard and [start playing today](/community/play).',
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
            { label: 'Source Code', href: GITHUB_URL },
            { label: 'Special Thanks', href: '/thanks' },
        ],
        banner: {
            src: '/images/akarrabanner.gif',
            alt: 'Whispers In Akarra',
        },
        notice: 'This website and its contents are copyright Danny "Talonz" Slatkin.\n\nWhispers In Akarra are copyright Jens "Khaile" Bergensten.',
    },
    archiveNotice:
        "The content on this page is kept as an archive of the original game's mechanics.\n\n[Shards](/community/play) can differ from what you see here for creative or balance purposes.",
};
