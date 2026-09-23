import type { NavLink, Picture, Site } from '../types';

function sections(route: string, labels: Record<string, string>): NavLink[] {
    return Object.entries(labels).map(([id, label]) => ({
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
                    items: sections('/guides/commands', {
                        general: 'General',
                        fellowship: 'Fellowship',
                        guild: 'Guild',
                        shortcuts: 'Shortcuts',
                    }),
                },
                { label: 'Technical Info', href: '/guides/technical' },
                { label: 'NPC Locations', href: '/guides/npcs' },
                { label: 'Dungeon Locations', href: '/guides/dungeons' },
                { label: 'Obelisk Locations', href: '/guides/obelisks' },
                {
                    label: 'Monsters',
                    items: sections('/guides/monsters', {
                        'levels-0-24': 'Levels 0 - 24',
                        'levels-25-49': 'Levels 25 - 49',
                        'levels-50-74': 'Levels 50 - 74',
                        'levels-75': 'Levels 75+',
                    }),
                },
            ],
        },
        {
            label: 'Equipment',
            items: [
                {
                    label: 'Weapons',
                    items: sections('/equipment/weapons', {
                        axes: 'Axes',
                        crushing: 'Crushing',
                        daggers: 'Daggers',
                        'non-violent': 'Non-Violent',
                        ranged: 'Ranged',
                        spears: 'Spears',
                        staffs: 'Staffs',
                        swords: 'Swords',
                    }),
                },
                {
                    label: 'Armor',
                    items: sections('/equipment/armor', {
                        head: 'Head',
                        body: 'Body',
                        hands: 'Hands',
                        shields: 'Shields',
                        feet: 'Feet',
                    }),
                },
                {
                    label: 'Accessories',
                    items: sections('/equipment/accessories', {
                        necklaces: 'Necklaces',
                        rings: 'Rings',
                    }),
                },
                {
                    label: 'Items',
                    items: sections('/equipment/items', {
                        ammo: 'Ammo',
                        food: 'Food',
                        household: 'Household',
                        junk: 'Junk',
                        lights: 'Lights',
                        materials: 'Materials',
                        mounts: 'Mounts',
                        potions: 'Potions',
                        valuables: 'Valuables',
                    }),
                },
                {
                    label: 'Scrolls',
                    items: sections('/equipment/scrolls', {
                        mundane: 'Mundane',
                        fighter: 'Fighter',
                        apprentice: 'Apprentice',
                        neophyte: 'Neophyte',
                    }),
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
        notice: 'This website and its contents are copyright Danny "Talonz" Slatkin 2002-03 unless otherwise noted. Whispers In Akarra (including game images, banners, etc.) are copyright Jens "Khaile" Bergensten and the Whispers In Akarra Development Team. The Javascript menu is copyright Twin Helix Designs. Please see the [Special Thanks](/thanks) page for more information.',
    },
};
