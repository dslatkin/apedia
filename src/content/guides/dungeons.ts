import type { Dungeon } from '$types';

/** Dungeons, alphabetical. */
export const dungeons: Dungeon[] = [
    {
        id: 'arag-darkling-pit',
        name: 'Arag Darkling Pit',
        entrances: [
            {
                location: {
                    x: 332,
                    y: 7631,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'arena',
        name: 'Arena',
        entrances: [
            {
                label: 'Gifted Entrance',
                location: {
                    x: 1132,
                    y: 7287,
                },
            },
            {
                label: 'Shining Entrance',
                location: {
                    x: 1132,
                    y: 7301,
                },
            },
            {
                label: 'Spectator Entrance',
                location: {
                    x: 1137,
                    y: 7299,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'cavern-of-eightlegged-horrors',
        name: 'Cavern of Eightlegged Horrors',
        entrances: [
            {
                location: {
                    x: 969,
                    y: 7023,
                },
            },
            {
                location: {
                    x: 978,
                    y: 7029,
                },
            },
            {
                location: {
                    x: 991,
                    y: 7028,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'creepy-cavern',
        name: 'Creepy Cavern',
        entrances: [
            {
                location: {
                    x: 1298,
                    y: 6971,
                },
            },
            {
                location: {
                    x: 1293,
                    y: 6927,
                },
            },
        ],
        minLevel: 20,
        maxLevel: 'none',
    },
    {
        id: 'daerak-hamlet-of-tunnels',
        name: 'Daerak Hamlet of Tunnels',
        entrances: [
            {
                location: {
                    x: 624,
                    y: 7738,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 45,
    },
    {
        id: 'eastern-gate',
        name: 'Eastern Gate',
        entrances: [
            {
                location: {
                    x: 950,
                    y: 6425,
                },
            },
            {
                location: {
                    x: 953,
                    y: 6428,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'eron-trenches',
        name: 'Eron Trenches',
        entrances: [
            {
                location: {
                    x: 49,
                    y: 7271,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'forgotten-burrow',
        name: 'Forgotten Burrow',
        entrances: [
            {
                location: {
                    x: 1144,
                    y: 7752,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'fortress-guard-tower',
        name: 'Fortress Guard Tower',
        entrances: [
            {
                location: {
                    x: 1268,
                    y: 6611,
                },
            },
        ],
        minLevel: 'unknown',
        maxLevel: 'unknown',
        noEntry: true,
    },
    {
        id: 'lost-shrine',
        name: 'Lost Shrine',
        entrances: [
            {
                location: {
                    x: 1324,
                    y: 7044,
                },
            },
        ],
        minLevel: 15,
        maxLevel: 'none',
    },
    {
        id: 'magors-cave',
        name: "Magor's Cave",
        entrances: [
            {
                location: {
                    x: 740,
                    y: 6935,
                },
            },
        ],
        minLevel: 10,
        maxLevel: 25,
    },
    {
        id: 'mines',
        name: 'Mines',
        entrances: [
            {
                location: {
                    x: 780,
                    y: 7533,
                },
            },
        ],
        minLevel: 15,
        maxLevel: 35,
    },
    {
        id: 'pit-of-crabs',
        name: 'Pit of Crabs',
        entrances: [
            {
                location: {
                    x: 1140,
                    y: 6893,
                },
            },
            {
                location: {
                    x: 1147,
                    y: 6870,
                },
            },
        ],
        minLevel: 18,
        maxLevel: 'unknown',
    },
    {
        id: 'rat-hole',
        name: 'Rat Hole',
        entrances: [
            {
                location: {
                    x: 1012,
                    y: 7366,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 5,
    },
    {
        id: 'rimson-south-meeting-hall',
        name: 'Rimson South Meeting Hall',
        entrances: [
            {
                location: {
                    x: 1121,
                    y: 7437,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'sharindars-tower',
        name: "Sharindar's Tower",
        entrances: [
            {
                location: {
                    x: 634,
                    y: 6685,
                },
            },
        ],
        minLevel: 20,
        maxLevel: 'unknown',
    },
    {
        id: 'stronghold',
        name: 'Stronghold',
        entrances: [
            {
                location: {
                    x: 836,
                    y: 7583,
                },
            },
        ],
        minLevel: 20,
        maxLevel: 'none',
    },
    {
        id: 'underground-lake',
        name: 'Underground Lake',
        entrances: [
            {
                location: {
                    x: 663,
                    y: 7486,
                },
            },
        ],
        minLevel: 20,
        maxLevel: 'none',
    },
    {
        id: 'weather-shrine',
        name: 'Weather Shrine',
        entrances: [
            {
                location: {
                    x: 850,
                    y: 7404,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'wolf-den',
        name: 'Wolf Den',
        entrances: [
            {
                location: {
                    x: 794,
                    y: 7107,
                },
            },
            {
                location: {
                    x: 823,
                    y: 7067,
                },
            },
            {
                location: {
                    x: 903,
                    y: 7117,
                },
            },
            {
                location: {
                    x: 1014,
                    y: 7112,
                },
            },
        ],
        minLevel: 'none',
        maxLevel: 'none',
    },
    {
        id: 'zatras-tomb',
        name: "Zatra's Tomb",
        entrances: [
            {
                location: {
                    x: 827,
                    y: 6979,
                },
            },
        ],
        minLevel: 15,
        maxLevel: 30,
    },
];
