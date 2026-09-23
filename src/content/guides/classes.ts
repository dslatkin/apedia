import type { ClassTree } from '../../types';

export const classTree: ClassTree = {
    intro: "There are many classes to choose from in Whispers in Akarra. Not only that, but it's a good idea to keep a long list of them, handy from time to time. On this page are all the classes, along with their requirements and skills.",
    classes: [
        {
            id: 'mundane',
            name: 'Mundane',
            description:
                'All the people of Akarra begin their journey as commoners, living their lives in peace, performing everyday duties. The Mundane know a little of everything but need to specialize if they want to become more advanced in an art.',
            keySkills: ['Fighting I', 'Magic Use I', 'Dodge I'],
            requirements: [],
        },
        {
            id: 'fighter',
            name: 'Fighter',
            parent: 'mundane',
            description:
                'Fighters are people who have focused on brute force and weaponry to survive in the world. A Fighter relies on his or her arms and armor but will be able to learn more sophisticated tactics as they learn more skills.',
            keySkills: ['Fighting II', 'Armor Use I'],
            requirements: ['Fighting I'],
            exclusiveSkills: ['Fighting II', 'Toughness'],
        },
        {
            id: 'warrior',
            name: 'Warrior',
            parent: 'fighter',
            description:
                'Warriors were once brutal fighters but have inproved their skills and fight with more cunning and finesse. A trained Warrior is a fearsome foe in close combat.',
            requirements: ['Level 25', 'Toughness'],
        },
        {
            id: 'knight',
            name: 'Knight',
            parent: 'warrior',
            description:
                'Knights are expert warriors, wielding weapons and carrying heavy armors. Knights are also skilled at horseback fighting and have knowelde of leadership. Knights usually are, but not nessecarily, very nobile combatants.',
        },
        {
            id: 'paladin',
            name: 'Paladin',
            parent: 'knight',
            description:
                'Some knights choose to follow their faith and prey heavily to Benedek or Ambus, seeking out the divine part of the world. These knights become Paladins and are favoured with healing and celestial spells and skills.',
            keySkills: ['Cure Wounds'],
        },
        {
            id: 'commander',
            name: 'Commander',
            parent: 'knight',
            description:
                'A Commander is a knight of great eladership and tactical cunning. They enforce the abilities of all they lead by just showing great leadership and wisdom. Commanders are skilled in leading others in fellowships and other gatherings.',
        },
        {
            id: 'weapon-master',
            name: 'Weapon Master',
            parent: 'warrior',
            description:
                'A warrior who specializes in weapon combat becomes a Weapon Master. These are exceptional fighters, especially when they are wielding a weapon of choice.',
        },
        {
            id: 'ranger',
            name: 'Ranger',
            parent: 'weapon-master',
            description:
                'Rangers are weapon masters who prefer their bow and arrows above all other weapons. They are skilled foresters and know how to track and how to hunt. Their close connection with nature also allows them to use certain spells.',
            keySkills: ['Entangle'],
        },
        {
            id: 'sword-dancer',
            name: 'Sword-dancer',
            parent: 'weapon-master',
            description:
                'Weaponmasters who prefer agility and blades become Sword-dancers. These fighters are quick and dexterious, and are able to wield two weapons at once. Their favoured weapon is the sword.',
        },
        {
            id: 'executioner',
            name: 'Executioner',
            parent: 'weapon-master',
            description:
                'Those warriors who enjoy brute force the most turn into Executioners, always wielding two-handed weapons to destroy their enemies. Executioners have skills and tricks which are specialized in the purpose to deal a lot of damage.',
        },
        {
            id: 'thug',
            name: 'Thug',
            parent: 'warrior',
            description:
                'Some warriors fall off the noble path and choose to survive using cheap tricks and foul play. These become Thugs and learn to backstab, sneak, evade, and use other unorthodox methods of fighting.',
        },
        {
            id: 'highwayman',
            name: 'Highwayman',
            parent: 'thug',
        },
        {
            id: 'shadow',
            name: 'Shadow',
            parent: 'thug',
            description:
                "The Shadow has perfected the darker side of the warrior's path. Shadows are skilled at hiding in the shadows and attacking from behind. They also have knowledge of various poisons and venoms.",
        },
        {
            id: 'apprentice',
            name: 'Apprentice',
            parent: 'mundane',
            description:
                'A Mundane who has advanced to the stats of an Apprentice has taken the first step towards becoming a powerful Wizard. The Apprentice will have to give up some or his or her physical power in order to control the mystical energies of magic.',
            keySkills: ['Magic Arrow', 'Flare', 'Magic Use II'],
            requirements: ['Magic Use I'],
            exclusiveSkills: ['Lightning', 'Entangle', 'Flare'],
        },
        {
            id: 'wizard',
            name: 'Wizard',
            parent: 'apprentice',
            description:
                'Sooner or later the Apprentice will know enough of the magical arts to advance to the next tier, a Wizard. A Wizard has a wider range of spells and can use them more efficiently.',
            requirements: ['Level 25', 'Flare'],
        },
        {
            id: 'necromancer',
            name: 'Necromancer',
            parent: 'wizard',
            description:
                'Some Wizards choose to specialize in the darker arts of magic and choose to become a Necromancer. Necromancers have focused their power on controlling the dead and bringing them back to an unholy afterlife. They also use their powers to inflict unhealthy diseases and curses upon their victim.',
        },
        {
            id: 'lord-of-the-lich',
            name: 'Lord of the Lich',
            parent: 'necromancer',
            description:
                'The greatest Necromancers choose to become Lords, or Ladies, of their craft. These dark Wizards can not only summon minions from the dead, but they can also invoke the power of greater unholiness to cause destruction to those who oppose them.',
        },
        {
            id: 'black-reaper',
            name: 'Black Reaper',
            parent: 'necromancer',
            description:
                'Some Necromancers fall so deeply in their black magic that they are transforme into their own creation. A black reaper is a foul abomination who is half man, half wraith. The black reapers become ethereal and can move through walls and obstacles at the price of physical strength. The Black Reapers also looses most of the magical powers they knew during their human life.',
        },
        {
            id: 'mage',
            name: 'Mage',
            parent: 'wizard',
            description:
                'Some Wizards choose to continue their studies and advance to the status of a Mage. Mages know more spells than Wizards, of both elemental, enchantening, and summoning kinds.',
        },
        {
            id: 'sorcerer',
            name: 'Sorcerer',
            parent: 'mage',
            description:
                'When a Mage specializes in the enchanting and summoning crafts, he or she will become a Sorcerer or Sorceress. They have very powerful spells that can completely transform a creature or item. They also have the powers to create something out of nothing, using this for both good and evil.',
        },
        {
            id: 'elementalist',
            name: 'Elementalist',
            parent: 'mage',
            description:
                'The most forceful of all Wizards are elementalists. They have focused all their skills on creating as great phsyical powers as possible. An elementalist can create flamestorms, blizzards, and other means of destruction. Elementalists play with fire.',
        },
        {
            id: 'neophyte',
            name: 'Neophyte',
            parent: 'mundane',
            description:
                'Some Mundanes choose the path of faith and knowledge, seeking for find their spiritual guidance. These become Neophytes, who focus their knowledge on prayers, healing and protective spells, thinking more of others than themselves.',
            keySkills: ['Cure Wounds', 'Protection Spells'],
            requirements: ['Curse Resistance'],
            exclusiveSkills: ['Cure Wounds', 'Protection Spells'],
        },
        {
            id: 'cleric',
            name: 'Cleric',
            parent: 'neophyte',
            description:
                'As their skills improve, Neophytes will advance to the status of a Cleric. Clerics have learned more about the healing and protective powers and are able to use them to a greater extent.',
            exclusiveSkills: ['Cure Poison', 'Revitalize'],
        },
        {
            id: 'healer',
            name: 'Healer',
            parent: 'cleric',
            description:
                'A Healer has further improved his or her knowledge of the healing and restoring crafts. The healer has also found a path to reach higher divinity, and perhaps even a chance to reach clairvoyance.',
        },
        {
            id: 'priest',
            name: 'Priest',
            parent: 'healer',
            description:
                'This is the ultimate goal for those who once became Neophytes for religious purposes. A Priest is the greatest of the spiritual leaders and will guide the masses to come closer to Benedek or Ambus, whichever the Priest prefers.',
        },
        {
            id: 'restorer',
            name: 'Restorer',
            parent: 'healer',
            description:
                'Instead of seeking the ultimate faith, some Healers choose to continue helping others and become Restorers. These are men and woman who have specialized in healing and restoring the wounded, ill, or even killed people of Akarra.',
        },
        {
            id: 'naturalist',
            name: 'Naturalist',
            parent: 'cleric',
            description:
                'Some Clerics choose to find their answers in the woods, on the seas, or even the plains of the world. These become Naturalists and have a sense for the lives of animals and plants, which they use to perform good.',
        },
        {
            id: 'druid',
            name: 'Druid',
            parent: 'naturalist',
            description:
                'Naturalists who want to continue to specialize in the knowledge of the naturelife become Druids. Druids know how to understand, control, and invoke the powers of nature and use this to favor themselves and those they care for.',
        },
        {
            id: 'naturalist-unknown',
            name: 'Unknown',
            parent: 'naturalist',
        },
    ],
};
