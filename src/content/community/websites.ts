import type { WebsiteDirectory } from '$types';

export const websiteDirectory: WebsiteDirectory = {
    intro: 'Many of the shards still running have websites of their own. See the [Shards](/community/shards) page for those.',
    active: [
        {
            name: 'Akarra.com',
            url: 'http://akarra.com/',
            description:
                'Maintained by Luna, a veteran player, with an introduction to the game and its history, player guides, and news of the shards still running.',
        },
        {
            name: 'Whispers in Akarra Facebook Group',
            url: 'https://www.facebook.com/WhispersInAkarra',
            description:
                'Where former players keep in touch and share news about the game, including details for logging on to the shards.',
        },
        {
            name: 'Whispers in Akarra Wiki',
            url: 'https://whispers-in-akarra.fandom.com',
            description:
                'A fan wiki on Fandom with information about the game and a list of the websites and shards still active, drawing much of its content from this encyclopedia.',
        },
    ],
    inactive: [
        {
            name: 'Whispers In Akarra (archived)',
            url: 'https://web.archive.org/web/20030806043247/http://www.akarra.com:80/',
            description: "The game's own website while it was running.",
        },
        {
            name: 'Akarra Warped (dead link)',
            url: 'http://way.to/WiA',
            description:
                'A Whispers In Akarra fansite that also featured ideas for new items.',
        },
        {
            name: 'Akarra Shrine (archived)',
            url: 'https://web.archive.org/web/20060518061628/http://hometown.aol.co.uk:80/saltrockboarder/Akarrashrine.html',
            description:
                "A player's personal site about the game, hosted on AOL Hometown.",
        },
        {
            name: "Sorcerer's Site (dead link)",
            url: 'http://www.sorcerer.de/akarra/',
            description: 'A Whispers In Akarra fansite run by Sorcerer.',
        },
    ],
};
