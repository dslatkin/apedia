import type { Item } from '$types';

export const items: Item[] = [
    {
        id: 'arrows',
        name: 'Arrows',
        images: [
            {
                src: '/images/items/ammo/arrows.gif',
                alt: 'Arrows',
            },
        ],
        effects: ['10% Damage Bonus'],
        requirements: {},
        category: 'ammo',
        notes: '100 Ammo Maximum',
    },
    {
        id: 'pierce-arrows',
        name: 'Pierce Arrows',
        images: [
            {
                src: '/images/items/ammo/pierce.gif',
                alt: 'Pierce Arrows',
            },
        ],
        effects: ['20% Damage Bonus'],
        requirements: {},
        category: 'ammo',
        notes: '100 Ammo Maximum',
    },
    {
        id: 'flight-arrows',
        name: 'Flight Arrows',
        images: [
            {
                src: '/images/items/ammo/flight.gif',
                alt: 'Flight Arrows',
            },
        ],
        effects: ['1 Range Bonus'],
        requirements: {},
        category: 'ammo',
        notes: '100 Ammo Maximum',
    },
    {
        id: 'pebbles',
        name: 'Pebbles',
        images: [
            {
                src: '/images/items/ammo/pebbles.gif',
                alt: 'Pebbles',
            },
        ],
        effects: ['10% Damage Bonus'],
        requirements: {},
        category: 'ammo',
        notes: '100 Ammo Maximum',
    },
    {
        id: 'egg',
        name: 'Egg',
        images: [
            {
                src: '/images/items/food/egg.gif',
                alt: 'Egg',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'fine-tomato',
        name: 'Fine Tomato',
        images: [
            {
                src: '/images/items/food/finetomato.gif',
                alt: 'Fine Tomato',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'fresh-carrot',
        name: 'Fresh Carrot',
        images: [
            {
                src: '/images/items/food/freshcarrot.gif',
                alt: 'Fresh Carrot',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'green-apple',
        name: 'Green Apple',
        images: [
            {
                src: '/images/items/food/greenapple.gif',
                alt: 'Green Apple',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'honey',
        name: 'Honey',
        images: [
            {
                src: '/images/items/food/honey.gif',
                alt: 'Honey',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'potato',
        name: 'Potato',
        images: [
            {
                src: '/images/items/food/potato.gif',
                alt: 'Potato',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'red-apple',
        name: 'Red Apple',
        images: [
            {
                src: '/images/items/food/redapple.gif',
                alt: 'Red Apple',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'slimefoot-mushroom',
        name: 'Slimefoot Mushroom',
        images: [
            {
                src: '/images/items/food/slimemush.gif',
                alt: 'Slimefoot Mushroom',
            },
        ],
        effects: ['Antidote', 'Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'spider-sac',
        name: 'Spider Sac',
        images: [
            {
                src: '/images/items/food/spidersac.gif',
                alt: 'Spider Sac',
            },
        ],
        effects: ['Poison'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'tasty-bread',
        name: 'Tasty Bread',
        images: [
            {
                src: '/images/items/food/tastybread.gif',
                alt: 'Tasty Bread',
            },
        ],
        effects: ['Tiny Stamina Regain'],
        requirements: {},
        category: 'food',
    },
    {
        id: 'clay-pot',
        name: 'Clay Pot',
        images: [
            {
                src: '/images/items/household/claypot.gif',
                alt: 'Clay Pot',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'ink',
        name: 'Ink',
        images: [
            {
                src: '/images/items/household/ink.gif',
                alt: 'Ink',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'piece-of-paper',
        name: 'Piece of Paper',
        images: [
            {
                src: '/images/items/household/piecepaper.gif',
                alt: 'Piece of Paper',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'quill',
        name: 'Quill',
        images: [
            {
                src: '/images/items/household/quill.gif',
                alt: 'Quill',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'saw',
        name: 'Saw',
        images: [
            {
                src: '/images/items/household/saw.gif',
                alt: 'Saw',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'work-hammer',
        name: 'Work Hammer',
        images: [
            {
                src: '/images/items/household/workhammer.gif',
                alt: 'Work Hammer',
            },
        ],
        effects: [],
        requirements: {},
        category: 'household',
    },
    {
        id: 'blunt-demonhorn',
        name: 'Blunt Demonhorn',
        images: [
            {
                src: '/images/items/junk/bluntdemhorn.gif',
                alt: 'Blunt Demonhorn',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'broken-pot',
        name: 'Broken Pot',
        images: [
            {
                src: '/images/items/junk/brokenpot.gif',
                alt: 'Broken Pot',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'croc-boot',
        name: 'Croc Boot',
        images: [
            {
                src: '/images/items/junk/crocboot.gif',
                alt: 'Croc Boot',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'essence-of-air',
        name: 'Essence of Air',
        images: [
            {
                src: '/images/items/junk/essenceair.gif',
                alt: 'Essence of Air',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'glowing-eyeball',
        name: 'Glowing Eyeball',
        images: [
            {
                src: '/images/items/junk/gloweyeball.gif',
                alt: 'Glowing Eyeball',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'leather-boot',
        name: 'Leather Boot',
        images: [
            {
                src: '/images/items/junk/leatherboot.gif',
                alt: 'Leather Boot',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'hard-leather-boot',
        name: 'Hard Leather Boot',
        images: [
            {
                src: '/images/items/junk/hardlthrboot.gif',
                alt: 'Hard Leather Boot',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'left-leather-glove',
        name: 'Left Leather Glove',
        images: [
            {
                src: '/images/items/junk/leflethrglove.gif',
                alt: 'Left Leather Glove',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'right-leather-glove',
        name: 'Right Leather Glove',
        images: [
            {
                src: '/images/items/junk/ritlethrglove.gif',
                alt: 'Right Leather Glove',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'left-studded-glove',
        name: 'Left Studded Glove',
        images: [
            {
                src: '/images/items/junk/leftstudglove.gif',
                alt: 'Left Studded Glove',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'right-studded-glove',
        name: 'Right Studded Glove',
        images: [
            {
                src: '/images/items/junk/rightstudglove.gif',
                alt: 'Right Studded Glove',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'skeleton-hound-head',
        name: 'Skeleton Hound Head',
        images: [
            {
                src: '/images/items/junk/skelhoundhead.gif',
                alt: 'Skeleton Hound Head',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'wing-of-an-imp',
        name: 'Wing of an Imp',
        images: [
            {
                src: '/images/items/junk/impwing.gif',
                alt: 'Wing of an Imp',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'worg-teeth',
        name: 'Worg Teeth',
        images: [
            {
                src: '/images/items/junk/worgteeth.gif',
                alt: 'Worg Teeth',
            },
        ],
        effects: [],
        requirements: {},
        category: 'junk',
    },
    {
        id: 'candle',
        name: 'Candle',
        images: [
            {
                src: '/images/items/lights/candle.gif',
                alt: 'Candle',
            },
        ],
        effects: ['+6 Light Radius'],
        requirements: {},
        category: 'lights',
    },
    {
        id: 'torch',
        name: 'Torch',
        images: [
            {
                src: '/images/items/lights/torch.gif',
                alt: 'Torch',
            },
        ],
        effects: ['+8 Light Radius'],
        requirements: {},
        category: 'lights',
    },
    {
        id: 'lantern',
        name: 'Lantern',
        images: [
            {
                src: '/images/items/lights/lantern.gif',
                alt: 'Lantern',
            },
        ],
        effects: ['+10 Light Radius'],
        requirements: {},
        category: 'lights',
    },
    {
        id: 'campfire',
        name: 'Campfire',
        images: [
            {
                src: '/images/items/lights/campfire.gif',
                alt: 'Campfire',
            },
        ],
        effects: [],
        requirements: {},
        category: 'lights',
    },
    {
        id: 'small-piece-of-crocodile-skin',
        name: 'Small Piece of Crocodile Skin',
        images: [
            {
                src: '/images/items/materials/smallcrocskin.gif',
                alt: 'Small Piece of Crocodile Skin',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-crocodile-skin',
        name: 'Piece of Crocodile Skin',
        images: [
            {
                src: '/images/items/materials/crocodileskin.gif',
                alt: 'Piece of Crocodile Skin',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-greenscale',
        name: 'Small Piece of Greenscale',
        images: [
            {
                src: '/images/items/materials/smallgreen.gif',
                alt: 'Small Piece of Greenscale',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-greenscale',
        name: 'Piece of Greenscale',
        images: [
            {
                src: '/images/items/materials/greenscale.gif',
                alt: 'Piece of Greenscale',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-frostskin',
        name: 'Small Piece of Frostskin',
        images: [
            {
                src: '/images/items/materials/smallfrost.gif',
                alt: 'Small Piece of Frostskin',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-frostskin',
        name: 'Piece of Frostskin',
        images: [
            {
                src: '/images/items/materials/frost.gif',
                alt: 'Piece of Frostskin',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'feathers',
        name: 'Feathers',
        images: [
            {
                src: '/images/items/materials/feathers.gif',
                alt: 'Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'fine-blue-feathers',
        name: 'Fine Blue Feathers',
        images: [
            {
                src: '/images/items/materials/fnblufeathers.gif',
                alt: 'Fine Blue Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'fine-green-feathers',
        name: 'Fine Green Feathers',
        images: [
            {
                src: '/images/items/materials/fngrnfeathers.gif',
                alt: 'Fine Green Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'fine-red-feathers',
        name: 'Fine Red Feathers',
        images: [
            {
                src: '/images/items/materials/fnredfeathers.gif',
                alt: 'Fine Red Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'fine-white-feathers',
        name: 'Fine White Feathers',
        images: [
            {
                src: '/images/items/materials/fnwhtfeathers.gif',
                alt: 'Fine White Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'fine-yellow-feathers',
        name: 'Fine Yellow Feathers',
        images: [
            {
                src: '/images/items/materials/fnyelfeathers.gif',
                alt: 'Fine Yellow Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'hippogrif-feathers',
        name: 'Hippogrif Feathers',
        images: [
            {
                src: '/images/items/materials/hippofeathers.gif',
                alt: 'Hippogrif Feathers',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'tiny-piece-of-fur-brown',
        name: 'Tiny Piece of Fur (brown)',
        images: [
            {
                src: '/images/items/materials/tybrownfur.gif',
                alt: 'Tiny Piece of Fur (brown)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-fur-brown',
        name: 'Small Piece of Fur (brown)',
        images: [
            {
                src: '/images/items/materials/smbrownfur.gif',
                alt: 'Small Piece of Fur (brown)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-fur-brown',
        name: 'Piece of Fur (brown)',
        images: [
            {
                src: '/images/items/materials/pcbrownfur.gif',
                alt: 'Piece of Fur (brown)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'large-piece-of-fur-brown',
        name: 'Large Piece of Fur (brown)',
        images: [
            {
                src: '/images/items/materials/lgbrownfur.gif',
                alt: 'Large Piece of Fur (brown)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'tiny-piece-of-fur-white',
        name: 'Tiny Piece of Fur (white)',
        images: [
            {
                src: '/images/items/materials/tywhitefur.gif',
                alt: 'Tiny Piece of Fur (white)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-fur-white',
        name: 'Small Piece of Fur (white)',
        images: [
            {
                src: '/images/items/materials/smwhitefur.gif',
                alt: 'Small Piece of Fur (white)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-fur-white',
        name: 'Piece of Fur (white)',
        images: [
            {
                src: '/images/items/materials/pcwhitefur.gif',
                alt: 'Piece of Fur (white)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'large-piece-of-fur-white',
        name: 'Large Piece of Fur (white)',
        images: [
            {
                src: '/images/items/materials/lgwhitefur.gif',
                alt: 'Large Piece of Fur (white)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'tiny-piece-of-fur-yellow',
        name: 'Tiny Piece of Fur (yellow)',
        images: [
            {
                src: '/images/items/materials/tyyellowfur.gif',
                alt: 'Tiny Piece of Fur (yellow)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-fur-yellow',
        name: 'Small Piece of Fur (yellow)',
        images: [
            {
                src: '/images/items/materials/smyellowfur.gif',
                alt: 'Small Piece of Fur (yellow)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-fur-yellow',
        name: 'Piece of Fur (yellow)',
        images: [
            {
                src: '/images/items/materials/pcyellowfur.gif',
                alt: 'Piece of Fur (yellow)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'large-piece-of-fur-yellow',
        name: 'Large Piece of Fur (yellow)',
        images: [
            {
                src: '/images/items/materials/lgyellowfur.gif',
                alt: 'Large Piece of Fur (yellow)',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-lion-fur',
        name: 'Small Piece of Lion Fur',
        images: [
            {
                src: '/images/items/materials/smlionfur.gif',
                alt: 'Small Piece of Lion Fur',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'lion-fur',
        name: 'Lion Fur',
        images: [
            {
                src: '/images/items/materials/lionfur.gif',
                alt: 'Lion Fur',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-bear-fur',
        name: 'Small Piece of Bear Fur',
        images: [
            {
                src: '/images/items/materials/smbearfur.gif',
                alt: 'Small Piece of Bear Fur',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'bear-fur',
        name: 'Bear Fur',
        images: [
            {
                src: '/images/items/materials/bearfur.gif',
                alt: 'Bear Fur',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-piece-of-demonhide',
        name: 'Small Piece of Demonhide',
        images: [
            {
                src: '/images/items/materials/smdemonhide.gif',
                alt: 'Small Piece of Demonhide',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-demonhide',
        name: 'Piece of Demonhide',
        images: [
            {
                src: '/images/items/materials/pcdemonhide.gif',
                alt: 'Piece of Demonhide',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-turtles-shell-half',
        name: "Small Turtle's Shell (Half)",
        images: [
            {
                src: '/images/items/materials/smlshellhalf.gif',
                alt: "Small Turtle's Shell (Half)",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'small-turtles-shell',
        name: "Small Turtle's Shell",
        images: [
            {
                src: '/images/items/materials/smlturtshel.gif',
                alt: "Small Turtle's Shell",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'green-turtles-shell-half',
        name: "Green Turtle's Shell (Half)",
        images: [
            {
                src: '/images/items/materials/grnshellhalf.gif',
                alt: "Green Turtle's Shell (Half)",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'green-turtles-shell',
        name: "Green Turtle's Shell",
        images: [
            {
                src: '/images/items/materials/grnturtshel.gif',
                alt: "Green Turtle's Shell",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'red-turtles-shell-quarter',
        name: "Red Turtle's Shell (Quarter)",
        images: [
            {
                src: '/images/items/materials/redshellquar.gif',
                alt: "Red Turtle's Shell (Quarter)",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'red-turtles-shell-half',
        name: "Red Turtle's Shell (Half)",
        images: [
            {
                src: '/images/items/materials/redshellhalf.gif',
                alt: "Red Turtle's Shell (Half)",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'red-turtles-shell',
        name: "Red Turtle's Shell",
        images: [
            {
                src: '/images/items/materials/redturtshel.gif',
                alt: "Red Turtle's Shell",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'piece-of-magors-shell',
        name: "Piece of Magor's Shell",
        images: [
            {
                src: '/images/items/materials/magorsshell.gif',
                alt: "Piece of Magor's Shell",
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'great-tusk',
        name: 'Great Tusk',
        images: [
            {
                src: '/images/items/materials/greattusk.gif',
                alt: 'Great Tusk',
            },
        ],
        effects: [],
        requirements: {},
        category: 'materials',
    },
    {
        id: 'black-horse-deed',
        name: "'Black Horse' Deed",
        images: [
            {
                src: '/images/items/mounts/blackhorse.gif',
                alt: "'Black Horse' Deed",
            },
        ],
        effects: [],
        requirements: {},
        category: 'mounts',
        notes: '180 minutes maximum',
    },
    {
        id: 'brown-horse-deed',
        name: "'Brown Horse' Deed",
        images: [
            {
                src: '/images/items/mounts/brownhorse.gif',
                alt: "'Brown Horse' Deed",
            },
        ],
        effects: [],
        requirements: {},
        category: 'mounts',
        notes: '180 minutes maximum',
    },
    {
        id: 'white-horse-deed',
        name: "'White Horse' Deed",
        images: [
            {
                src: '/images/items/mounts/whitehorse.gif',
                alt: "'White Horse' Deed",
            },
        ],
        effects: [],
        requirements: {},
        category: 'mounts',
        notes: '180 minutes maximum',
    },
    {
        id: 'antidote-potion',
        name: 'Antidote Potion',
        images: [
            {
                src: '/images/items/potions/antidotepot.gif',
                alt: 'Antidote Potion',
            },
        ],
        effects: ['Poison Antidote'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'arnos-potion-of-death',
        name: "Arno's Potion of Death",
        images: [
            {
                src: '/images/items/potions/arnopotdeath.gif',
                alt: "Arno's Potion of Death",
            },
        ],
        effects: ['Instant Death'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'charged-mixture',
        name: 'Charged Mixture',
        images: [
            {
                src: '/images/items/potions/chargemixture.gif',
                alt: 'Charged Mixture',
            },
        ],
        effects: [],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'enchanted-water',
        name: 'Enchanted Water',
        images: [
            {
                src: '/images/items/potions/enchantwater.gif',
                alt: 'Enchanted Water',
            },
        ],
        effects: ['Small Stamina Regain', 'Small Health Restore'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'fresh-water',
        name: 'Fresh Water',
        images: [
            {
                src: '/images/items/potions/freshwater.gif',
                alt: 'Fresh Water',
            },
        ],
        effects: ['Small Stamina Regain'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'imp-water',
        name: 'Imp Water',
        images: [
            {
                src: '/images/items/potions/impwater.gif',
                alt: 'Imp Water',
            },
        ],
        effects: ['Poison'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'magical-featherbrew',
        name: 'Magical Featherbrew',
        images: [
            {
                src: '/images/items/potions/magicbrew.gif',
                alt: 'Magical Featherbrew',
            },
        ],
        effects: [],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'potion-of-health',
        name: 'Potion of Health',
        images: [
            {
                src: '/images/items/potions/healthpot.gif',
                alt: 'Potion of Health',
            },
        ],
        effects: ['Health Restore'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'potion-of-stamina',
        name: 'Potion of Stamina',
        images: [
            {
                src: '/images/items/potions/staminapot.gif',
                alt: 'Potion of Stamina',
            },
        ],
        effects: ['Good Stamina Regain'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'sweet-nasty-brew',
        name: 'Sweet Nasty Brew',
        images: [
            {
                src: '/images/items/potions/swtnastybrew.gif',
                alt: 'Sweet Nasty Brew',
            },
        ],
        effects: ['Poison II', 'Good Stamina Regain'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'sweet-water',
        name: 'Sweet Water',
        images: [
            {
                src: '/images/items/potions/sweetwater.gif',
                alt: 'Sweet Water',
            },
        ],
        effects: ['Small Stamina Regain'],
        requirements: {},
        category: 'potions',
    },
    {
        id: 'blue-iwid-gem',
        name: 'Blue Iwid Gem',
        images: [
            {
                src: '/images/items/valuables/blueiwidgem.gif',
                alt: 'Blue Iwid Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'blue-iwid-shard-piece',
        name: 'Blue Iwid Shard Piece',
        images: [
            {
                src: '/images/items/valuables/bishardpiece.gif',
                alt: 'Blue Iwid Shard Piece',
            },
            {
                src: '/images/items/valuables/bishardpiece2.gif',
                alt: 'Blue Iwid Shard Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'blue-iwid-shard',
        name: 'Blue Iwid Shard',
        images: [
            {
                src: '/images/items/valuables/blueiwidshard.gif',
                alt: 'Blue Iwid Shard',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'blue-iwid-tablet-piece',
        name: 'Blue Iwid Tablet Piece',
        images: [
            {
                src: '/images/items/valuables/blueiwidtabpc.gif',
                alt: 'Blue Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/blueiwidtabpc2.gif',
                alt: 'Blue Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/blueiwidtabpc3.gif',
                alt: 'Blue Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/blueiwidtabpc4.gif',
                alt: 'Blue Iwid Tablet Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'iwid-tablet-of-ice',
        name: 'Iwid Tablet of Ice',
        images: [
            {
                src: '/images/items/valuables/tabletice.gif',
                alt: 'Iwid Tablet of Ice',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'purple-iwid-gem',
        name: 'Purple Iwid Gem',
        images: [
            {
                src: '/images/items/valuables/purpleiwidgem.gif',
                alt: 'Purple Iwid Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'purple-iwid-shard-piece',
        name: 'Purple Iwid Shard Piece',
        images: [
            {
                src: '/images/items/valuables/pishardpiece.gif',
                alt: 'Purple Iwid Shard Piece',
            },
            {
                src: '/images/items/valuables/pishardpiece2.gif',
                alt: 'Purple Iwid Shard Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'purple-iwid-shard',
        name: 'Purple Iwid Shard',
        images: [
            {
                src: '/images/items/valuables/purpleiwidshard.gif',
                alt: 'Purple Iwid Shard',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'purple-iwid-tablet-piece',
        name: 'Purple Iwid Tablet Piece',
        images: [
            {
                src: '/images/items/valuables/purpleiwidtabpc.gif',
                alt: 'Purple Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/purpleiwidtabpc2.gif',
                alt: 'Purple Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/purpleiwidtabpc3.gif',
                alt: 'Purple Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/purpleiwidtabpc4.gif',
                alt: 'Purple Iwid Tablet Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'iwid-tablet-of-health',
        name: 'Iwid Tablet of Health',
        images: [
            {
                src: '/images/items/valuables/tablethealth.gif',
                alt: 'Iwid Tablet of Health',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'red-iwid-gem',
        name: 'Red Iwid Gem',
        images: [
            {
                src: '/images/items/valuables/rediwidgem.gif',
                alt: 'Red Iwid Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'red-iwid-shard-piece',
        name: 'Red Iwid Shard Piece',
        images: [
            {
                src: '/images/items/valuables/rishardpiece.gif',
                alt: 'Red Iwid Shard Piece',
            },
            {
                src: '/images/items/valuables/rishardpiece2.gif',
                alt: 'Red Iwid Shard Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'red-iwid-shard',
        name: 'Red Iwid Shard',
        images: [
            {
                src: '/images/items/valuables/rediwidshard.gif',
                alt: 'Red Iwid Shard',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'red-iwid-tablet-piece',
        name: 'Red Iwid Tablet Piece',
        images: [
            {
                src: '/images/items/valuables/rediwidtabpc.gif',
                alt: 'Red Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/rediwidtabpc2.gif',
                alt: 'Red Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/rediwidtabpc3.gif',
                alt: 'Red Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/rediwidtabpc4.gif',
                alt: 'Red Iwid Tablet Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'iwid-tablet-of-fire',
        name: 'Iwid Tablet of Fire',
        images: [
            {
                src: '/images/items/valuables/tabletfire.gif',
                alt: 'Iwid Tablet of Fire',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'white-iwid-gem',
        name: 'White Iwid Gem',
        images: [
            {
                src: '/images/items/valuables/whiteiwidgem.gif',
                alt: 'White Iwid Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'white-iwid-shard-piece',
        name: 'White Iwid Shard Piece',
        images: [
            {
                src: '/images/items/valuables/wishardpiece.gif',
                alt: 'White Iwid Shard Piece',
            },
            {
                src: '/images/items/valuables/wishardpiece2.gif',
                alt: 'White Iwid Shard Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'white-iwid-shard',
        name: 'White Iwid Shard',
        images: [
            {
                src: '/images/items/valuables/whiteiwidshard.gif',
                alt: 'White Iwid Shard',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'white-iwid-tablet-piece',
        name: 'White Iwid Tablet Piece',
        images: [
            {
                src: '/images/items/valuables/whiteiwidtabpc.gif',
                alt: 'White Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/whiteiwidtabpc2.gif',
                alt: 'White Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/whiteiwidtabpc3.gif',
                alt: 'White Iwid Tablet Piece',
            },
            {
                src: '/images/items/valuables/whiteiwidtabpc4.gif',
                alt: 'White Iwid Tablet Piece',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'iwid-tablet-of-power',
        name: 'Iwid Tablet of Power',
        images: [
            {
                src: '/images/items/valuables/tabletpower.gif',
                alt: 'Iwid Tablet of Power',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'demonstone-gem',
        name: 'Demonstone Gem',
        images: [
            {
                src: '/images/items/valuables/demongem.gif',
                alt: 'Demonstone Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'sky-gem',
        name: 'Sky Gem',
        images: [
            {
                src: '/images/items/valuables/skygem.gif',
                alt: 'Sky Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'dampstone-gem',
        name: 'Dampstone Gem',
        images: [
            {
                src: '/images/items/valuables/dampgem.gif',
                alt: 'Dampstone Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'fiery-gem',
        name: 'Fiery Gem',
        images: [
            {
                src: '/images/items/valuables/fierygem.gif',
                alt: 'Fiery Gem',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
    {
        id: 'sliver-of-bronze',
        name: 'Sliver of Bronze',
        images: [
            {
                src: '/images/items/valuables/sliverbronze.gif',
                alt: 'Sliver of Bronze',
            },
        ],
        effects: [],
        requirements: {},
        category: 'valuables',
    },
];
