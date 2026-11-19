import type { Shard } from '$types';

/** Every shard, in the order they opened. Play Today lists the running ones. */
export const shards: Shard[] = [
    {
        name: 'Project Phoenix',
        years: '2005–2006',
        description:
            'One of the first shards, run by Origon, Braiba and Talonz, who maintains this site, with its own client.',
    },
    {
        name: 'Akarrian Soul',
        years: '2005–2006',
        description:
            'Aquarits\'s shard from Brazil, with a new campaign, "Legacy of the Dragon", and new maps and sprites.',
    },
    {
        name: 'Akarrian Expansion',
        years: '2005–2010',
        description:
            "Apocalypse's shard, also called AkarraXP, which added new classes, skills, spells, sectors and guild houses. Its files are the basis of several later shards, including Akarra X2.",
    },
    {
        name: 'Emperium Xenos',
        years: '2005–2010',
        description:
            'Founded by Gorgorath, tbbw, Luna and Nazzy, with its own client and custom interfaces, and decisions made by a vote of its developers.',
    },
    {
        name: 'Akarra 2',
        years: '2006–2007',
        description:
            'A continuation of the game built on its full source code, presented as "Whispers in Akarra II" with a story set fifteen years later. It released two alpha versions in 2007.',
    },
    {
        name: 'Akarrian Rebirth',
        years: '2010–2011',
        description: 'A shard with every class unlocked.',
    },
    {
        name: 'Akarra: Millennium Edition',
        years: '2011',
        description:
            'A short-lived project started by ssdsp with a volunteer team.',
    },
    {
        name: 'Classic Akarra',
        years: '2011–2015',
        description:
            "Kingmarr's plain Akarra server, run while new content was developed behind the scenes.",
    },
    {
        name: "Gorgorath's server",
        years: '2012–2013',
        description:
            "A public server set up by Gorgorath, one of Emperium Xenos's founders.",
    },
    {
        name: 'iAkarra',
        years: '2013–2015',
        description:
            'A classic Alpha 1 server with small changes, run by two brothers who planned to merge the best of the older shards into it.',
    },
    {
        name: 'Mostly Vanilla',
        years: '2014 onward, currently offline',
        description:
            'PT6\'s "nearly vanilla" copy of the original game, first hosted "for nostalgic purposes" and published in 2022.',
    },
    {
        name: 'AkarraXP',
        years: '2015',
        description:
            "A revival of Apocalypse's Akarrian Expansion, with an updated client and new item and crafting lists.",
    },
    {
        name: 'AkarraXP Reborn',
        years: '2015–2016',
        description:
            "BudMan's rebalanced and revamped continuation of the 2015 revival.",
    },
    {
        name: 'AkarraXP Classic',
        years: '2016',
        description:
            "Spaz's continuation of the 2015 revival, which kept everyone's existing characters.",
    },
    {
        name: 'Akarra X2',
        years: '2018 to today',
        description:
            "Apocalypse's Akarrian Expansion with double experience and rebalanced classes, played in the browser since September 2026 with every old account kept.",
        running: {
            url: 'https://akarrax2.com/',
            discord: 'https://discord.gg/HHRRnGZ',
        },
    },
    {
        name: 'Whispers in Akarra X3',
        years: '2023–2025',
        description:
            "Dakota's one-person expansion of Apocalypse's server, with new classes, islands and guilds up to level 200.",
    },
    {
        name: 'Akarra Online',
        years: '2026 to today',
        description:
            "Steven's rebuild of the game on a new engine, played in the browser and on phones. Besides its main shard, it hosts older versions of the game side by side, including the original world, a hardcore version and Apocalypse's Akarrian Expansion.",
        running: {
            url: 'https://www.akarraonline.com/',
            discord: 'https://discord.gg/5rGnC4VQjq',
        },
    },
];

function shardLine({ name, years, description, running }: Shard): string {
    const title = running ? `[${name}](${running.url})` : name;
    const discord = running ? ` [Discord](${running.discord}).` : '';
    return `- **${title}** (${years}): ${description}${discord}`;
}

const contactNote =
    'Run a shard that is not listed here, or spotted a detail that needs fixing? [Contact me](/contact) and I will update the list.';

/** Fills the `<!-- shards -->` placeholder of a Markdown page with a list of shards. */
export function withShardList(body: string, list: Shard[]): string {
    return body.replace(
        '<!-- shards -->',
        `${list.map(shardLine).join('\n')}\n\n${contactNote}`,
    );
}
