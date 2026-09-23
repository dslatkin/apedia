import type { Monster } from '$types';

/** The bestiary, ordered by level. The site split it into bands of 25 levels (0-24, 25-49, 50-74, 75+). */
export const monsters: Monster[] = [
    {
        id: 'black-rabbit',
        name: 'Black Rabbit',
        image: {
            src: '/images/monsters/blackrabbit.gif',
            alt: 'Black Rabbit',
        },
        level: 0,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'brown-rabbit',
        name: 'Brown Rabbit',
        image: {
            src: '/images/monsters/brownrabbit.gif',
            alt: 'Brown Rabbit',
        },
        level: 0,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'small-turtle',
        name: 'Small Turtle',
        image: {
            src: '/images/monsters/smallturtle.gif',
            alt: 'Small Turtle',
        },
        level: 0,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'white-rabbit',
        name: 'White Rabbit',
        image: {
            src: '/images/monsters/whiterabbit.gif',
            alt: 'White Rabbit',
        },
        level: 0,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'green-turtle',
        name: 'Green Turtle',
        image: {
            src: '/images/monsters/greenturtle.gif',
            alt: 'Green Turtle',
        },
        level: 1,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'rat',
        name: 'Rat',
        image: {
            src: '/images/monsters/rat.gif',
            alt: 'Rat',
        },
        level: 1,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'annoying-bee',
        name: 'Annoying Bee',
        image: {
            src: '/images/monsters/annoyingbee.gif',
            alt: 'Annoying Bee',
        },
        level: 2,
        attitudes: ['cooperative'],
        attackRanges: ['very-close'],
        eventOnly: true,
    },
    {
        id: 'giant-rat',
        name: 'Giant Rat',
        image: {
            src: '/images/monsters/giantrat.gif',
            alt: 'Giant Rat',
        },
        level: 2,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'red-turtle',
        name: 'Red Turtle',
        image: {
            src: '/images/monsters/redturtle.gif',
            alt: 'Red Turtle',
        },
        level: 2,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'wild-rabbit',
        name: 'Wild Rabbit',
        image: {
            src: '/images/monsters/wildrabbit.gif',
            alt: 'Wild Rabbit',
        },
        level: 2,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'peasants-bird',
        name: "Peasant's Bird",
        image: {
            src: '/images/monsters/peasantsbird.gif',
            alt: "Peasant's Bird",
        },
        level: 3,
        attitudes: ['peaceful'],
        attackRanges: ['very-close'],
    },
    {
        id: 'zombie',
        name: 'Zombie',
        image: {
            src: '/images/monsters/zombie.gif',
            alt: 'Zombie',
        },
        level: 4,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'wolf',
        name: 'Wolf',
        image: {
            src: '/images/monsters/wolf.gif',
            alt: 'Wolf',
        },
        level: 5,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'pack-alpha-female',
        name: 'Pack Alpha Female',
        image: {
            src: '/images/monsters/pckalphfemale.gif',
            alt: 'Pack Alpha Female',
        },
        level: 6,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'pack-alpha-male',
        name: 'Pack Alpha Male',
        image: {
            src: '/images/monsters/packalphamale.gif',
            alt: 'Pack Alpha Male',
        },
        level: 6,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'worg',
        name: 'Worg',
        image: {
            src: '/images/monsters/worg.gif',
            alt: 'Worg',
        },
        level: 7,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'deercub',
        name: 'Deercub',
        image: {
            src: '/images/monsters/deercub.gif',
            alt: 'Deercub',
        },
        level: 8,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'giant-turtle',
        name: 'Giant Turtle',
        image: {
            src: '/images/monsters/giantturtle.gif',
            alt: 'Giant Turtle',
        },
        level: 8,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'gnatling-spider',
        name: 'Gnatling Spider',
        image: {
            src: '/images/monsters/gntlngspider.gif',
            alt: 'Gnatling Spider',
        },
        level: 8,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison I',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'skeleton',
        name: 'Skeleton',
        image: {
            src: '/images/monsters/skeleton.gif',
            alt: 'Skeleton',
        },
        level: 8,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'ghost',
        name: 'Ghost',
        image: {
            src: '/images/monsters/ghost.gif',
            alt: 'Ghost',
        },
        level: 9,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'merchants-bird',
        name: "Merchant's Bird",
        image: {
            src: '/images/monsters/merchantsbird.gif',
            alt: "Merchant's Bird",
        },
        level: 9,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'mudman',
        name: 'Mudman',
        image: {
            src: '/images/monsters/mudman.gif',
            alt: 'Mudman',
        },
        level: 10,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'ngeo-taratel',
        name: "N'Geo Taratel",
        image: {
            src: '/images/monsters/ngeo.gif',
            alt: "N'Geo Taratel",
        },
        level: 10,
        attitudes: ['slayer', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Cure Wounds',
                color: 'green',
            },
            {
                name: 'Poison Cloud',
                color: 'yellow',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'pigeater-spider',
        name: 'Pigeater Spider',
        image: {
            src: '/images/monsters/pigeatspider.gif',
            alt: 'Pigeater Spider',
        },
        level: 10,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison I',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'walking-dead',
        name: 'Walking Dead',
        image: {
            src: '/images/monsters/walkingdead.gif',
            alt: 'Walking Dead',
        },
        level: 10,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'deer',
        name: 'Deer',
        image: {
            src: '/images/monsters/deer.gif',
            alt: 'Deer',
        },
        level: 11,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-warrior',
        name: 'Skeleton Warrior',
        image: {
            src: '/images/monsters/skelwarrior.gif',
            alt: 'Skeleton Warrior',
        },
        level: 11,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'mudman-leader',
        name: 'Mudman Leader',
        image: {
            src: '/images/monsters/mudmanleader.gif',
            alt: 'Mudman Leader',
        },
        level: 12,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'haunter',
        name: 'Haunter',
        image: {
            src: '/images/monsters/haunter.gif',
            alt: 'Haunter',
        },
        level: 13,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'old-worg',
        name: 'Old Worg',
        image: {
            src: '/images/monsters/oldworg.gif',
            alt: 'Old Worg',
        },
        level: 14,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-hound',
        name: 'Skeleton Hound',
        image: {
            src: '/images/monsters/skelhound.gif',
            alt: 'Skeleton Hound',
        },
        level: 14,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'fools-storm',
        name: "Fool's Storm",
        image: {
            src: '/images/monsters/foolsstorm.gif',
            alt: "Fool's Storm",
        },
        level: 15,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Lightning Zap',
                color: 'blue',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'ghast',
        name: 'Ghast',
        image: {
            src: '/images/monsters/ghast.gif',
            alt: 'Ghast',
        },
        level: 15,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'rimfrost-antelope',
        name: 'Rimfrost Antelope',
        image: {
            src: '/images/monsters/rimantelope.gif',
            alt: 'Rimfrost Antelope',
        },
        level: 15,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-fighter',
        name: 'Skeleton Fighter',
        image: {
            src: '/images/monsters/skelfighter.gif',
            alt: 'Skeleton Fighter',
        },
        level: 15,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'darkling',
        name: 'Darkling',
        image: {
            src: '/images/monsters/darkling.gif',
            alt: 'Darkling',
        },
        level: 16,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'darkling-slinger',
        name: 'Darkling Slinger',
        image: {
            src: '/images/monsters/darkslinger.gif',
            alt: 'Darkling Slinger',
        },
        level: 17,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
    },
    {
        id: 'stone-turtle',
        name: 'Stone Turtle',
        image: {
            src: '/images/monsters/stoneturtle.gif',
            alt: 'Stone Turtle',
        },
        level: 18,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'western-lion',
        name: 'Western Lion',
        image: {
            src: '/images/monsters/westernlion.gif',
            alt: 'Western Lion',
        },
        level: 18,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'darkling-fighter',
        name: 'Darkling Fighter',
        image: {
            src: '/images/monsters/darkfighter.gif',
            alt: 'Darkling Fighter',
        },
        level: 19,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'airdevil',
        name: 'Airdevil',
        image: {
            src: '/images/monsters/airdevil.gif',
            alt: 'Airdevil',
        },
        level: 20,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'arag-darkling',
        name: "'Arag' Darkling",
        image: {
            src: '/images/monsters/aragdarkling.gif',
            alt: "'Arag' Darkling",
        },
        level: 20,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'bagor-troll',
        name: 'Bagor Troll',
        image: {
            src: '/images/monsters/bagortroll.gif',
            alt: 'Bagor Troll',
        },
        level: 20,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
        eventOnly: true,
    },
    {
        id: 'daerak-darkling',
        name: "'Daerak' Darkling",
        image: {
            src: '/images/monsters/daerakdrklng.gif',
            alt: "'Daerak' Darkling",
        },
        level: 20,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'nightwish',
        name: 'Nightwish',
        image: {
            src: '/images/monsters/nightwish.gif',
            alt: 'Nightwish',
        },
        level: 20,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-tie-breaker',
        name: 'Skeleton Tie-breaker',
        image: {
            src: '/images/monsters/skeltiebreak.gif',
            alt: 'Skeleton Tie-breaker',
        },
        level: 20,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['close', 'far'],
        eventOnly: true,
    },
    {
        id: 'skeleton-spearman',
        name: 'Skeleton Spearman',
        image: {
            src: '/images/monsters/skelspearman.gif',
            alt: 'Skeleton Spearman',
        },
        level: 21,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'darkling-summoner',
        name: 'Darkling Summoner',
        image: {
            src: '/images/monsters/darksummoner.gif',
            alt: 'Darkling Summoner',
        },
        level: 22,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        summons: [
            {
                name: 'Firespawn',
                color: 'green',
            },
        ],
    },
    {
        id: 'firespawn',
        name: 'Firespawn',
        image: {
            src: '/images/monsters/firespawn.gif',
            alt: 'Firespawn',
        },
        level: 22,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'giant-crab',
        name: 'Giant Crab',
        image: {
            src: '/images/monsters/giantcrab.gif',
            alt: 'Giant Crab',
        },
        level: 22,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'mighty-ox',
        name: 'Mighty Ox',
        image: {
            src: '/images/monsters/mightyox.gif',
            alt: 'Mighty Ox',
        },
        level: 22,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'crocodile',
        name: 'Crocodile',
        image: {
            src: '/images/monsters/crocodile.gif',
            alt: 'Crocodile',
        },
        level: 23,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'old-magor',
        name: 'Old Magor',
        image: {
            src: '/images/monsters/oldmagor.gif',
            alt: 'Old Magor',
        },
        level: 23,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'savage',
        name: 'Savage',
        image: {
            src: '/images/monsters/savage.gif',
            alt: 'Savage',
        },
        level: 23,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-champion',
        name: 'Skeleton Champion',
        image: {
            src: '/images/monsters/skelchampion.gif',
            alt: 'Skeleton Champion',
        },
        level: 23,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'greenscale-beast',
        name: 'Greenscale Beast',
        image: {
            src: '/images/monsters/grnscalebeast.gif',
            alt: 'Greenscale Beast',
        },
        level: 24,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'lords-bird',
        name: "Lord's Bird",
        image: {
            src: '/images/monsters/lordsbird.gif',
            alt: "Lord's Bird",
        },
        level: 24,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'arag-darkling-sepli',
        name: "'Arag' Darkling Sepli",
        image: {
            src: '/images/monsters/aragdrksepli.gif',
            alt: "'Arag' Darkling Sepli",
        },
        level: 25,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'bloodpaw-lion',
        name: 'Bloodpaw Lion',
        image: {
            src: '/images/monsters/bloodpawlion.gif',
            alt: 'Bloodpaw Lion',
        },
        level: 25,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'daerak-darkling-slinger',
        name: "'Daerak' Darkling Slinger",
        image: {
            src: '/images/monsters/daerakslinger.gif',
            alt: "'Daerak' Darkling Slinger",
        },
        level: 25,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
    },
    {
        id: 'great-pincer',
        name: 'Great Pincer',
        image: {
            src: '/images/monsters/greatpincer.gif',
            alt: 'Great Pincer',
        },
        level: 25,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'kal-zatra',
        name: 'Kal Zatra',
        image: {
            src: '/images/monsters/kalzatra.gif',
            alt: 'Kal Zatra',
        },
        level: 25,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        summons: [
            {
                name: 'Ghast',
                color: 'green',
            },
            {
                name: 'Nightwish',
                color: 'yellow',
            },
            {
                name: 'Skeleton Fighter',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'savage-berserker',
        name: 'Savage Berserker',
        image: {
            src: '/images/monsters/savagebrskr.gif',
            alt: 'Savage Berserker',
        },
        level: 25,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'savage-huntress',
        name: 'Savage Huntress',
        image: {
            src: '/images/monsters/savagehuntress.gif',
            alt: 'Savage Huntress',
        },
        level: 25,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'darkling-tamed-nitesc',
        name: 'Darkling-Tamed Nitesc',
        image: {
            src: '/images/monsters/drktamenitesc.gif',
            alt: 'Darkling-Tamed Nitesc',
        },
        level: 26,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'hippogrif',
        name: 'Hippogrif',
        image: {
            src: '/images/monsters/hippogrif.gif',
            alt: 'Hippogrif',
        },
        level: 26,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'aligator',
        name: 'Aligator',
        image: {
            src: '/images/monsters/aligator.gif',
            alt: 'Aligator',
        },
        level: 27,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'antelope-of-the-winds',
        name: 'Antelope of the Winds',
        image: {
            src: '/images/monsters/antelopewind.gif',
            alt: 'Antelope of the Winds',
        },
        level: 27,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'daerak-darkling-bashka',
        name: "'Daerak' Darkling Bashka",
        image: {
            src: '/images/monsters/daerakbashka.gif',
            alt: "'Daerak' Darkling Bashka",
        },
        level: 27,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'savage-defender',
        name: 'Savage Defender',
        image: {
            src: '/images/monsters/savagedefender.gif',
            alt: 'Savage Defender',
        },
        level: 27,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'skeleton-lord',
        name: 'Skeleton Lord',
        image: {
            src: '/images/monsters/skeletonlord.gif',
            alt: 'Skeleton Lord',
        },
        level: 27,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'arag-darkling-siltli',
        name: "'Arag' Darkling Siltli",
        image: {
            src: '/images/monsters/aragdrksiltli.gif',
            alt: "'Arag' Darkling Siltli",
        },
        level: 28,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'daerak-darkling-garag',
        name: "'Daerak' Darkling Garag",
        image: {
            src: '/images/monsters/daerakgarag.gif',
            alt: "'Daerak' Darkling Garag",
        },
        level: 28,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'deathwish',
        name: 'Deathwish',
        image: {
            src: '/images/monsters/deathwish.gif',
            alt: 'Deathwish',
        },
        level: 28,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'frost-reptile',
        name: 'Frost Reptile',
        image: {
            src: '/images/monsters/frostreptile.gif',
            alt: 'Frost Reptile',
        },
        level: 28,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Frost Breath',
                color: 'blue',
            },
        ],
    },
    {
        id: 'crazy-caverabbit',
        name: 'Crazy Caverabbit',
        image: {
            src: '/images/monsters/czycaverabbit.gif',
            alt: 'Crazy Caverabbit',
        },
        level: 30,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'daerak-darkling-death-twig',
        name: "'Daerak' Darkling Death-twig",
        image: {
            src: '/images/monsters/daerakdethtwg.gif',
            alt: "'Daerak' Darkling Death-twig",
        },
        level: 30,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Darkling Flame',
                color: 'red',
            },
        ],
        summons: [
            {
                name: 'Deathwish',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'forest-troll',
        name: 'Forest Troll',
        image: {
            src: '/images/monsters/foresttroll.gif',
            alt: 'Forest Troll',
        },
        level: 30,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'salamite-youth',
        name: 'Salamite Youth',
        image: {
            src: '/images/monsters/salyouth.gif',
            alt: 'Salamite Youth',
        },
        level: 30,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'umberclaw',
        name: 'Umberclaw',
        image: {
            src: '/images/monsters/umberclaw.gif',
            alt: 'Umberclaw',
        },
        level: 30,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'horror',
        name: 'Horror',
        image: {
            src: '/images/monsters/horror.gif',
            alt: 'Horror',
        },
        level: 33,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'mudbelly-centipede',
        name: 'Mudbelly Centipede',
        image: {
            src: '/images/monsters/mudbelcentpede.gif',
            alt: 'Mudbelly Centipede',
        },
        level: 33,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Triple Target Attack',
            },
        ],
    },
    {
        id: 'salamite-tribesman',
        name: 'Salamite Tribesman',
        image: {
            src: '/images/monsters/saltribesman.gif',
            alt: 'Salamite Tribesman',
        },
        level: 33,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'cave-spider',
        name: 'Cave Spider',
        image: {
            src: '/images/monsters/cavespider.gif',
            alt: 'Cave Spider',
        },
        level: 34,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'salamite-cutter',
        name: 'Salamite Cutter',
        image: {
            src: '/images/monsters/salcutter.gif',
            alt: 'Salamite Cutter',
        },
        level: 34,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'salamite-poker',
        name: 'Salamite Poker',
        image: {
            src: '/images/monsters/salpoker.gif',
            alt: 'Salamite Poker',
        },
        level: 34,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'waverider-spider',
        name: 'Waverider Spider',
        image: {
            src: '/images/monsters/wavespider.gif',
            alt: 'Waverider Spider',
        },
        level: 34,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'frinit-woggot',
        name: 'Frinit Woggot',
        image: {
            src: '/images/monsters/frinwoggot.gif',
            alt: 'Frinit Woggot',
        },
        level: 35,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Firebolt',
                color: 'red',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'mrauk-greatblood-of-daerak',
        name: 'Mrauk Greatblood of Daerak',
        image: {
            src: '/images/monsters/mraukgrblood.gif',
            alt: 'Mrauk Greatblood of Daerak',
        },
        level: 35,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'nightfighter',
        name: 'Nightfighter',
        image: {
            src: '/images/monsters/nightfighter.gif',
            alt: 'Nightfighter',
        },
        level: 35,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Darkness Emitting',
            },
        ],
    },
    {
        id: 'wolf-spider',
        name: 'Wolf Spider',
        image: {
            src: '/images/monsters/wolfspider.gif',
            alt: 'Wolf Spider',
        },
        level: 35,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'black-bull',
        name: 'Black Bull',
        image: {
            src: '/images/monsters/blackbull.gif',
            alt: 'Black Bull',
        },
        level: 36,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'nightfighter-36',
        name: 'Nightfighter',
        image: {
            src: '/images/monsters/nightfighter02.gif',
            alt: 'Nightfighter',
        },
        level: 36,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Darkness Emitting',
            },
        ],
    },
    {
        id: 'plated-spider',
        name: 'Plated Spider',
        image: {
            src: '/images/monsters/platedspider.gif',
            alt: 'Plated Spider',
        },
        level: 36,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'lightcatcher-spider',
        name: 'Lightcatcher Spider',
        image: {
            src: '/images/monsters/lightspider.gif',
            alt: 'Lightcatcher Spider',
        },
        level: 37,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'salamite-cutter-chieftain',
        name: 'Salamite Cutter Chieftain',
        image: {
            src: '/images/monsters/salcutchief.gif',
            alt: 'Salamite Cutter Chieftain',
        },
        level: 37,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'giant-bee',
        name: 'Giant Bee',
        image: {
            src: '/images/monsters/giantbee.gif',
            alt: 'Giant Bee',
        },
        level: 38,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'tizfolk-warrior',
        name: 'Tizfolk Warrior',
        image: {
            src: '/images/monsters/tizwarrior.gif',
            alt: 'Tizfolk Warrior',
        },
        level: 38,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'tornadodevil',
        name: 'Tornadodevil',
        image: {
            src: '/images/monsters/tornadodevil.gif',
            alt: 'Tornadodevil',
        },
        level: 38,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'salamite-poker-chieftain',
        name: 'Salamite Poker Chieftain',
        image: {
            src: '/images/monsters/salpokechief.gif',
            alt: 'Salamite Poker Chieftain',
        },
        level: 39,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'stinger-centipede',
        name: 'Stinger Centipede',
        image: {
            src: '/images/monsters/stingcentpede.gif',
            alt: 'Stinger Centipede',
        },
        level: 39,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Triple Target Attack',
            },
        ],
    },
    {
        id: 'djinni-of-darkness',
        name: 'Djinni of Darkness',
        image: {
            src: '/images/monsters/djinnidark.gif',
            alt: 'Djinni of Darkness',
        },
        level: 40,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Djinni Wish',
                color: 'white',
            },
        ],
        traits: [
            {
                name: 'Darkness Emitting',
            },
        ],
    },
    {
        id: 'gateguard',
        name: 'Gateguard',
        image: {
            src: '/images/monsters/gateguard.gif',
            alt: 'Gateguard',
        },
        level: 40,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'magma-spider',
        name: 'Magma Spider',
        image: {
            src: '/images/monsters/magmaspider.gif',
            alt: 'Magma Spider',
        },
        level: 40,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'mother-of-all-rabbits',
        name: 'Mother of All Rabbits',
        image: {
            src: '/images/monsters/motherrabbit.gif',
            alt: 'Mother of All Rabbits',
        },
        level: 40,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        summons: [
            {
                name: 'Crazy Caverabbit',
                color: 'green',
            },
        ],
    },
    {
        id: 'salamite-mystic',
        name: 'Salamite Mystic',
        image: {
            src: '/images/monsters/salmystic.gif',
            alt: 'Salamite Mystic',
        },
        level: 40,
        attitudes: ['cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'twisted-servant',
        name: 'Twisted Servant',
        image: {
            src: '/images/monsters/twistservant.gif',
            alt: 'Twisted Servant',
        },
        level: 40,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'dirty-imp',
        name: 'Dirty Imp',
        image: {
            src: '/images/monsters/dirtyimp.gif',
            alt: 'Dirty Imp',
        },
        level: 41,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'moss-spider',
        name: 'Moss Spider',
        image: {
            src: '/images/monsters/mossspider.gif',
            alt: 'Moss Spider',
        },
        level: 41,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'bloodfreezer-centipede',
        name: 'Bloodfreezer Centipede',
        image: {
            src: '/images/monsters/bldfrzcentpede.gif',
            alt: 'Bloodfreezer Centipede',
        },
        level: 42,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Triple Target Attack',
            },
            {
                name: 'Spider Poison I',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'skeleton-mage',
        name: 'Skeleton Mage',
        image: {
            src: '/images/monsters/skelmage.gif',
            alt: 'Skeleton Mage',
        },
        level: 42,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Nightmare',
                color: 'green',
            },
            {
                name: 'Firebolt',
                color: 'red',
            },
            {
                name: 'Poison Cloud',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'tizfolk-swordmaster',
        name: 'Tizfolk Swordmaster',
        image: {
            src: '/images/monsters/tizsword.gif',
            alt: 'Tizfolk Swordmaster',
        },
        level: 42,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'bekarton-the-gatelord',
        name: 'Bekarton the Gatelord',
        image: {
            src: '/images/monsters/bekarton.gif',
            alt: 'Bekarton the Gatelord',
        },
        level: 43,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'charcoal-imp',
        name: 'Charcoal Imp',
        image: {
            src: '/images/monsters/charcoalimp.gif',
            alt: 'Charcoal Imp',
        },
        level: 43,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'mountain-bear',
        name: 'Mountain Bear',
        image: {
            src: '/images/monsters/mountbear.gif',
            alt: 'Mountain Bear',
        },
        level: 43,
        attitudes: ['peaceful', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'barkthing',
        name: 'Barkthing',
        image: {
            src: '/images/monsters/barkthing.gif',
            alt: 'Barkthing',
        },
        level: 44,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'deformed-servant',
        name: 'Deformed Servant',
        image: {
            src: '/images/monsters/deformservant.gif',
            alt: 'Deformed Servant',
        },
        level: 44,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'tizfolk-archer',
        name: 'Tizfolk Archer',
        image: {
            src: '/images/monsters/tizarcher.gif',
            alt: 'Tizfolk Archer',
        },
        level: 44,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['close', 'far'],
    },
    {
        id: 'tizfolk-spiritualist',
        name: 'Tizfolk Spiritualist',
        image: {
            src: '/images/monsters/tizspirit.gif',
            alt: 'Tizfolk Spiritualist',
        },
        level: 44,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Cure Wounds',
                color: 'green',
            },
        ],
    },
    {
        id: 'animated-book',
        name: 'Animated Book',
        image: {
            src: '/images/monsters/animatedbook.gif',
            alt: 'Animated Book',
        },
        level: 45,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'stillblood-imp',
        name: 'Stillblood Imp',
        image: {
            src: '/images/monsters/stillbloodimp.gif',
            alt: 'Stillblood Imp',
        },
        level: 45,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'tree-spirit',
        name: 'Tree Spirit',
        image: {
            src: '/images/monsters/treespirit.gif',
            alt: 'Tree Spirit',
        },
        level: 45,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Stealth Mode',
            },
        ],
    },
    {
        id: 'tuskian',
        name: 'Tuskian',
        image: {
            src: '/images/monsters/tuskian.gif',
            alt: 'Tuskian',
        },
        level: 45,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
    },
    {
        id: 'undead-champion',
        name: 'Undead Champion',
        image: {
            src: '/images/monsters/undeadchamp.gif',
            alt: 'Undead Champion',
        },
        level: 45,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'reader',
        name: 'Reader',
        image: {
            src: '/images/monsters/reader.gif',
            alt: 'Reader',
        },
        level: 46,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        summons: [
            {
                name: 'Animated Book',
                color: 'blue',
            },
        ],
    },
    {
        id: 'tizfolk-magic-user',
        name: 'Tizfolk Magic-user',
        image: {
            src: '/images/monsters/tizmagic.gif',
            alt: 'Tizfolk Magic-user',
        },
        level: 46,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Lightning Zap',
                color: 'blue',
            },
        ],
    },
    {
        id: 'aggressive-mountain-bear',
        name: 'Aggressive Mountain Bear',
        image: {
            src: '/images/monsters/aggmountbear.gif',
            alt: 'Aggressive Mountain Bear',
        },
        level: 47,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'forestrunner-spider',
        name: 'Forestrunner Spider',
        image: {
            src: '/images/monsters/runnerspider.gif',
            alt: 'Forestrunner Spider',
        },
        level: 48,
        attitudes: ['hostile'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Spider Poison II',
            },
        ],
    },
    {
        id: 'tizfolk-assassin',
        name: 'Tizfolk Assassin',
        image: {
            src: '/images/monsters/tizassassin.gif',
            alt: 'Tizfolk Assassin',
        },
        level: 49,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Stealth Mode',
            },
        ],
    },
    {
        id: 'render-of-flesh',
        name: 'Render of Flesh',
        image: {
            src: '/images/monsters/renderflesh.gif',
            alt: 'Render of Flesh',
        },
        level: 50,
        attitudes: ['slayer'],
        attackRanges: ['very-close'],
        traits: [
            {
                name: 'Double Target Attack',
            },
        ],
    },
    {
        id: 'forest-guardian',
        name: 'Forest Guardian',
        image: {
            src: '/images/monsters/forestguard.gif',
            alt: 'Forest Guardian',
        },
        level: 52,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'grassfurred-rat',
        name: 'Grassfurred Rat',
        image: {
            src: '/images/monsters/grassrat.gif',
            alt: 'Grassfurred Rat',
        },
        level: 53,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'agra-taratel',
        name: 'Agra Taratel',
        image: {
            src: '/images/monsters/agrataratel.gif',
            alt: 'Agra Taratel',
        },
        level: 54,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'bagarog',
        name: 'Bagarog',
        image: {
            src: '/images/monsters/bagarog.gif',
            alt: 'Bagarog',
        },
        level: 55,
        attitudes: ['hostile'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'skeleton-tie-destroyer',
        name: 'Skeleton Tie-destroyer',
        image: {
            src: '/images/monsters/skeltiedest.gif',
            alt: 'Skeleton Tie-destroyer',
        },
        level: 55,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['close', 'far'],
        eventOnly: true,
    },
    {
        id: 'treeclaw-hardam',
        name: 'Treeclaw Hardam',
        image: {
            src: '/images/monsters/treeclawhard.gif',
            alt: 'Treeclaw Hardam',
        },
        level: 55,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Cure Wounds',
                color: 'green',
            },
            {
                name: 'Protection from Red',
                color: 'white',
            },
            {
                name: 'Entangle',
                color: 'green',
            },
            {
                name: 'Wither',
                color: 'yellow',
            },
        ],
    },
    {
        id: 'treeclaw-margon',
        name: 'Treeclaw Margon',
        image: {
            src: '/images/monsters/treeclawmarg.gif',
            alt: 'Treeclaw Margon',
        },
        level: 55,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
    },
    {
        id: 'iri-taratel',
        name: 'Iri Taratel',
        image: {
            src: '/images/monsters/iritaratel.gif',
            alt: 'Iri Taratel',
        },
        level: 56,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Nightmare',
                color: 'green',
            },
            {
                name: 'Cure Wounds',
                color: 'green',
            },
        ],
    },
    {
        id: 'iwid-militia',
        name: 'Iwid Militia',
        image: {
            src: '/images/monsters/iwidmilitia.gif',
            alt: 'Iwid Militia',
        },
        level: 61,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'iwid-warrior',
        name: 'Iwid Warrior',
        image: {
            src: '/images/monsters/iwidwarrior.gif',
            alt: 'Iwid Warrior',
        },
        level: 64,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
    },
    {
        id: 'blaze',
        name: 'Blaze',
        image: {
            src: '/images/monsters/blaze.gif',
            alt: 'Blaze',
        },
        level: 65,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Flame Blast',
                color: 'red',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'iwid-wizard',
        name: 'Iwid Wizard',
        image: {
            src: '/images/monsters/iwidwizard.gif',
            alt: 'Iwid Wizard',
        },
        level: 69,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Lightning Zap',
                color: 'blue',
            },
            {
                name: 'Nightmare',
                color: 'green',
            },
        ],
        summons: [
            {
                name: 'Tornadodevil',
            },
        ],
    },
    {
        id: 'iwid-watchman',
        name: 'Iwid Watchman',
        image: {
            src: '/images/monsters/iwidwatchman.gif',
            alt: 'Iwid Watchman',
        },
        level: 71,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close'],
        casts: [
            {
                name: 'Lightning Zap',
                color: 'blue',
            },
        ],
    },
    {
        id: 'iwid-mage',
        name: 'Iwid Mage',
        image: {
            src: '/images/monsters/iwidmage.gif',
            alt: 'Iwid Mage',
        },
        level: 76,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Lightning',
                color: 'blue',
            },
            {
                name: 'Nightmare',
                color: 'green',
            },
        ],
    },
    {
        id: 'tarian-sentinel',
        name: 'Tarian Sentinel',
        image: {
            src: '/images/monsters/tariansentinel.gif',
            alt: 'Tarian Sentinel',
        },
        level: 85,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Cure Wounds',
                color: 'green',
            },
        ],
        traits: [
            {
                name: 'Darkness Emitting',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'fire-elemental',
        name: 'Fire Elemental',
        image: {
            src: '/images/monsters/fireelement.gif',
            alt: 'Fire Elemental',
        },
        level: 100,
        attitudes: ['hostile'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Flame Blast',
                color: 'red',
            },
            {
                name: 'Greater Flame',
                color: 'red',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'demonskin-observer',
        name: 'Demonskin Observer',
        image: {
            src: '/images/monsters/demonskin.gif',
            alt: 'Demonskin Observer',
        },
        level: 115,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Poison Cloud',
                color: 'yellow',
            },
            {
                name: 'Wither',
                color: 'yellow',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'master-tarian',
        name: 'Master Tarian',
        image: {
            src: '/images/monsters/mastertarian.gif',
            alt: 'Master Tarian',
        },
        level: 120,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close'],
        casts: [
            {
                name: 'Cure Wounds',
                color: 'green',
            },
        ],
        eventOnly: true,
    },
    {
        id: 'disciple-of-death',
        name: 'Disciple of Death',
        image: {
            src: '/images/monsters/disciple.gif',
            alt: 'Disciple of Death',
        },
        level: 125,
        attitudes: ['hostile', 'cooperative'],
        attackRanges: ['very-close', 'close', 'far'],
        casts: [
            {
                name: 'Wither',
                color: 'yellow',
            },
        ],
        eventOnly: true,
    },
];
