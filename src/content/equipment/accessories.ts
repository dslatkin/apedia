import type { Accessory } from '$types';

/** Necklaces and rings. */
export const accessories: Accessory[] = [
    {
        id: 'copper-wedding-necklace',
        name: 'Copper Wedding Necklace',
        images: [
            {
                src: '/images/accessories/necklaces/copperwednecklace.gif',
                alt: 'Copper Wedding Necklace',
            },
        ],
        effects: [],
        requirements: {},
        category: 'necklaces',
    },
    {
        id: 'silver-wedding-necklace',
        name: 'Silver Wedding Necklace',
        images: [
            {
                src: '/images/accessories/necklaces/silverwednecklace.gif',
                alt: 'Silver Wedding Necklace',
            },
        ],
        effects: [],
        requirements: {},
        category: 'necklaces',
    },
    {
        id: 'gold-wedding-necklace',
        name: 'Gold Wedding Necklace',
        images: [
            {
                src: '/images/accessories/necklaces/goldwednecklace.gif',
                alt: 'Gold Wedding Necklace',
            },
        ],
        effects: [],
        requirements: {},
        category: 'necklaces',
    },
    {
        id: 'golden-necklace',
        name: 'Golden Necklace',
        images: [
            {
                src: '/images/accessories/necklaces/goldnecklace.gif',
                alt: 'Golden Necklace',
            },
        ],
        effects: ['+10 Stamina Points'],
        requirements: {
            faith: 20,
        },
        category: 'necklaces',
    },
    {
        id: 'turtle-queens-pendant',
        name: "Turtle Queen's Pendant",
        images: [
            {
                src: '/images/accessories/necklaces/magorpendant.gif',
                alt: "Turtle Queen's Pendant",
            },
        ],
        effects: ['+5 Resistance vs Blue', '+5 Resistance vs Red'],
        requirements: {
            intelligence: 20,
            faith: 20,
        },
        category: 'necklaces',
    },
    {
        id: 'water-pendant',
        name: 'Water Pendant',
        images: [
            {
                src: '/images/accessories/necklaces/waterpendant.gif',
                alt: 'Water Pendant',
            },
        ],
        effects: ['+10 Magic Points', '+5 Resistance vs Blue'],
        requirements: {
            intelligence: 40,
            faith: 20,
        },
        category: 'necklaces',
    },
    {
        id: 'fire-pendant',
        name: 'Fire Pendant',
        images: [
            {
                src: '/images/accessories/necklaces/firependant.gif',
                alt: 'Fire Pendant',
            },
        ],
        effects: ['+2 Maximum Damage', '+5 Resistance vs Red'],
        requirements: {
            agility: 40,
            intelligence: 25,
            faith: 25,
        },
        category: 'necklaces',
    },
    {
        id: 'copper-wedding-band',
        name: 'Copper Wedding Band',
        images: [
            {
                src: '/images/accessories/rings/copperwedband.gif',
                alt: 'Copper Wedding Band',
            },
        ],
        effects: [],
        requirements: {},
        category: 'rings',
    },
    {
        id: 'silver-wedding-band',
        name: 'Silver Wedding Band',
        images: [
            {
                src: '/images/accessories/rings/silverwedband.gif',
                alt: 'Silver Wedding Band',
            },
        ],
        effects: [],
        requirements: {},
        category: 'rings',
    },
    {
        id: 'gold-wedding-band',
        name: 'Gold Wedding Band',
        images: [
            {
                src: '/images/accessories/rings/goldwedband.gif',
                alt: 'Gold Wedding Band',
            },
        ],
        effects: [],
        requirements: {},
        category: 'rings',
    },
    {
        id: 'golden-ring',
        name: 'Golden Ring',
        images: [
            {
                src: '/images/accessories/rings/goldenring.gif',
                alt: 'Golden Ring',
            },
        ],
        effects: ['+10 Stamina Points'],
        requirements: {
            faith: 20,
        },
        category: 'rings',
    },
    {
        id: 'zatras-ring',
        name: "Zatra's Ring",
        images: [
            {
                src: '/images/accessories/rings/zatrasring.gif',
                alt: "Zatra's Ring",
            },
        ],
        effects: ['+10 Magic Points', '+0.5 Damage Reduction'],
        requirements: {
            faith: 20,
        },
        category: 'rings',
    },
    {
        id: 'lesser-ring-of-power',
        name: 'Lesser Ring of Power',
        images: [
            {
                src: '/images/accessories/rings/lesspowring.gif',
                alt: 'Lesser Ring of Power',
            },
        ],
        effects: ['+1 Maximum Damage'],
        requirements: {
            faith: 20,
        },
        category: 'rings',
    },
    {
        id: 'demonstone-ring',
        name: 'Demonstone Ring',
        images: [
            {
                src: '/images/accessories/rings/demonring.gif',
                alt: 'Demonstone Ring',
            },
        ],
        effects: ['+5 Maximum Damage', '-20 Health Points'],
        requirements: {
            faith: 30,
        },
        category: 'rings',
    },
    {
        id: 'air-ring',
        name: 'Air Ring',
        images: [
            {
                src: '/images/accessories/rings/airring.gif',
                alt: 'Air Ring',
            },
        ],
        effects: ['+5 Resistance vs White'],
        requirements: {
            faith: 40,
        },
        category: 'rings',
    },
    {
        id: 'water-ring',
        name: 'Water Ring',
        images: [
            {
                src: '/images/accessories/rings/waterring.gif',
                alt: 'Water Ring',
            },
        ],
        effects: ['+5 Resistance vs Blue'],
        requirements: {
            faith: 40,
        },
        category: 'rings',
    },
    {
        id: 'fire-ring',
        name: 'Fire Ring',
        images: [
            {
                src: '/images/accessories/rings/firering.gif',
                alt: 'Fire Ring',
            },
        ],
        effects: ['+5 Resistance vs Red'],
        requirements: {
            faith: 40,
        },
        category: 'rings',
    },
    {
        id: 'twisted-ring',
        name: 'Twisted Ring',
        images: [
            {
                src: '/images/accessories/rings/twistedring.gif',
                alt: 'Twisted Ring',
            },
        ],
        effects: ['Instant Death'],
        requirements: {
            faith: 50,
        },
        category: 'rings',
    },
    {
        id: 'enchanted-ring',
        name: 'Enchanted Ring',
        images: [
            {
                src: '/images/accessories/rings/enchantedring.gif',
                alt: 'Enchanted Ring',
            },
        ],
        effects: ['+5 Cast Rating'],
        requirements: {
            faith: 50,
        },
        category: 'rings',
    },
];
