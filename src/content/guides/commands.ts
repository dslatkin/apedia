import type { CommandReference } from '../../types';

export const commandReference: CommandReference = {
    intro: `WiA has many commands and shortcut keys at your disposal. Every command is preceded with a "/" forward slash. Below is a list of every command and shortcut.

Please note that you do not have to type "\\<" and "\\>" around the command variable.

Commands marked as removed have been completely removed from the game.`,
    groups: [
        {
            id: 'general',
            title: 'General Commands',
            commands: [
                {
                    name: 'tell',
                    aliases: ['t'],
                    args: ['<NAME>', '<MESSAGE>'],
                    description: 'Sends a private message to another player.',
                },
                {
                    name: 'ooc',
                    args: ['<MESSAGE>'],
                    description:
                        'Broadcasts a normal out of character message to all connected players.',
                    removed: true,
                },
                {
                    name: 'trade',
                    args: ['<MESSAGE>'],
                    description:
                        'Broadcasts a message used for trading to all connected players.',
                    removed: true,
                },
                {
                    name: 'emote',
                    aliases: ['e', 'me'],
                    args: ['<MESSAGE>'],
                    description:
                        'Shows an action of your character through the message box.\n\nIE - \\* Sexy Talonz is very tired from all this walking.',
                },
                {
                    name: 'respawn',
                    description:
                        'Respawns your dead character to the last touched obelisk.',
                },
                {
                    name: 'rest',
                    description:
                        'Rests your character to regain HP, MP, and/or SP.',
                },
                {
                    name: 'afk',
                    args: ['<REASON>'],
                    description:
                        'Sets your character to "Away From Keyboard" status. A reason is optional.',
                },
                {
                    name: 'getafk',
                    args: ['<NAME>'],
                    description: "Retrieves a player's reason for being AFK.",
                },
                {
                    name: 'getquests',
                    description:
                        'Displays the list of quests you have completed.',
                },
                {
                    name: 'finger',
                    args: ['<NAME>'],
                    description:
                        'Reveals information about a player such as their level, email address, etc. It also displays any associates (other characters) related to that particular player.',
                },
                {
                    name: 'pklist',
                    description:
                        'Lists all players that you have commited a crime against.',
                },
                {
                    name: 'lock',
                    args: ['level | email | position | stats'],
                    description:
                        'Hides your level, email address, position, or statistics from other players.',
                },
                {
                    name: 'unlock',
                    args: ['level | email | position | stats'],
                    description:
                        'Reveals your level, email address, position, or statistics to other players.',
                },
                {
                    name: 'rebirth',
                    args: ['<DEITY>', '<COLOR>'],
                    description:
                        "This command will change your character's deity and soul color, but you are only allowed to use it once. In order to use it you must leave any fellowship you may have joined and you must unequip all your items. You will lose all of the skills you've gained, but you can regain them again at a later time. It also allows you to redistribute your attribute points without losing any experience.\n\nDEITY VALUES: 0 = Gifted, 1 = Shining\n\nCOLOR VALUES: 0 = White, 1 = Red, 2 = Green, 3 = Blue, 4 = Yellow",
                    removed: true,
                },
                {
                    name: 'attr',
                    args: ['<STAT>', '<AMOUNT>'],
                    description:
                        'Used to easily spend attribute points (mulitple, if desired) to your stats. Stat values are STR, CON, AGI, INT, and FTH.',
                },
                {
                    name: 'friend',
                    args: ['<NAME>', '<0/1>'],
                    description:
                        'Used to easily add or remove people from your friends list. 0 = remove, and 1 = add.',
                },
                {
                    name: 'ignore',
                    args: ['<NAME>', '<0/1>'],
                    description:
                        'Used to easily add or remove people from your ignore list. 0 = remove, and 1 = add.',
                },
            ],
        },
        {
            id: 'fellowship',
            title: 'Fellowship Commands',
            commands: [
                {
                    name: 'f',
                    aliases: ['fellowship'],
                    args: ['<MESSAGE>'],
                    description: 'Sends a message to the fellowship.',
                },
                {
                    name: 'fcreate',
                    args: ['<FELLOWSHIPNAME>'],
                    description: 'Creates a new fellowship.',
                },
                {
                    name: 'fjoin',
                    args: ['<FELLOWSHIPNAME>'],
                    description: 'Joins an existing fellowship.',
                },
                {
                    name: 'fleave',
                    description: 'Leaves a fellowship.',
                },
            ],
        },
        {
            id: 'guild',
            title: 'Guild Commands',
            commands: [
                {
                    name: 'g',
                    args: ['<MESSAGE>'],
                    description: 'Sends a message to the guild.',
                },
                {
                    name: 'gcreate',
                    args: ['<GUILDNAME>', '<GUILDTAG>', '<COLOR>'],
                    description:
                        "Creates a new guild, where the guildname is your new guild's name, guild tag is your guild's identification placed next to your character name, and color is the color of that tag. The guildtag can contain up to 4 characters in length.\n\n1 = Red, 2 = Green, 3 = Yellow, 4 = Blue, 5 = Purple, 6 = Cyan, 7 = White,\n\n8 = Orange, 9 = Gray",
                },
                {
                    name: 'gjoin',
                    args: ['<GUILDNAME>'],
                    description: "Joins a guild's pending list.",
                },
                {
                    name: 'gleave',
                    description: "Leaves a guild or a guild's pending list.",
                },
                {
                    name: 'gtag',
                    args: ['<GUILDTAG>'],
                    description: 'Displays the name of the guild.',
                },
                {
                    name: 'glist',
                    args: ['<GUILDNAME>'],
                    description: 'Lists all members of a guild.',
                },
                {
                    name: 'gpending',
                    description:
                        'Lists all pending characters in the guild you own.',
                },
                {
                    name: 'ginvite',
                    args: ['<PLAYERNAME>'],
                    description:
                        'Invites a pending character to become a member of your guild.',
                },
                {
                    name: 'gkick',
                    args: ['<PLAYERNAME>'],
                    description: 'Removes a member from your guild.',
                },
                {
                    name: 'gpromote',
                    args: ['<PLAYERNAME>'],
                    description:
                        'Promotes a member of your guild to "leader" status.',
                },
                {
                    name: 'gdlist',
                    description:
                        "Lists your current clan's diplomacy to the other clans.",
                },
                {
                    name: 'gdiplomacy',
                    args: ['<CLAN>', '<0/1/2>'],
                    description:
                        "Changes your clan's diplomacy towards another clan. 0 = ally, 1 = neutral, and 2 = hostile. This command costs 5sc and only clan leaders have the ability to use it.",
                },
            ],
        },
    ],
    shortcuts: [
        {
            keys: ['F1'],
            description: 'Displays the Help menu.',
        },
        {
            keys: ['F2'],
            description: 'Displays the Character menu.',
        },
        {
            keys: ['F3'],
            description: 'Displays the Inventory menu.',
        },
        {
            keys: ['F4'],
            description: 'Displays the Skills menu.',
        },
        {
            keys: ['F5'],
            description: 'Displays the Quests menu.',
        },
        {
            keys: ['F6'],
            description: 'Displays the Maps menu.',
        },
        {
            keys: ['F7'],
            description: 'Displays the Options menu.',
        },
        {
            keys: ['F8'],
            description: 'Displays the People menu.',
        },
        {
            keys: ['F9'],
            description: 'Displays the Fellowship menu.',
        },
        {
            keys: ['F10'],
            description: 'Displays the Guild menu.',
        },
        {
            keys: ['F12'],
            description: 'Takes a screenshot.',
        },
        {
            keys: ['ESC'],
            description: 'Quits the game.',
        },
        {
            keys: ['Tab'],
            description: 'Displays the active skill list.',
        },
        {
            keys: ['CTRL', '1, 2, or 3'],
            description: 'Switches between the active skill lists.',
        },
        {
            keys: ['CTRL', 'CLICK'],
            description: 'Look',
        },
        {
            keys: ['CTRL', 'U'],
            description: 'Use / Open',
        },
        {
            keys: ['CTRL', 'P'],
            description: 'Pick Up',
        },
        {
            keys: ['CTRL', 'E'],
            description: 'Enter',
        },
        {
            keys: ['CTRL', 'A'],
            description: 'Attack Target',
        },
        {
            keys: ['CTRL', 'S'],
            description: 'Uses an actively selected spell or skill',
        },
        {
            keys: ['CTRL', 'F'],
            description: 'Follow Target',
        },
        {
            keys: ['CTRL', 'T'],
            description: 'Trade with Target',
        },
        {
            keys: ['CTRL', 'R'],
            description: 'Rest',
        },
        {
            keys: ['Numpad 1'],
            description: 'Move Southwest',
        },
        {
            keys: ['Numpad 2'],
            description: 'Move South',
        },
        {
            keys: ['Numpad 3'],
            description: 'Move Southeast',
        },
        {
            keys: ['Numpad 4'],
            description: 'Move West',
        },
        {
            keys: ['Numpad 5'],
            description: 'Stop',
        },
        {
            keys: ['Numpad 6'],
            description: 'Move East',
        },
        {
            keys: ['Numpad 7'],
            description: 'Move Northwest',
        },
        {
            keys: ['Numpad 8'],
            description: 'Move North',
        },
        {
            keys: ['Numpad 9'],
            description: 'Move Northeast',
        },
    ],
};
