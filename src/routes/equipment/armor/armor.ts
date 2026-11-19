import type { Armor } from '$types';

export const armor: Armor[] = [
    {
        id: 'painters-beret',
        name: "Painter's Beret",
        images: [
            {
                src: '/images/armor/head/painterberet.gif',
                alt: "Painter's Beret",
            },
        ],
        unique: true,
        effects: ['+10 Attack Rating'],
        requirements: {
            level: 20,
        },
        slot: 'head',
        armorClass: 0.0,
        damageReduction: 0.0,
        staminaCost: 0.2,
    },
    {
        id: 'cap',
        name: 'Cap',
        images: [
            {
                src: '/images/armor/head/cap.gif',
                alt: 'Cap',
            },
        ],
        effects: [],
        requirements: {
            strength: 18,
            agility: 20,
        },
        slot: 'head',
        armorClass: 0.6,
        damageReduction: 0.0,
        staminaCost: 0.0,
    },
    {
        id: 'turtle-helm',
        name: 'Turtle Helm',
        images: [
            {
                src: '/images/armor/head/turtlehelm.gif',
                alt: 'Turtle Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 21,
            soulColor: 'green',
        },
        slot: 'head',
        armorClass: 0.6,
        damageReduction: 0.2,
        staminaCost: 0.1,
    },
    {
        id: 'feathercap',
        name: 'Feathercap',
        images: [
            {
                src: '/images/armor/head/feathercap.gif',
                alt: 'Feathercap',
            },
        ],
        effects: [],
        requirements: {
            strength: 21,
            agility: 25,
        },
        slot: 'head',
        armorClass: 1.2,
        damageReduction: 0.0,
        staminaCost: 0.1,
    },
    {
        id: 'leather-cap',
        name: 'Leather Cap',
        images: [
            {
                src: '/images/armor/head/leathercap.gif',
                alt: 'Leather Cap',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 32,
        },
        slot: 'head',
        armorClass: 2.0,
        damageReduction: 0.1,
        staminaCost: 0.1,
    },
    {
        id: 'open-iron-helm',
        name: 'Open Iron Helm',
        images: [
            {
                src: '/images/armor/head/ironhelm.gif',
                alt: 'Open Iron Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 49,
            agility: 35,
        },
        slot: 'head',
        armorClass: 2.0,
        damageReduction: 0.3,
        staminaCost: 0.3,
    },
    {
        id: 'light-feathercap',
        name: 'Light Feathercap',
        images: [
            {
                src: '/images/armor/head/lightfeathercap.gif',
                alt: 'Light Feathercap',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'head',
        armorClass: 3.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'lion-helm',
        name: 'Lion Helm',
        images: [
            {
                src: '/images/armor/head/lionhelm.gif',
                alt: 'Lion Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'head',
        armorClass: 3.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'steel-barbute',
        name: 'Steel Barbute',
        images: [
            {
                src: '/images/armor/head/steelbarbute.gif',
                alt: 'Steel Barbute',
            },
        ],
        effects: [],
        requirements: {
            strength: 75,
            agility: 50,
        },
        slot: 'head',
        armorClass: 3.5,
        damageReduction: 0.5,
        staminaCost: 0.5,
    },
    {
        id: 'fine-feathercap-blue',
        name: 'Fine Feathercap (blue)',
        images: [
            {
                src: '/images/armor/head/finefeathercapb.gif',
                alt: 'Fine Feathercap (blue)',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
            soulColor: 'blue',
        },
        slot: 'head',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'fine-feathercap-green',
        name: 'Fine Feathercap (green)',
        images: [
            {
                src: '/images/armor/head/finefeathercapg.gif',
                alt: 'Fine Feathercap (green)',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
            soulColor: 'green',
        },
        slot: 'head',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'fine-feathercap-red',
        name: 'Fine Feathercap (red)',
        images: [
            {
                src: '/images/armor/head/finefeathercapr.gif',
                alt: 'Fine Feathercap (red)',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
            soulColor: 'red',
        },
        slot: 'head',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'fine-feathercap-white',
        name: 'Fine Feathercap (white)',
        images: [
            {
                src: '/images/armor/head/finefeathercapw.gif',
                alt: 'Fine Feathercap (white)',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
            soulColor: 'white',
        },
        slot: 'head',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'fine-feathercap-yellow',
        name: 'Fine Feathercap (yellow)',
        images: [
            {
                src: '/images/armor/head/finefeathercapy.gif',
                alt: 'Fine Feathercap (yellow)',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
            soulColor: 'yellow',
        },
        slot: 'head',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'leather-helm',
        name: 'Leather Helm',
        images: [
            {
                src: '/images/armor/head/leatherhelm.gif',
                alt: 'Leather Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 40,
            agility: 58,
        },
        slot: 'head',
        armorClass: 5.0,
        damageReduction: 0.2,
        staminaCost: 0.3,
    },
    {
        id: 'morion-helmet',
        name: 'Morion Helmet',
        images: [
            {
                src: '/images/armor/head/morionhelmet.gif',
                alt: 'Morion Helmet',
            },
        ],
        effects: [],
        requirements: {
            strength: 100,
            agility: 65,
        },
        slot: 'head',
        armorClass: 5.0,
        damageReduction: 0.8,
        staminaCost: 0.8,
    },
    {
        id: 'studded-leather-helm',
        name: 'Studded Leather Helm',
        images: [
            {
                src: '/images/armor/head/stdleatherhelm.gif',
                alt: 'Studded Leather Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 45,
            agility: 66,
        },
        slot: 'head',
        armorClass: 6.0,
        damageReduction: 0.2,
        staminaCost: 0.3,
    },
    {
        id: 'bear-helm',
        name: 'Bear Helm',
        images: [
            {
                src: '/images/armor/head/bearhelm.gif',
                alt: 'Bear Helm',
            },
        ],
        effects: [],
        requirements: {
            strength: 50,
            agility: 75,
        },
        slot: 'head',
        armorClass: 7.0,
        damageReduction: 0.3,
        staminaCost: 0.3,
    },
    {
        id: 'gladiator-mask',
        name: 'Gladiator Mask',
        images: [
            {
                src: '/images/armor/head/gladiatormask.gif',
                alt: 'Gladiator Mask',
            },
        ],
        effects: [],
        requirements: {
            strength: 70,
            agility: 109,
        },
        slot: 'head',
        armorClass: 11.0,
        damageReduction: 0.4,
        staminaCost: 0.6,
    },
    {
        id: 'common-clothes',
        name: 'Common Clothes',
        images: [
            {
                src: '/images/armor/body/comclothesa.gif',
                alt: 'Common Clothes (a)',
            },
            {
                src: '/images/armor/body/comclothesb.gif',
                alt: 'Common Clothes (b)',
            },
            {
                src: '/images/armor/body/comclothesc.gif',
                alt: 'Common Clothes (c)',
            },
            {
                src: '/images/armor/body/comclothesd.gif',
                alt: 'Common Clothes (d)',
            },
            {
                src: '/images/armor/body/comclothese.gif',
                alt: 'Common Clothes (e)',
            },
            {
                src: '/images/armor/body/comclothesf.gif',
                alt: 'Common Clothes (f)',
            },
            {
                src: '/images/armor/body/comclothesg.gif',
                alt: 'Common Clothes (g)',
            },
            {
                src: '/images/armor/body/comclothesh.gif',
                alt: 'Common Clothes (h)',
            },
            {
                src: '/images/armor/body/comclothesi.gif',
                alt: 'Common Clothes (i)',
            },
            {
                src: '/images/armor/body/comclothesj.gif',
                alt: 'Common Clothes (j)',
            },
        ],
        effects: [],
        requirements: {},
        slot: 'body',
        armorClass: 0.2,
        damageReduction: 0.0,
        staminaCost: 0.1,
    },
    {
        id: 'exclusive-clothes',
        name: 'Exclusive Clothes',
        images: [
            {
                src: '/images/armor/body/excclothesa.gif',
                alt: 'Exclusive Clothes (a)',
            },
            {
                src: '/images/armor/body/excclothesb.gif',
                alt: 'Exclusive Clothes (b)',
            },
            {
                src: '/images/armor/body/excclothesc.gif',
                alt: 'Exclusive Clothes (c)',
            },
            {
                src: '/images/armor/body/excclothesd.gif',
                alt: 'Exclusive Clothes (d)',
            },
            {
                src: '/images/armor/body/excclothese.gif',
                alt: 'Exclusive Clothes (e)',
            },
            {
                src: '/images/armor/body/excclothesf.gif',
                alt: 'Exclusive Clothes (f)',
            },
            {
                src: '/images/armor/body/excclothesg.gif',
                alt: 'Exclusive Clothes (g)',
            },
            {
                src: '/images/armor/body/excclothesh.gif',
                alt: 'Exclusive Clothes (h)',
            },
            {
                src: '/images/armor/body/excclothesi.gif',
                alt: 'Exclusive Clothes (i)',
            },
            {
                src: '/images/armor/body/excclothesj.gif',
                alt: 'Exclusive Clothes (j)',
            },
        ],
        effects: [],
        requirements: {},
        slot: 'body',
        armorClass: 0.2,
        damageReduction: 0.0,
        staminaCost: 0.1,
    },
    {
        id: 'thick-fur-clothes',
        name: 'Thick Fur Clothes',
        images: [
            {
                src: '/images/armor/body/thkfurclothes.gif',
                alt: 'Thick Fur Clothes',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 21,
        },
        slot: 'body',
        armorClass: 5.0,
        damageReduction: 0.6,
        staminaCost: 0.6,
    },
    {
        id: 'fur-clothes',
        name: 'Fur Clothes',
        images: [
            {
                src: '/images/armor/body/furclothes.gif',
                alt: 'Fur Clothes',
            },
        ],
        effects: [],
        requirements: {
            strength: 18,
            agility: 20,
        },
        slot: 'body',
        armorClass: 6.8,
        damageReduction: 0.5,
        staminaCost: 0.2,
    },
    {
        id: 'broken-leather-armor',
        name: 'Broken Leather Armor',
        images: [
            {
                src: '/images/armor/body/brklthrarmor.gif',
                alt: 'Broken Leather Armor',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'body',
        armorClass: 8.8,
        damageReduction: 0.5,
        staminaCost: 1.0,
    },
    {
        id: 'white-fur-cloak',
        name: 'White Fur Cloak',
        images: [
            {
                src: '/images/armor/body/whtfurcloak.gif',
                alt: 'White Fur Cloak',
            },
        ],
        effects: [],
        requirements: {
            strength: 21,
            agility: 25,
            soulColor: 'white',
        },
        slot: 'body',
        armorClass: 9.0,
        damageReduction: 0.5,
        staminaCost: 0.4,
    },
    {
        id: 'rusty-chainmail',
        name: 'Rusty Chainmail',
        images: [
            {
                src: '/images/armor/body/rustchainmail.gif',
                alt: 'Rusty Chainmail',
            },
        ],
        effects: [],
        requirements: {
            strength: 58,
            agility: 40,
        },
        slot: 'body',
        armorClass: 10.8,
        damageReduction: 1.5,
        staminaCost: 2.5,
    },
    {
        id: 'broken-studded-leather-armor',
        name: 'Broken Studded Leather Armor',
        images: [
            {
                src: '/images/armor/body/brkstdlthrarmor.gif',
                alt: 'Broken Studded Leather Armor',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
        },
        slot: 'body',
        armorClass: 11.0,
        damageReduction: 0.6,
        staminaCost: 1.4,
    },
    {
        id: 'lion-armor',
        name: 'Lion Armor',
        images: [
            {
                src: '/images/armor/body/lionarmor.gif',
                alt: 'Lion Armor',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 32,
        },
        slot: 'body',
        armorClass: 18.0,
        damageReduction: 1.2,
        staminaCost: 0.7,
    },
    {
        id: 'nagged-superior-chainmail',
        name: 'Nagged Superior Chainmail',
        images: [
            {
                src: '/images/armor/body/nagsupchainmail.gif',
                alt: 'Nagged Superior Chainmail',
            },
        ],
        effects: [],
        requirements: {
            strength: 100,
            agility: 65,
        },
        slot: 'body',
        armorClass: 19.5,
        damageReduction: 2.7,
        staminaCost: 5.0,
    },
    {
        id: 'travellers-outfit',
        name: "Traveller's Outfit",
        images: [
            {
                src: '/images/armor/body/traveloutfit.gif',
                alt: "Traveller's Outfit",
            },
        ],
        effects: [],
        requirements: {
            agility: 33,
            intelligence: 73,
        },
        slot: 'body',
        armorClass: 20.0,
        damageReduction: 0.9,
        staminaCost: 1.5,
    },
    {
        id: 'chainmail',
        name: 'Chainmail',
        images: [
            {
                src: '/images/armor/body/chainmail.gif',
                alt: 'Chainmail',
            },
        ],
        effects: [],
        requirements: {
            strength: 58,
            agility: 40,
        },
        slot: 'body',
        armorClass: 20.8,
        damageReduction: 4.2,
        staminaCost: 2.5,
    },
    {
        id: 'demonhide-armor',
        name: 'Demonhide Armor',
        images: [
            {
                src: '/images/armor/body/demonarmor.gif',
                alt: 'Demonhide Armor',
            },
        ],
        effects: ['+2 Maximum Damage', '-20 Health Points'],
        requirements: {
            strength: 83,
            agility: 55,
            faith: 30,
        },
        slot: 'body',
        armorClass: 22.0,
        damageReduction: 3.4,
        staminaCost: 4.0,
    },
    {
        id: 'leather-armor',
        name: 'Leather Armor',
        images: [
            {
                src: '/images/armor/body/leatherarmor.gif',
                alt: 'Leather Armor',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'body',
        armorClass: 26.0,
        damageReduction: 1.7,
        staminaCost: 1.0,
    },
    {
        id: 'spell-casters-outfit',
        name: "Spell-caster's Outfit",
        images: [
            {
                src: '/images/armor/body/spelloutfit.gif',
                alt: "Spell-caster's Outfit",
            },
        ],
        effects: [],
        requirements: {
            agility: 45,
            intelligence: 115,
        },
        slot: 'body',
        armorClass: 32.0,
        damageReduction: 1.5,
        staminaCost: 2.5,
    },
    {
        id: 'fire-makers-outfit',
        name: "Fire-maker's Outfit",
        images: [
            {
                src: '/images/armor/body/firemkoutfit.gif',
                alt: "Fire-maker's Outfit",
            },
        ],
        effects: ['+10 Resistance vs Red'],
        requirements: {
            agility: 45,
            intelligence: 115,
            faith: 45,
        },
        slot: 'body',
        armorClass: 32.0,
        damageReduction: 1.5,
        staminaCost: 2.5,
    },
    {
        id: 'wind-makers-outfit',
        name: "Wind-maker's Outfit",
        images: [
            {
                src: '/images/armor/body/windmkoutfit.gif',
                alt: "Wind-maker's Outfit",
            },
        ],
        effects: ['+10 Resistance vs Blue'],
        requirements: {
            agility: 45,
            intelligence: 115,
            faith: 45,
        },
        slot: 'body',
        armorClass: 32.0,
        damageReduction: 1.5,
        staminaCost: 2.5,
    },
    {
        id: 'studded-leather-armor',
        name: 'Studded Leather Armor',
        images: [
            {
                src: '/images/armor/body/studlthrarmor.gif',
                alt: 'Studded Leather Armor',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
        },
        slot: 'body',
        armorClass: 34.0,
        damageReduction: 2.2,
        staminaCost: 1.4,
    },
    {
        id: 'apprentices-outfit',
        name: "Apprentice's Outfit",
        images: [
            {
                src: '/images/armor/body/apprenticeoutfit.gif',
                alt: "Apprentice's Outfit",
            },
        ],
        effects: ['+5 Resistance vs Red', '+5 Resistance vs Blue'],
        requirements: {
            agility: 48,
            intelligence: 125,
            faith: 50,
        },
        slot: 'body',
        armorClass: 35.0,
        damageReduction: 1.6,
        staminaCost: 2.8,
    },
    {
        id: 'superior-chainmail',
        name: 'Superior Chainmail',
        images: [
            {
                src: '/images/armor/body/supchainmail.gif',
                alt: 'Superior Chainmail',
            },
        ],
        effects: [],
        requirements: {
            strength: 100,
            agility: 65,
        },
        slot: 'body',
        armorClass: 39.5,
        damageReduction: 8.2,
        staminaCost: 5.0,
    },
    {
        id: 'superior-chainmail-of-health',
        name: 'Superior Chainmail of Health',
        images: [
            {
                src: '/images/armor/body/chainhealth.gif',
                alt: 'Superior Chainmail of Health',
            },
        ],
        effects: ['+20 Health Points'],
        requirements: {
            strength: 100,
            agility: 65,
            faith: 30,
        },
        slot: 'body',
        armorClass: 39.5,
        damageReduction: 8.2,
        staminaCost: 5.0,
    },
    {
        id: 'leather-gloves',
        name: 'Leather Gloves',
        images: [
            {
                src: '/images/armor/hands/leathergloves.gif',
                alt: 'Leather Gloves',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 32,
        },
        slot: 'hands',
        armorClass: 2.0,
        damageReduction: 0.1,
        staminaCost: 0.1,
    },
    {
        id: 'iron-chaingloves',
        name: 'Iron Chaingloves',
        images: [
            {
                src: '/images/armor/hands/ironchgloves.gif',
                alt: 'Iron Chaingloves',
            },
        ],
        effects: [],
        requirements: {
            strength: 49,
            agility: 35,
        },
        slot: 'hands',
        armorClass: 2.0,
        damageReduction: 0.3,
        staminaCost: 0.3,
    },
    {
        id: 'studded-leather-gloves',
        name: 'Studded Leather Gloves',
        images: [
            {
                src: '/images/armor/hands/stdlthrgloves.gif',
                alt: 'Studded Leather Gloves',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'hands',
        armorClass: 3.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'greenscale-gloves',
        name: 'Greenscale Gloves',
        images: [
            {
                src: '/images/armor/hands/greenscale.gif',
                alt: 'Greenscale Gloves',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
        },
        slot: 'hands',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'clawed-greenscale-gloves',
        name: 'Clawed Greenscale Gloves',
        images: [
            {
                src: '/images/armor/hands/clawedgreenscale.gif',
                alt: 'Clawed Greenscale Gloves',
            },
        ],
        effects: ['+3 Maximum Damage'],
        requirements: {
            strength: 35,
            agility: 49,
        },
        slot: 'hands',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'frostskin-gloves',
        name: 'Frostskin Gloves',
        images: [
            {
                src: '/images/armor/hands/frostskin.gif',
                alt: 'Frostskin Gloves',
            },
        ],
        effects: [],
        requirements: {
            strength: 40,
            agility: 58,
        },
        slot: 'hands',
        armorClass: 5.0,
        damageReduction: 0.2,
        staminaCost: 0.3,
    },
    {
        id: 'clawed-frostskin-gloves',
        name: 'Clawed Frostskin Gloves',
        images: [
            {
                src: '/images/armor/hands/clawedfrostskin.gif',
                alt: 'Clawed Frostskin Gloves',
            },
        ],
        effects: ['+1 Maximum Damage', '+5 Resistance vs Blue'],
        requirements: {
            strength: 40,
            agility: 58,
        },
        slot: 'hands',
        armorClass: 5.0,
        damageReduction: 0.2,
        staminaCost: 0.3,
    },
    {
        id: 'small-turtle-shield',
        name: 'Small Turtle Shield',
        images: [
            {
                src: '/images/armor/shields/smturtshield.gif',
                alt: 'Small Turtle Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 18,
            agility: 20,
        },
        slot: 'shields',
        armorClass: 1.8,
        damageReduction: 0.1,
        staminaCost: 0.1,
    },
    {
        id: 'spiked-turtle-shield',
        name: 'Spiked Turtle Shield',
        images: [
            {
                src: '/images/armor/shields/spkturtshield.gif',
                alt: 'Spiked Turtle Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 21,
        },
        slot: 'shields',
        armorClass: 1.8,
        damageReduction: 0.5,
        staminaCost: 0.3,
    },
    {
        id: 'oak-shield',
        name: 'Oak Shield',
        images: [
            {
                src: '/images/armor/shields/oakshield.gif',
                alt: 'Oak Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 41,
            agility: 30,
        },
        slot: 'shields',
        armorClass: 4.5,
        damageReduction: 1.2,
        staminaCost: 0.8,
    },
    {
        id: 'red-turtle-shield',
        name: 'Red Turtle Shield',
        images: [
            {
                src: '/images/armor/shields/redturtshield.gif',
                alt: 'Red Turtle Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 21,
            agility: 25,
        },
        slot: 'shields',
        armorClass: 5.0,
        damageReduction: 0.2,
        staminaCost: 0.2,
    },
    {
        id: 'wooden-shield',
        name: 'Wooden Shield',
        images: [
            {
                src: '/images/armor/shields/woodshield.gif',
                alt: 'Wooden Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 32,
        },
        slot: 'shields',
        armorClass: 6.0,
        damageReduction: 0.4,
        staminaCost: 0.3,
    },
    {
        id: 'perfect-palette',
        name: 'Perfect Palette',
        images: [
            {
                src: '/images/armor/shields/palette.gif',
                alt: 'Perfect Palette',
            },
        ],
        unique: true,
        effects: ['+10 Health Points', '+5 Resistance vs White'],
        requirements: {
            level: 20,
        },
        slot: 'shields',
        armorClass: 8.0,
        damageReduction: 0.0,
        staminaCost: 2.0,
    },
    {
        id: 'shield-of-the-turtle-queen',
        name: 'Shield of the Turtle Queen',
        images: [
            {
                src: '/images/armor/shields/turtqushield.gif',
                alt: 'Shield of the Turtle Queen',
            },
        ],
        effects: ['+5 Resistance vs Red', '+5 Resistance vs blue'],
        requirements: {
            strength: 40,
            agility: 58,
            faith: 20,
        },
        slot: 'shields',
        armorClass: 10.0,
        damageReduction: 0.4,
        staminaCost: 0.8,
    },
    {
        id: 'bronze-shield',
        name: 'Bronze Shield',
        images: [
            {
                src: '/images/armor/shields/bronzeshield.gif',
                alt: 'Bronze Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 75,
            agility: 50,
        },
        slot: 'shields',
        armorClass: 10.5,
        damageReduction: 2.8,
        staminaCost: 1.8,
    },
    {
        id: 'befouled-shield',
        name: 'Befouled Shield',
        images: [
            {
                src: '/images/armor/shields/bfouldshield.gif',
                alt: 'Befouled Shield',
            },
        ],
        effects: ['+5 Resistance vs Yellow'],
        requirements: {
            strength: 75,
            agility: 50,
            faith: 30,
        },
        slot: 'shields',
        armorClass: 10.5,
        damageReduction: 2.8,
        staminaCost: 1.8,
    },
    {
        id: 'steel-shield',
        name: 'Steel Shield',
        images: [
            {
                src: '/images/armor/shields/steelshield.gif',
                alt: 'Steel Shield',
            },
        ],
        effects: [],
        requirements: {
            strength: 100,
            agility: 65,
        },
        slot: 'shields',
        armorClass: 15.0,
        damageReduction: 4.0,
        staminaCost: 2.5,
    },
    {
        id: 'shield-of-absorbtion',
        name: 'Shield of Absorbtion',
        images: [
            {
                src: '/images/armor/shields/absorbshield.gif',
                alt: 'Shield of Absorbtion',
            },
        ],
        effects: ['+5 Resistance vs Red', '+5 Resistance vs Blue'],
        requirements: {
            strength: 100,
            agility: 65,
            faith: 30,
        },
        slot: 'shields',
        armorClass: 15.0,
        damageReduction: 4.0,
        staminaCost: 2.5,
    },
    {
        id: 'leather-boots',
        name: 'Leather Boots',
        images: [
            {
                src: '/images/armor/feet/leatherboots.gif',
                alt: 'Leather Boots',
            },
        ],
        effects: [],
        requirements: {
            strength: 25,
            agility: 32,
        },
        slot: 'feet',
        armorClass: 2.0,
        damageReduction: 0.1,
        staminaCost: 0.1,
    },
    {
        id: 'iron-shoes',
        name: 'Iron Shoes',
        images: [
            {
                src: '/images/armor/feet/ironshoes.gif',
                alt: 'Iron Shoes',
            },
        ],
        effects: [],
        requirements: {
            strength: 49,
            agility: 35,
        },
        slot: 'feet',
        armorClass: 2.0,
        damageReduction: 0.3,
        staminaCost: 0.3,
    },
    {
        id: 'hard-leather-boots',
        name: 'Hard Leather Boots',
        images: [
            {
                src: '/images/armor/feet/hardlthrboots.gif',
                alt: 'Hard Leather Boots',
            },
        ],
        effects: [],
        requirements: {
            strength: 30,
            agility: 41,
        },
        slot: 'feet',
        armorClass: 3.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'croc-boots',
        name: 'Croc Boots',
        images: [
            {
                src: '/images/armor/feet/crocboots.gif',
                alt: 'Croc Boots',
            },
        ],
        effects: [],
        requirements: {
            strength: 35,
            agility: 49,
        },
        slot: 'feet',
        armorClass: 4.0,
        damageReduction: 0.1,
        staminaCost: 0.2,
    },
    {
        id: 'lion-boots',
        name: 'Lion Boots',
        images: [
            {
                src: '/images/armor/feet/lionboots.gif',
                alt: 'Lion Boots',
            },
        ],
        effects: [],
        requirements: {
            strength: 40,
            agility: 58,
        },
        slot: 'feet',
        armorClass: 5.0,
        damageReduction: 0.2,
        staminaCost: 0.3,
    },
    {
        id: 'bear-boots',
        name: 'Bear Boots',
        images: [
            {
                src: '/images/armor/feet/bearboots.gif',
                alt: 'Bear Boots',
            },
        ],
        effects: [],
        requirements: {
            strength: 50,
            agility: 75,
        },
        slot: 'feet',
        armorClass: 7.0,
        damageReduction: 0.3,
        staminaCost: 0.3,
    },
];
