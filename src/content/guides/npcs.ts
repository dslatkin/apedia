import type { Npc } from '$types';

/** Non-player characters, alphabetical. */
export const npcs: Npc[] = [
    {
        id: 'alera-the-herbalist',
        name: 'Alera the Herbalist',
        images: [
            {
                src: '/images/npc/alera.gif',
                alt: 'Alera the Herbalist',
            },
        ],
        location: {
            x: 886,
            y: 7045,
        },
        notes: 'Alera sells healing products such as healing, stamina, and antidote potions.',
    },
    {
        id: 'arno-windsphere',
        name: 'Arno Windsphere',
        images: [
            {
                src: '/images/npc/arno.gif',
                alt: 'Arno Windsphere',
            },
        ],
        location: {
            x: 1083,
            y: 7339,
        },
    },
    {
        id: 'cecilia-lifebringer',
        name: 'Cecilia Lifebringer',
        images: [
            {
                src: '/images/npc/cecilia.gif',
                alt: 'Cecilia Lifebringer',
            },
        ],
        notes: "Cecilia creates accounts for all people who wish to play. (this NPC you'll need to find yourself!)",
    },
    {
        id: 'dexter-gray',
        name: 'Dexter Gray',
        images: [
            {
                src: '/images/npc/dexter.gif',
                alt: 'Dexter Gray',
            },
        ],
        location: {
            x: 1007,
            y: 7416,
        },
        notes: 'Dexter has the ability to transport you instantly to many places on the sector map - for a fee of course.',
    },
    {
        id: 'eckard-the-merchant',
        name: 'Eckard the Merchant',
        images: [
            {
                src: '/images/npc/eckard.gif',
                alt: 'Eckard the Merchant',
            },
        ],
        location: {
            x: 1070,
            y: 7200,
        },
        notes: 'Just sit and wait. Eckard will eventually come to you. He sells a variety of weapons, armor, and other items.',
    },
    {
        id: 'gerard-the-priest',
        name: 'Gerard the Priest',
        images: [
            {
                src: '/images/npc/gerard.gif',
                alt: 'Gerard the Priest',
            },
        ],
        location: {
            x: 1057,
            y: 7311,
        },
    },
    {
        id: 'hartmut',
        name: 'Hartmut',
        images: [
            {
                src: '/images/npc/hartmut.gif',
                alt: 'Hartmut',
            },
        ],
        location: {
            x: 1068,
            y: 7321,
        },
        notes: 'Hartmut is a tailor who trades and crafts various kinds of armor.',
    },
    {
        id: 'holger-the-weaponsmith',
        name: 'Holger the Weaponsmith',
        images: [
            {
                src: '/images/npc/holger.gif',
                alt: 'Holger the Weaponsmith',
            },
        ],
        location: {
            x: 1043,
            y: 7341,
        },
        notes: 'Holger trades and crafts weapons of all kinds.',
    },
    {
        id: 'horse',
        name: 'Horse',
        images: [
            {
                src: '/images/npc/whitehorse.gif',
                alt: 'Horse',
            },
            {
                src: '/images/npc/brownhorse.gif',
                alt: 'Horse',
            },
            {
                src: '/images/npc/blackhorse.gif',
                alt: 'Horse',
            },
        ],
        notes: 'Horses allow for faster transportation around the world of Akarra (sold by Wynn). They come in 3 different colors: white, brown, and black.',
    },
    {
        id: 'item-storage',
        name: 'Item Storage',
        images: [
            {
                src: '/images/npc/itemstorage.gif',
                alt: 'Item Storage',
            },
        ],
        location: {
            x: 1067,
            y: 7330,
        },
    },
    {
        id: 'konrad-shieldsense',
        name: 'Konrad Shieldsense',
        images: [
            {
                src: '/images/npc/konrad.gif',
                alt: 'Konrad Shieldsense',
            },
        ],
        location: {
            x: 1268,
            y: 6612,
        },
    },
    {
        id: 'marvin-the-sneak-humbletwig',
        name: 'Marvin the Sneak & Humbletwig',
        images: [
            {
                src: '/images/npc/marvinhumble.gif',
                alt: 'Marvin the Sneak & Humbletwig',
            },
        ],
        location: {
            x: 138,
            y: 7111,
        },
        notes: 'Marvin is your friendly coin exchanger, always running you errands.',
    },
    {
        id: 'nicholas-the-elder',
        name: 'Nicholas the Elder',
        images: [
            {
                src: '/images/npc/nicholas.gif',
                alt: 'Nicholas the Elder',
            },
        ],
        location: {
            x: 1053,
            y: 7329,
        },
        notes: 'Nicholas is the elder of Hope. Nicholas sells almost anything sold to him by the player community.',
    },
    {
        id: 'oskar-weaponsage',
        name: 'Oskar Weaponsage',
        images: [
            {
                src: '/images/npc/oskar.gif',
                alt: 'Oskar Weaponsage',
            },
        ],
        location: {
            x: 1080,
            y: 7373,
        },
    },
    {
        id: 'rupert-the-farmer',
        name: 'Rupert the Farmer',
        images: [
            {
                src: '/images/npc/rupert.gif',
                alt: 'Rupert the Farmer',
            },
        ],
        location: {
            x: 1062,
            y: 7386,
        },
        notes: 'The farmer of Hope sells fruits and vegetables.',
    },
    {
        id: 'sinistra-the-priestess',
        name: 'Sinistra the Priestess',
        images: [
            {
                src: '/images/npc/sinistra.gif',
                alt: 'Sinistra the Priestess',
            },
        ],
        location: {
            x: 1029,
            y: 7349,
        },
    },
    {
        id: 'syke-the-ranger',
        name: 'Syke the Ranger',
        images: [
            {
                src: '/images/npc/syke.gif',
                alt: 'Syke the Ranger',
            },
        ],
        location: {
            x: 886,
            y: 7045,
        },
        notes: 'Just sit and wait. Syke will eventually come to you. Syke sells various items such as fur, etc.',
    },
    {
        id: 'tom-the-fisherman',
        name: 'Tom the Fisherman',
        images: [
            {
                src: '/images/npc/tom.gif',
                alt: 'Tom the Fisherman',
            },
        ],
        location: {
            x: 809,
            y: 7530,
        },
        notes: 'Tom will take you to and from the island on Rimsin Lake for a price.',
    },
    {
        id: 'tua-fable',
        name: 'Tua & Fable',
        images: [
            {
                src: '/images/npc/tuafable.gif',
                alt: 'Tua & Fable',
            },
        ],
        location: {
            x: 923,
            y: 7318,
        },
    },
    {
        id: 'wynn',
        name: 'Wynn',
        images: [
            {
                src: '/images/npc/wynn.gif',
                alt: 'Wynn',
            },
        ],
        location: {
            x: 1078,
            y: 7288,
        },
        notes: 'Wynn sells horses for fast transportation.',
    },
];
