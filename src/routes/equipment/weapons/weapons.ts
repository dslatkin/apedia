import type { Weapon } from '$types';

export const weapons: Weapon[] = [
    {
        id: 'rusty-axe',
        name: 'Rusty Axe',
        images: [
            {
                src: '/images/weapons/axes/rustyaxe.gif',
                alt: 'Rusty Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 20,
            agility: 19,
        },
        category: 'axes',
        damage: {
            min: 1.3,
            max: 3.1,
        },
        staminaCost: 0.9,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'iron-axe',
        name: 'Iron Axe',
        images: [
            {
                src: '/images/weapons/axes/ironaxe.gif',
                alt: 'Iron Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 26,
            agility: 23,
        },
        category: 'axes',
        damage: {
            min: 1.9,
            max: 4.6,
        },
        staminaCost: 1.4,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'iron-battleaxe',
        name: 'Iron Battleaxe',
        images: [
            {
                src: '/images/weapons/axes/ironbatlaxe.gif',
                alt: 'Iron Battleaxe',
            },
        ],
        effects: [],
        requirements: {
            strength: 33,
            agility: 26,
        },
        category: 'axes',
        damage: {
            min: 2.8,
            max: 6.6,
        },
        staminaCost: 2.3,
        attackSpeed: 28,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'steel-axe',
        name: 'Steel Axe',
        images: [
            {
                src: '/images/weapons/axes/steelaxe.gif',
                alt: 'Steel Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 42,
            agility: 36,
        },
        category: 'axes',
        damage: {
            min: 3.6,
            max: 9.4,
        },
        staminaCost: 2.8,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'neophyte-sickle',
        name: 'Neophyte Sickle',
        images: [
            {
                src: '/images/weapons/axes/neosickle.gif',
                alt: 'Neophyte Sickle',
            },
        ],
        effects: ['Trust of Ambus'],
        requirements: {
            strength: 36,
            deity: 'shining',
            classes: ['Neophyte'],
        },
        category: 'axes',
        damage: {
            min: 3.6,
            max: 9.4,
        },
        staminaCost: 2.8,
        attackSpeed: 25,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'steel-battleaxe',
        name: 'Steel Battleaxe',
        images: [
            {
                src: '/images/weapons/axes/stlbatlaxe.gif',
                alt: 'Steel Battleaxe',
            },
        ],
        effects: [],
        requirements: {
            strength: 51,
            agility: 37,
        },
        category: 'axes',
        damage: {
            min: 4.8,
            max: 11.6,
        },
        staminaCost: 4.1,
        attackSpeed: 28,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'sturdy-axe',
        name: 'Sturdy Axe',
        images: [
            {
                src: '/images/weapons/axes/sturdyaxe.gif',
                alt: 'Sturdy Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 58,
            agility: 49,
        },
        category: 'axes',
        damage: {
            min: 5.3,
            max: 14.1,
        },
        staminaCost: 4.1,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'oncin-pick',
        name: 'Oncin Pick',
        images: [
            {
                src: '/images/weapons/axes/oncinpick.gif',
                alt: 'Oncin Pick',
            },
        ],
        effects: [],
        requirements: {
            strength: 38,
            agility: 31,
            twoHanded: true,
        },
        category: 'axes',
        damage: {
            min: 5.3,
            max: 15.9,
        },
        staminaCost: 4.1,
        attackSpeed: 32,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'hoolurge-pick',
        name: 'Hoolurge Pick',
        images: [
            {
                src: '/images/weapons/axes/hoolurgepick.gif',
                alt: 'Hoolurge Pick',
            },
        ],
        effects: [],
        requirements: {
            strength: 69,
            agility: 57,
        },
        category: 'axes',
        damage: {
            min: 6.4,
            max: 17.3,
        },
        staminaCost: 5.0,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'quality-axe',
        name: 'Quality Axe',
        images: [
            {
                src: '/images/weapons/axes/qualityaxe.gif',
                alt: 'Quality Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 78,
            agility: 64,
        },
        category: 'axes',
        damage: {
            min: 7.3,
            max: 19.9,
        },
        staminaCost: 5.8,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'mystics-bronze-sickle',
        name: "Mystic's Bronze Sickle",
        images: [
            {
                src: '/images/weapons/axes/bronzesickle.gif',
                alt: "Mystic's Bronze Sickle",
            },
        ],
        effects: ['+10 Magic Points'],
        requirements: {
            strength: 80,
            agility: 65,
            intelligence: 20,
        },
        category: 'axes',
        damage: {
            min: 7.5,
            max: 20.4,
        },
        staminaCost: 5.6,
        attackSpeed: 25,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'delaques-axe',
        name: "Delaque's Axe",
        images: [
            {
                src: '/images/weapons/axes/delaqueaxe.gif',
                alt: "Delaque's Axe",
            },
        ],
        unique: true,
        effects: ['Silver Edge'],
        requirements: {
            strength: 63,
            agility: 44,
        },
        category: 'axes',
        damage: {
            min: 8.2,
            max: 20.0,
        },
        staminaCost: 5.3,
        attackSpeed: 28,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'battle-hoolurge',
        name: 'Battle Hoolurge',
        images: [
            {
                src: '/images/weapons/axes/bathoolurge.gif',
                alt: 'Battle Hoolurge',
            },
        ],
        effects: [],
        requirements: {
            strength: 87,
            agility: 71,
        },
        category: 'axes',
        damage: {
            min: 8.3,
            max: 22.5,
        },
        staminaCost: 6.5,
        attackSpeed: 27,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'waraxe',
        name: 'Waraxe',
        images: [
            {
                src: '/images/weapons/axes/waraxe.gif',
                alt: 'Waraxe',
            },
        ],
        effects: [],
        requirements: {
            strength: 105,
            agility: 69,
        },
        category: 'axes',
        damage: {
            min: 10.9,
            max: 26.8,
        },
        staminaCost: 9.5,
        attackSpeed: 28,
        critical: {
            hit: 15,
            fumble: 10,
        },
    },
    {
        id: 'heavy-oncin-pick',
        name: 'Heavy Oncin Pick',
        images: [
            {
                src: '/images/weapons/axes/hvyoncinpick.gif',
                alt: 'Heavy Oncin Pick',
            },
        ],
        effects: [],
        requirements: {
            strength: 61,
            agility: 46,
            twoHanded: true,
        },
        category: 'axes',
        damage: {
            min: 9.8,
            max: 30.3,
        },
        staminaCost: 7.7,
        attackSpeed: 32,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'kheten-axe',
        name: 'Kheten Axe',
        images: [
            {
                src: '/images/weapons/axes/khetenaxe.gif',
                alt: 'Kheten Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 72,
            agility: 54,
            twoHanded: true,
        },
        category: 'axes',
        damage: {
            min: 12.0,
            max: 37.5,
        },
        staminaCost: 9.5,
        attackSpeed: 32,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'improved-kheten-axe',
        name: 'Improved Kheten Axe',
        images: [
            {
                src: '/images/weapons/axes/improvedkhetenaxe.gif',
                alt: 'Improved Kheten Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 100,
            agility: 73,
            twoHanded: true,
        },
        category: 'axes',
        damage: {
            min: 17.6,
            max: 55.5,
        },
        staminaCost: 14.0,
        attackSpeed: 32,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'wooden-club',
        name: 'Wooden Club',
        images: [
            {
                src: '/images/weapons/crushing/woodenclub.gif',
                alt: 'Wooden Club',
            },
        ],
        effects: [],
        requirements: {
            strength: 15,
            agility: 15,
        },
        category: 'crushing',
        damage: {
            min: 0.8,
            max: 1.5,
        },
        staminaCost: 0.5,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'spiked-club',
        name: 'Spiked Club',
        images: [
            {
                src: '/images/weapons/crushing/spikedclub.gif',
                alt: 'Spiked Club',
            },
        ],
        effects: [],
        requirements: {
            strength: 20,
            agility: 19,
        },
        category: 'crushing',
        damage: {
            min: 1.2,
            max: 3.0,
        },
        staminaCost: 0.8,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'dull-warhammer',
        name: 'Dull Warhammer',
        images: [
            {
                src: '/images/weapons/crushing/dullwarham.gif',
                alt: 'Dull Warhammer',
            },
        ],
        effects: [],
        requirements: {
            strength: 80,
            agility: 50,
            faith: 40,
        },
        category: 'crushing',
        damage: {
            min: 1.5,
            max: 3.4,
        },
        staminaCost: 1.2,
        attackSpeed: 28,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'stoneclub',
        name: 'Stoneclub',
        images: [
            {
                src: '/images/weapons/crushing/stoneclub.gif',
                alt: 'Stoneclub',
            },
        ],
        effects: [],
        requirements: {
            strength: 26,
            agility: 22,
        },
        category: 'crushing',
        damage: {
            min: 1.7,
            max: 4.2,
        },
        staminaCost: 1.1,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'crude-warhammer',
        name: 'Crude Warhammer',
        images: [
            {
                src: '/images/weapons/crushing/crudewarham.gif',
                alt: 'Crude Warhammer',
            },
        ],
        effects: [],
        requirements: {
            strength: 43,
            agility: 17,
        },
        category: 'crushing',
        damage: {
            min: 3.6,
            max: 8.8,
        },
        staminaCost: 3.2,
        attackSpeed: 28,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'metal-club',
        name: 'Metal Club',
        images: [
            {
                src: '/images/weapons/crushing/metalclub.gif',
                alt: 'Metal Club',
            },
        ],
        effects: [],
        requirements: {
            strength: 47,
            agility: 37,
        },
        category: 'crushing',
        damage: {
            min: 3.4,
            max: 9.6,
        },
        staminaCost: 2.3,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'astonishing-brush',
        name: 'Astonishing Brush',
        images: [
            {
                src: '/images/weapons/crushing/astonishbrush.gif',
                alt: 'Astonishing Brush',
            },
        ],
        unique: true,
        effects: ['+10 Stamina Points'],
        requirements: {
            level: 20,
        },
        category: 'crushing',
        damage: {
            min: 1.0,
            max: 10.0,
        },
        staminaCost: 1.5,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 1,
        },
    },
    {
        id: 'mace-and-chain',
        name: 'Mace and Chain',
        images: [
            {
                src: '/images/weapons/crushing/macechain.gif',
                alt: 'Mace and Chain',
            },
        ],
        effects: ['Ignores Shield'],
        requirements: {
            strength: 53,
            agility: 40,
        },
        category: 'crushing',
        damage: {
            min: 4.7,
            max: 11.1,
        },
        staminaCost: 4.3,
        attackSpeed: 28,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'fighting-staff',
        name: 'Fighting Staff',
        images: [
            {
                src: '/images/weapons/crushing/fightstaff.gif',
                alt: 'Fighting Staff',
            },
        ],
        effects: [],
        requirements: {
            strength: 58,
            agility: 44,
        },
        category: 'crushing',
        damage: {
            min: 4.4,
            max: 12.3,
        },
        staminaCost: 2.9,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'stone-mace',
        name: 'Stone Mace',
        images: [
            {
                src: '/images/weapons/crushing/stonemace.gif',
                alt: 'Stone Mace',
            },
        ],
        effects: [],
        requirements: {
            strength: 64,
            agility: 47,
        },
        category: 'crushing',
        damage: {
            min: 4.8,
            max: 13.7,
        },
        staminaCost: 3.2,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'warhammer',
        name: 'Warhammer',
        images: [
            {
                src: '/images/weapons/crushing/warhammer.gif',
                alt: 'Warhammer',
            },
        ],
        effects: [],
        requirements: {
            strength: 72,
            agility: 33,
        },
        category: 'crushing',
        damage: {
            min: 6.4,
            max: 16.1,
        },
        staminaCost: 5.9,
        attackSpeed: 27,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'morning-star',
        name: 'Morning Star',
        images: [
            {
                src: '/images/weapons/crushing/morningstar.gif',
                alt: 'Morning Star',
            },
        ],
        effects: ['Ignores Shield'],
        requirements: {
            strength: 78,
            agility: 57,
        },
        category: 'crushing',
        damage: {
            min: 7.3,
            max: 17.5,
        },
        staminaCost: 6.8,
        attackSpeed: 28,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'heavy-warhammer',
        name: 'Heavy Warhammer',
        images: [
            {
                src: '/images/weapons/crushing/heavywarhammer.gif',
                alt: 'Heavy Warhammer',
            },
        ],
        effects: [],
        requirements: {
            strength: 110,
            agility: 55,
        },
        category: 'crushing',
        damage: {
            min: 10.1,
            max: 25.9,
        },
        staminaCost: 9.5,
        attackSpeed: 28,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'heavy-morning-star',
        name: 'Heavy Morning Star',
        images: [
            {
                src: '/images/weapons/crushing/heavymorningstar.gif',
                alt: 'Heavy Morning Star',
            },
        ],
        effects: ['Ignores Shield'],
        requirements: {
            strength: 114,
            agility: 81,
        },
        category: 'crushing',
        damage: {
            min: 11.1,
            max: 26.7,
        },
        staminaCost: 10.4,
        attackSpeed: 28,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'bekartons-hammer',
        name: "Bekarton's Hammer",
        images: [
            {
                src: '/images/weapons/crushing/bekhammer.gif',
                alt: "Bekarton's Hammer",
            },
        ],
        effects: ["Bekarton's Earthbind"],
        requirements: {
            strength: 80,
            agility: 50,
            faith: 40,
        },
        category: 'crushing',
        damage: {
            min: 12.0,
            max: 30.0,
        },
        staminaCost: 8.0,
        attackSpeed: 28,
        critical: {
            hit: 5,
            fumble: 2,
        },
    },
    {
        id: 'dagger',
        name: 'Dagger',
        images: [
            {
                src: '/images/weapons/daggers/dagger.gif',
                alt: 'Dagger',
            },
        ],
        effects: [],
        requirements: {
            agility: 23,
        },
        category: 'daggers',
        damage: {
            min: 0.8,
            max: 2.0,
        },
        staminaCost: 0.5,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'nagged-sakin',
        name: 'Nagged Sakin',
        images: [
            {
                src: '/images/weapons/daggers/naggedsakin.gif',
                alt: 'Nagged Sakin',
            },
        ],
        effects: [],
        requirements: {
            agility: 30,
        },
        category: 'daggers',
        damage: {
            min: 1.2,
            max: 3.0,
        },
        staminaCost: 0.7,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-dagger',
        name: 'Steel Dagger',
        images: [
            {
                src: '/images/weapons/daggers/steeldagger.gif',
                alt: 'Steel Dagger',
            },
        ],
        effects: [],
        requirements: {
            agility: 38,
        },
        category: 'daggers',
        damage: {
            min: 1.5,
            max: 4.1,
        },
        staminaCost: 0.9,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'iron-khyber',
        name: 'Iron Khyber',
        images: [
            {
                src: '/images/weapons/daggers/ironkhyber.gif',
                alt: 'Iron Khyber',
            },
        ],
        effects: [],
        requirements: {
            agility: 53,
        },
        category: 'daggers',
        damage: {
            min: 2.2,
            max: 6.1,
        },
        staminaCost: 1.3,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'sakin',
        name: 'Sakin',
        images: [
            {
                src: '/images/weapons/daggers/sakin.gif',
                alt: 'Sakin',
            },
        ],
        effects: [],
        requirements: {
            agility: 60,
        },
        category: 'daggers',
        damage: {
            min: 2.5,
            max: 7.1,
        },
        staminaCost: 1.5,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'scoundrels-stiletto',
        name: "Scoundrel's Stiletto",
        images: [
            {
                src: '/images/weapons/daggers/scnstiletto.gif',
                alt: "Scoundrel's Stiletto",
            },
        ],
        effects: [],
        requirements: {
            agility: 78,
        },
        category: 'daggers',
        damage: {
            min: 3.3,
            max: 9.5,
        },
        staminaCost: 2.0,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-khyber',
        name: 'Steel Khyber',
        images: [
            {
                src: '/images/weapons/daggers/steelkhyber.gif',
                alt: 'Steel Khyber',
            },
        ],
        effects: [],
        requirements: {
            agility: 83,
        },
        category: 'daggers',
        damage: {
            min: 3.5,
            max: 10.1,
        },
        staminaCost: 2.1,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'zatras-dagger',
        name: "Zatra's Dagger",
        images: [
            {
                src: '/images/weapons/daggers/zatrasdagger.gif',
                alt: "Zatra's Dagger",
            },
        ],
        effects: ['+20 Stamina Points'],
        requirements: {
            agility: 68,
            faith: 20,
        },
        category: 'daggers',
        damage: {
            min: 3.8,
            max: 10.8,
        },
        staminaCost: 1.5,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'bronze-dagger',
        name: 'Bronze Dagger',
        images: [
            {
                src: '/images/weapons/daggers/bronzedagger.gif',
                alt: 'Bronze Dagger',
            },
        ],
        effects: [],
        requirements: {
            agility: 90,
        },
        category: 'daggers',
        damage: {
            min: 3.9,
            max: 11.1,
        },
        staminaCost: 2.3,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'estradoit',
        name: 'Estradoit',
        images: [
            {
                src: '/images/weapons/daggers/estradoit.gif',
                alt: 'Estradoit',
            },
        ],
        effects: [],
        requirements: {
            agility: 103,
        },
        category: 'daggers',
        damage: {
            min: 4.4,
            max: 12.8,
        },
        staminaCost: 2.7,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'silver-khyber',
        name: 'Silver Khyber',
        images: [
            {
                src: '/images/weapons/daggers/silverkhyber.gif',
                alt: 'Silver Khyber',
            },
        ],
        effects: ['Silver Edge'],
        requirements: {
            agility: 103,
            faith: 30,
        },
        category: 'daggers',
        damage: {
            min: 4.4,
            max: 12.8,
        },
        staminaCost: 2.7,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'courtiers-stiletto',
        name: "Courtier's Stiletto",
        images: [
            {
                src: '/images/weapons/daggers/crtstiletto.gif',
                alt: "Courtier's Stiletto",
            },
        ],
        effects: [],
        requirements: {
            agility: 128,
        },
        category: 'daggers',
        damage: {
            min: 5.6,
            max: 16.2,
        },
        staminaCost: 3.4,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'superior-sakin',
        name: 'Superior Sakin',
        images: [
            {
                src: '/images/weapons/daggers/superiorsakin.gif',
                alt: 'Superior Sakin',
            },
        ],
        unique: true,
        effects: [],
        requirements: {
            agility: 140,
        },
        category: 'daggers',
        damage: {
            min: 6.1,
            max: 17.9,
        },
        staminaCost: 3.8,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'quality-estradoit',
        name: 'Quality Estradoit',
        images: [
            {
                src: '/images/weapons/daggers/qualestradoit.gif',
                alt: 'Quality Estradoit',
            },
        ],
        effects: [],
        requirements: {
            agility: 165,
        },
        category: 'daggers',
        damage: {
            min: 7.2,
            max: 21.3,
        },
        staminaCost: 4.4,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'assassins-stiletto',
        name: "Assassin's Stiletto",
        images: [
            {
                src: '/images/weapons/daggers/asnstiletto.gif',
                alt: "Assassin's Stiletto",
            },
        ],
        effects: [],
        requirements: {
            agility: 215,
        },
        category: 'daggers',
        damage: {
            min: 9.5,
            max: 28.0,
        },
        staminaCost: 5.8,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'beautiful-bouquet',
        name: 'Beautiful Bouquet',
        images: [
            {
                src: '/images/weapons/nonviolent/bouquet.gif',
                alt: 'Beautiful Bouquet',
            },
        ],
        effects: [],
        requirements: {
            agility: 15,
        },
        category: 'non-violent',
        damage: {
            min: 0.5,
            max: 1.0,
        },
        staminaCost: 0.3,
        attackSpeed: 20,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'charming-blue-flower',
        name: 'Charming Blue Flower',
        images: [
            {
                src: '/images/weapons/nonviolent/blueflower.gif',
                alt: 'Charming Blue Flower',
            },
        ],
        effects: [],
        requirements: {},
        category: 'non-violent',
        damage: {
            min: 0.0,
            max: 0.0,
        },
        staminaCost: 0.0,
        attackSpeed: 16,
        critical: {
            hit: 0,
            fumble: 0,
        },
    },
    {
        id: 'charming-orange-flower',
        name: 'Charming Orange Flower',
        images: [
            {
                src: '/images/weapons/nonviolent/orangeflower.gif',
                alt: 'Charming Orange Flower',
            },
        ],
        effects: [],
        requirements: {},
        category: 'non-violent',
        damage: {
            min: 0.0,
            max: 0.0,
        },
        staminaCost: 0.0,
        attackSpeed: 16,
        critical: {
            hit: 0,
            fumble: 0,
        },
    },
    {
        id: 'charming-purple-flower',
        name: 'Charming Purple Flower',
        images: [
            {
                src: '/images/weapons/nonviolent/purpleflower.gif',
                alt: 'Charming Purple Flower',
            },
        ],
        effects: [],
        requirements: {},
        category: 'non-violent',
        damage: {
            min: 0.0,
            max: 0.0,
        },
        staminaCost: 0.0,
        attackSpeed: 16,
        critical: {
            hit: 0,
            fumble: 0,
        },
    },
    {
        id: 'charming-red-flower',
        name: 'Charming Red Flower',
        images: [
            {
                src: '/images/weapons/nonviolent/redflower.gif',
                alt: 'Charming Red Flower',
            },
        ],
        effects: [],
        requirements: {},
        category: 'non-violent',
        damage: {
            min: 0.0,
            max: 0.0,
        },
        staminaCost: 0.0,
        attackSpeed: 16,
        critical: {
            hit: 0,
            fumble: 0,
        },
    },
    {
        id: 'charming-white-flower',
        name: 'Charming White Flower',
        images: [
            {
                src: '/images/weapons/nonviolent/whiteflower.gif',
                alt: 'Charming White Flower',
            },
        ],
        effects: [],
        requirements: {},
        category: 'non-violent',
        damage: {
            min: 0.0,
            max: 0.0,
        },
        staminaCost: 0.0,
        attackSpeed: 16,
        critical: {
            hit: 0,
            fumble: 0,
        },
    },
    {
        id: 'shortbow',
        name: 'Shortbow',
        images: [
            {
                src: '/images/weapons/ranged/shrtbow.gif',
                alt: 'Shortbow',
            },
        ],
        effects: [],
        requirements: {
            strength: 33,
            agility: 46,
        },
        category: 'ranged',
        damage: {
            min: 3.6,
            max: 8.8,
        },
        staminaCost: 2.4,
        attackSpeed: 25,
        range: {
            near: 3,
            medium: 6,
            far: 9,
        },
    },
    {
        id: 'longbow',
        name: 'Longbow',
        images: [
            {
                src: '/images/weapons/ranged/lngbow.gif',
                alt: 'Longbow',
            },
        ],
        effects: [],
        requirements: {
            strength: 50,
            agility: 62,
        },
        category: 'ranged',
        damage: {
            min: 6.4,
            max: 15.6,
        },
        staminaCost: 5.5,
        attackSpeed: 29,
        range: {
            near: 4,
            medium: 7,
            far: 12,
        },
    },
    {
        id: 'sturdy-shortbow',
        name: 'Sturdy Shortbow',
        images: [
            {
                src: '/images/weapons/ranged/strdshrtbow.gif',
                alt: 'Sturdy Shortbow',
            },
        ],
        effects: [],
        requirements: {
            strength: 51,
            agility: 78,
        },
        category: 'ranged',
        damage: {
            min: 6.4,
            max: 16.1,
        },
        staminaCost: 4.3,
        attackSpeed: 25,
        range: {
            near: 3,
            medium: 9,
            far: 9,
        },
    },
    {
        id: 'strong-longbow',
        name: 'Strong Longbow',
        images: [
            {
                src: '/images/weapons/ranged/strnglngbow.gif',
                alt: 'Strong Longbow',
            },
        ],
        effects: [],
        requirements: {
            strength: 71,
            agility: 91,
        },
        category: 'ranged',
        damage: {
            min: 9.8,
            max: 24.0,
        },
        staminaCost: 8.5,
        attackSpeed: 29,
        range: {
            near: 4,
            medium: 7,
            far: 12,
        },
    },
    {
        id: 'short-spear',
        name: 'Short Spear',
        images: [
            {
                src: '/images/weapons/spears/shortspear.gif',
                alt: 'Short Spear',
            },
        ],
        effects: [],
        requirements: {
            strength: 27,
            agility: 20,
        },
        category: 'spears',
        damage: {
            min: 2.1,
            max: 5.6,
        },
        staminaCost: 2.0,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'spear',
        name: 'Spear',
        images: [
            {
                src: '/images/weapons/spears/spear.gif',
                alt: 'Spear',
            },
        ],
        effects: [],
        requirements: {
            strength: 38,
            agility: 25,
        },
        category: 'spears',
        damage: {
            min: 3.4,
            max: 9.6,
        },
        staminaCost: 3.5,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'beaked-axe-of-iron',
        name: 'Beaked Axe of Iron',
        images: [
            {
                src: '/images/weapons/spears/bkaxeiron.gif',
                alt: 'Beaked Axe of Iron',
            },
        ],
        effects: [],
        requirements: {
            strength: 57,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 5.5,
            max: 15.0,
        },
        staminaCost: 5.1,
        attackSpeed: 46,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'strong-spear',
        name: 'Strong Spear',
        images: [
            {
                src: '/images/weapons/spears/strongspear.gif',
                alt: 'Strong Spear',
            },
        ],
        effects: [],
        requirements: {
            strength: 59,
            agility: 34,
        },
        category: 'spears',
        damage: {
            min: 6.1,
            max: 17.7,
        },
        staminaCost: 6.5,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'glaive',
        name: 'Glaive',
        images: [
            {
                src: '/images/weapons/spears/glaive.gif',
                alt: 'Glaive',
            },
        ],
        effects: [],
        requirements: {
            strength: 70,
            agility: 39,
        },
        category: 'spears',
        damage: {
            min: 7.5,
            max: 21.8,
        },
        staminaCost: 8.0,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'beaked-axe-of-steel',
        name: 'Beaked Axe of Steel',
        images: [
            {
                src: '/images/weapons/spears/bkaxesteel.gif',
                alt: 'Beaked Axe of Steel',
            },
        ],
        effects: [],
        requirements: {
            strength: 85,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 8.6,
            max: 24.0,
        },
        staminaCost: 8.1,
        attackSpeed: 46,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'dampwood-spear',
        name: 'Dampwood Spear',
        images: [
            {
                src: '/images/weapons/spears/dampwdspear.gif',
                alt: 'Dampwood Spear',
            },
        ],
        effects: [],
        requirements: {
            strength: 79,
            agility: 43,
        },
        category: 'spears',
        damage: {
            min: 8.6,
            max: 25.1,
        },
        staminaCost: 9.3,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'tusk-spear',
        name: 'Tusk Spear',
        images: [
            {
                src: '/images/weapons/spears/tuskspear.gif',
                alt: 'Tusk Spear',
            },
        ],
        effects: [],
        requirements: {
            strength: 97,
            agility: 51,
        },
        category: 'spears',
        damage: {
            min: 10.9,
            max: 31.9,
        },
        staminaCost: 11.8,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'halberd',
        name: 'Halberd',
        images: [
            {
                src: '/images/weapons/spears/halberd.gif',
                alt: 'Halberd',
            },
        ],
        effects: [],
        requirements: {
            strength: 108,
        },
        category: 'spears',
        damage: {
            min: 11.3,
            max: 31.5,
        },
        staminaCost: 10.7,
        attackSpeed: 46,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'steel-glaive',
        name: 'Steel Glaive',
        images: [
            {
                src: '/images/weapons/spears/steelglaive.gif',
                alt: 'Steel Glaive',
            },
        ],
        effects: [],
        requirements: {
            strength: 106,
            agility: 55,
        },
        category: 'spears',
        damage: {
            min: 12.0,
            max: 35.3,
        },
        staminaCost: 13.0,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'iron-berdiche',
        name: 'Iron Berdiche',
        images: [
            {
                src: '/images/weapons/spears/ironberdiche.gif',
                alt: 'Iron Berdiche',
            },
        ],
        effects: [],
        requirements: {
            strength: 64,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 11.8,
            max: 37.7,
        },
        staminaCost: 7.8,
        attackSpeed: 47,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'quality-beaked-axe',
        name: 'Quality Beaked Axe',
        images: [
            {
                src: '/images/weapons/spears/bkaxesteelcrafted.gif',
                alt: 'Quality Beaked Axe',
            },
        ],
        effects: [],
        requirements: {
            strength: 142,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 15.2,
            max: 42.0,
        },
        staminaCost: 14.5,
        attackSpeed: 46,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'sharpened-glaive',
        name: 'Sharpened Glaive',
        images: [
            {
                src: '/images/weapons/spears/sharpglaive.gif',
                alt: 'Sharpened Glaive',
            },
        ],
        effects: [],
        requirements: {
            strength: 142,
            agility: 71,
        },
        category: 'spears',
        damage: {
            min: 16.5,
            max: 48.8,
        },
        staminaCost: 18.0,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'flamebringer-glaive',
        name: 'Flamebringer Glaive',
        images: [
            {
                src: '/images/weapons/spears/flamebringer.gif',
                alt: 'Flamebringer Glaive',
            },
        ],
        effects: ['Greater Flame'],
        requirements: {
            strength: 142,
            agility: 71,
            faith: 40,
        },
        category: 'spears',
        damage: {
            min: 16.5,
            max: 48.8,
        },
        staminaCost: 18.0,
        attackSpeed: 42,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'soldiers-berdiche',
        name: "Soldier's Berdiche",
        images: [
            {
                src: '/images/weapons/spears/sldberdiche.gif',
                alt: "Soldier's Berdiche",
            },
        ],
        effects: [],
        requirements: {
            strength: 96,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 19.1,
            max: 61.9,
        },
        staminaCost: 12.8,
        attackSpeed: 47,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'champions-berdiche',
        name: "Champion's Berdiche",
        images: [
            {
                src: '/images/weapons/spears/chmpberdiche.gif',
                alt: "Champion's Berdiche",
            },
        ],
        effects: [],
        requirements: {
            strength: 188,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 40.1,
            max: 130.9,
        },
        staminaCost: 26.8,
        attackSpeed: 47,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'lords-berdiche',
        name: "Lord's Berdiche",
        images: [
            {
                src: '/images/weapons/spears/lordsberdiche.gif',
                alt: "Lord's Berdiche",
            },
        ],
        effects: [],
        requirements: {
            strength: 246,
            twoHanded: true,
        },
        category: 'spears',
        damage: {
            min: 53.3,
            max: 174.0,
        },
        staminaCost: 35.5,
        attackSpeed: 47,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'staff',
        name: 'Staff',
        images: [
            {
                src: '/images/weapons/staffs/staff.gif',
                alt: 'Staff',
            },
        ],
        effects: ['+8 Cast Rating'],
        requirements: {
            intelligence: 20,
            agility: 17,
            twoHanded: true,
        },
        category: 'staffs',
        damage: {
            min: 1.3,
            max: 2.4,
        },
        staminaCost: 0.7,
        attackSpeed: 27,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'iron-staff',
        name: 'Iron Staff',
        images: [
            {
                src: '/images/weapons/staffs/ironstaff.gif',
                alt: 'Iron Staff',
            },
        ],
        effects: ['+36 Cast Rating'],
        requirements: {
            intelligence: 90,
            agility: 30,
            twoHanded: true,
        },
        category: 'staffs',
        damage: {
            min: 6.4,
            max: 10.5,
        },
        staminaCost: 2.6,
        attackSpeed: 27,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'gloomshredder-staff',
        name: 'Gloomshredder Staff',
        images: [
            {
                src: '/images/weapons/staffs/gloomstaff.gif',
                alt: 'Gloomshredder Staff',
            },
        ],
        effects: ['+40 Cast Rating', '+2 Light Radius'],
        requirements: {
            intelligence: 125,
            agility: 38,
            twoHanded: true,
        },
        category: 'staffs',
        damage: {
            min: 9.2,
            max: 15.0,
        },
        staminaCost: 3.7,
        attackSpeed: 27,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'charged-staff',
        name: 'Charged Staff',
        images: [
            {
                src: '/images/weapons/staffs/charged.gif',
                alt: 'Charged Staff',
            },
        ],
        effects: ['+50 Cast Rating'],
        requirements: {
            intelligence: 165,
            agility: 45,
            twoHanded: true,
        },
        category: 'staffs',
        damage: {
            min: 12.0,
            max: 19.5,
        },
        staminaCost: 4.7,
        attackSpeed: 27,
        critical: {
            hit: 5,
            fumble: 10,
        },
    },
    {
        id: 'rusty-shortsword',
        name: 'Rusty Shortsword',
        images: [
            {
                src: '/images/weapons/swords/rustshortswd.gif',
                alt: 'Rusty Shortsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 19,
            agility: 20,
        },
        category: 'swords',
        damage: {
            min: 1.2,
            max: 2.8,
        },
        staminaCost: 0.8,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'shortsword',
        name: 'Shortsword',
        images: [
            {
                src: '/images/weapons/swords/shortsword.gif',
                alt: 'Shortsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 28,
            agility: 31,
        },
        category: 'swords',
        damage: {
            min: 2.1,
            max: 5.6,
        },
        staminaCost: 1.4,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'crude-sword',
        name: 'Crude Sword',
        images: [
            {
                src: '/images/weapons/swords/crudesword.gif',
                alt: 'Crude Sword',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 30,
        },
        category: 'swords',
        damage: {
            min: 2.4,
            max: 5.9,
        },
        staminaCost: 1.6,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'xanacons-shortsword',
        name: "Xanacon's Shortsword",
        images: [
            {
                src: '/images/weapons/swords/xanshortswd.gif',
                alt: "Xanacon's Shortsword",
            },
        ],
        unique: true,
        effects: [],
        requirements: {
            deity: 'gifted',
            soulColor: 'red',
            gender: 'male',
        },
        category: 'swords',
        damage: {
            min: 1.0,
            max: 6.5,
        },
        staminaCost: 0.8,
        attackSpeed: 24,
        critical: {
            hit: 35,
            fumble: 12,
        },
    },
    {
        id: 'neophyte-sword',
        name: 'Neophyte Sword',
        images: [
            {
                src: '/images/weapons/swords/neosword.gif',
                alt: 'Neophyte Sword',
            },
        ],
        effects: ['Trust of Benedek'],
        requirements: {
            strength: 36,
            deity: 'gifted',
            classes: ['Neophyte'],
        },
        category: 'swords',
        damage: {
            min: 3.0,
            max: 8.3,
        },
        staminaCost: 2.4,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'iron-sword',
        name: 'Iron Sword',
        images: [
            {
                src: '/images/weapons/swords/ironsword.gif',
                alt: 'Iron Sword',
            },
        ],
        effects: [],
        requirements: {
            strength: 41,
            agility: 41,
        },
        category: 'swords',
        damage: {
            min: 3.6,
            max: 8.8,
        },
        staminaCost: 2.4,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'rapier',
        name: 'Rapier',
        images: [
            {
                src: '/images/weapons/swords/rapier.gif',
                alt: 'Rapier',
            },
        ],
        effects: [],
        requirements: {
            strength: 34,
            agility: 63,
        },
        category: 'swords',
        damage: {
            min: 3.2,
            max: 9.1,
        },
        staminaCost: 1.9,
        attackSpeed: 20,
        critical: {
            hit: 3,
            fumble: 3,
        },
    },
    {
        id: 'steel-shortsword',
        name: 'Steel Shortsword',
        images: [
            {
                src: '/images/weapons/swords/stlshortswd.gif',
                alt: 'Steel Shortsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 40,
            agility: 47,
        },
        category: 'swords',
        damage: {
            min: 3.4,
            max: 9.6,
        },
        staminaCost: 2.3,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'iron-falchion',
        name: 'Iron Falchion',
        images: [
            {
                src: '/images/weapons/swords/ironfalchion.gif',
                alt: 'Iron Falchion',
            },
        ],
        effects: [],
        requirements: {
            strength: 46,
            agility: 46,
        },
        category: 'swords',
        damage: {
            min: 4.1,
            max: 10.3,
        },
        staminaCost: 2.8,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-sword',
        name: 'Steel Sword',
        images: [
            {
                src: '/images/weapons/swords/steelsword.gif',
                alt: 'Steel Sword',
            },
        ],
        effects: [],
        requirements: {
            strength: 56,
            agility: 56,
        },
        category: 'swords',
        damage: {
            min: 5.3,
            max: 13.2,
        },
        staminaCost: 3.5,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-longsword',
        name: 'Steel Longsword',
        images: [
            {
                src: '/images/weapons/swords/stllongswd.gif',
                alt: 'Steel Longsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 61,
            agility: 61,
        },
        category: 'swords',
        damage: {
            min: 5.8,
            max: 14.7,
        },
        staminaCost: 3.9,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-falchion',
        name: 'Steel Falchion',
        images: [
            {
                src: '/images/weapons/swords/stlfalchion.gif',
                alt: 'Steel Falchion',
            },
        ],
        effects: [],
        requirements: {
            strength: 66,
            agility: 66,
        },
        category: 'swords',
        damage: {
            min: 6.4,
            max: 16.1,
        },
        staminaCost: 4.3,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'courtiers-rapier',
        name: "Courtier's Rapier",
        images: [
            {
                src: '/images/weapons/swords/courtrapier.gif',
                alt: "Courtier's Rapier",
            },
        ],
        effects: [],
        requirements: {
            strength: 51,
            agility: 105,
        },
        category: 'swords',
        damage: {
            min: 5.6,
            max: 16.2,
        },
        staminaCost: 3.4,
        attackSpeed: 20,
        critical: {
            hit: 3,
            fumble: 3,
        },
    },
    {
        id: 'bronze-shortsword',
        name: 'Bronze Shortsword',
        images: [
            {
                src: '/images/weapons/swords/bronzeshrtswd.gif',
                alt: 'Bronze Shortsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 64,
            agility: 78,
        },
        category: 'swords',
        damage: {
            min: 6.0,
            max: 17.3,
        },
        staminaCost: 4.0,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'steel-tegha',
        name: 'Steel Tegha',
        images: [
            {
                src: '/images/weapons/swords/steeltegha.gif',
                alt: 'Steel Tegha',
            },
        ],
        effects: [],
        requirements: {
            strength: 75,
            agility: 75,
        },
        category: 'swords',
        damage: {
            min: 7.3,
            max: 18.6,
        },
        staminaCost: 4.9,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'silver-gladius',
        name: 'Silver Gladius',
        images: [
            {
                src: '/images/weapons/swords/silvergladius.gif',
                alt: 'Silver Gladius',
            },
        ],
        effects: ['Silver Edge'],
        requirements: {
            strength: 71,
            agility: 87,
            faith: 30,
        },
        category: 'swords',
        damage: {
            min: 6.8,
            max: 18.8,
        },
        staminaCost: 4.5,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'bronze-blade',
        name: 'Bronze Blade',
        images: [
            {
                src: '/images/weapons/swords/bronzeblade.gif',
                alt: 'Bronze Blade',
            },
        ],
        effects: [],
        requirements: {
            strength: 83,
            agility: 83,
        },
        category: 'swords',
        damage: {
            min: 8.3,
            max: 21.0,
        },
        staminaCost: 5.5,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'iron-flamberge',
        name: 'Iron Flamberge',
        images: [
            {
                src: '/images/weapons/swords/ironflamberge.gif',
                alt: 'Iron Flamberge',
            },
        ],
        effects: [],
        requirements: {
            strength: 47,
            agility: 44,
            twoHanded: true,
        },
        category: 'swords',
        damage: {
            min: 5.5,
            max: 21.8,
        },
        staminaCost: 4.6,
        attackSpeed: 31,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'scimitar',
        name: 'Scimitar',
        images: [
            {
                src: '/images/weapons/swords/scimitar.gif',
                alt: 'Scimitar',
            },
        ],
        unique: true,
        effects: [],
        requirements: {
            strength: 85,
            agility: 105,
        },
        category: 'swords',
        damage: {
            min: 8.3,
            max: 24.0,
        },
        staminaCost: 5.5,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'quality-shortsword',
        name: 'Quality Shortsword',
        images: [
            {
                src: '/images/weapons/swords/qualshrtsword.gif',
                alt: 'Quality Shortsword',
            },
        ],
        effects: [],
        requirements: {
            strength: 92,
            agility: 114,
        },
        category: 'swords',
        damage: {
            min: 9.0,
            max: 26.3,
        },
        staminaCost: 6.0,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'rending-demonhorn',
        name: 'Rending Demonhorn',
        images: [
            {
                src: '/images/weapons/swords/rendinghorn.gif',
                alt: 'Rending Demonhorn',
            },
        ],
        effects: ['-10 Health Points'],
        requirements: {
            strength: 83,
            agility: 83,
        },
        category: 'swords',
        damage: {
            min: 11.0,
            max: 30.0,
        },
        staminaCost: 5.5,
        attackSpeed: 25,
        critical: {
            hit: 13,
            fumble: 8,
        },
    },
    {
        id: 'steel-flamberge',
        name: 'Steel Flamberge',
        images: [
            {
                src: '/images/weapons/swords/stlflamberge.gif',
                alt: 'Steel Flamberge',
            },
        ],
        effects: [],
        requirements: {
            strength: 69,
            agility: 63,
            twoHanded: true,
        },
        category: 'swords',
        damage: {
            min: 8.6,
            max: 35.3,
        },
        staminaCost: 7.4,
        attackSpeed: 31,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'quality-tegha',
        name: 'Quality Tegha',
        images: [
            {
                src: '/images/weapons/swords/qualtegha.gif',
                alt: 'Quality Tegha',
            },
        ],
        effects: [],
        requirements: {
            strength: 143,
            agility: 143,
        },
        category: 'swords',
        damage: {
            min: 14.8,
            max: 38.1,
        },
        staminaCost: 9.9,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'sharp-scimitar',
        name: 'Sharp Scimitar',
        images: [
            {
                src: '/images/weapons/swords/sharpscimitar.gif',
                alt: 'Sharp Scimitar',
            },
        ],
        unique: true,
        effects: [],
        requirements: {
            strength: 134,
            agility: 168,
        },
        category: 'swords',
        damage: {
            min: 13.5,
            max: 39.8,
        },
        staminaCost: 9.0,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'exotic-tegha',
        name: 'Exotic Tegha',
        images: [
            {
                src: '/images/weapons/swords/exotictegha.gif',
                alt: 'Exotic Tegha',
            },
        ],
        effects: [],
        requirements: {
            strength: 160,
            agility: 160,
        },
        category: 'swords',
        damage: {
            min: 16.7,
            max: 42.9,
        },
        staminaCost: 11.1,
        attackSpeed: 25,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'jademetal-gladius',
        name: 'Jademetal Gladius',
        images: [
            {
                src: '/images/weapons/swords/jademetalglad.gif',
                alt: 'Jademetal Gladius',
            },
        ],
        unique: true,
        effects: [],
        requirements: {
            strength: 148,
            agility: 186,
        },
        category: 'swords',
        damage: {
            min: 15.0,
            max: 44.3,
        },
        staminaCost: 10.0,
        attackSpeed: 23,
        critical: {
            hit: 10,
            fumble: 5,
        },
    },
    {
        id: 'novices-claymore',
        name: "Novice's Claymore",
        images: [
            {
                src: '/images/weapons/swords/novclaymore.gif',
                alt: "Novice's Claymore",
            },
        ],
        effects: [],
        requirements: {
            strength: 87,
            agility: 79,
            twoHanded: true,
        },
        category: 'swords',
        damage: {
            min: 11.3,
            max: 46.5,
        },
        staminaCost: 9.7,
        attackSpeed: 31,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
    {
        id: 'masters-claymore',
        name: "Master's Claymore",
        images: [
            {
                src: '/images/weapons/swords/masclaymore.gif',
                alt: "Master's Claymore",
            },
        ],
        effects: [],
        requirements: {
            strength: 159,
            agility: 143,
            twoHanded: true,
        },
        category: 'swords',
        damage: {
            min: 21.8,
            max: 91.5,
        },
        staminaCost: 18.9,
        attackSpeed: 31,
        critical: {
            hit: 10,
            fumble: 10,
        },
    },
];
