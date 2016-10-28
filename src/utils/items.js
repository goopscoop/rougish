import Strings from './strings';
import * as sec from './secondarySkills';

const Items = [
  // WEAPONS 
  {
    label: Strings.weapons.goldDagger,
    code: 'goldDagger',
    description: Strings.weapons.goldDaggerDesc,
    foundAt: ['treasury'],
    cost: {
      gold: 100
    },
    stats: {
      ATK: 5
    },
    effects: [
      sec.goldPlus(10)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'weapon'
  },
  {
    label: Strings.weapons.ironShortSword,
    code: 'ironShortSword',
    description: Strings.weapons.ironShortSwordDesc,
    foundAt: ['armory'],
    cost: {
      gold: 200
    },
    stats: {
      ATK: 11
    },
    effects: [
      sec.critPlus(10)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'weapon'
  },
  {
    label: Strings.weapons.brittleRapier,
    code: 'brittleRapier',
    description: Strings.weapons.brittleRapierDesc,
    foundAt: ['armory'],
    cost: {
      gold: 400
    },
    stats: {
      ATK: 8
    },
    effects: [
      sec.critPlus(50),
      sec.weapBreak(4)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'weapon'
  },
  {
    label: Strings.weapons.goldSaber,
    code: 'goldSaber',
    description: Strings.weapons.goldSaberDesc,
    foundAt: ['treasury'],
    cost: {
      gold: 1000
    },
    stats: {
      ATK: 15
    },
    effects: [
      sec.goldPlus: .2
    ],
    rarity: 'common',
    lvl: 2,
    type: 'weapon'
  },
  {
    label: Strings.weapons.blunderbuss,
    code: 'blunderbuss',
    description: Strings.weapons.blunderbussDesc,
    foundAt: ['armory'],
    cost: {
      gold: 1000
    },
    stats: {
      ATK: 25
    },
    effects: [
      sec.splashDam(20),
      sec.twoHanded(),
      sec.ranged()
    ],
    rarity: 'common',
    lvl: 2,
    type: 'weapon'
  },
  {
    label: Strings.weapons.whip,
    code: 'whip',
    description: Strings.weapons.whipDesc,
    foundAt: ['armory'],
    cost: {
      gold: 2500
    },
    stats: {
      ATK: 25
    },
    effects: [
      sec.critPlus(50),
      sec.critDam(200)
    ],
    rarity: 'common',
    lvl: 3,
    type: 'weapon'
  },
  {
    label: Strings.weapons.broadSword,
    code: 'broadSword',
    description: Strings.weapons.broadSwordDesc,
    foundAt: ['armory'],
    cost: {
      gold: 5000
    },
    stats: {
      ATK: 50
    },
    effects: [
      sec.critPlus(10),
      sec.twoHanded
    ],
    rarity: 'common',
    lvl: 4,
    type: 'weapon'
  },

// ARMOR
  {
    label: Strings.armor.goldVest,
    code: 'goldVest',
    description: Strings.armor.goldVestDesc,
    foundAt: ['treasury'],
    cost: {
      gold: 500
    },
    stats: {
      DEF: 7
    },
    effects: [
      sec.goldPlus(20)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'armor'
  },
  {
    label: Strings.armor.leatherVest,
    code: 'leatherVest',
    description: Strings.armor.leatherVestDesc,
    foundAt: ['armory'],
    cost: {
      gold: 200
    },
    stats: {
      DEF: 15
    },
    effects: [
      sec.dodgePlus(20)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'armor'
  },
  {
    label: Strings.armor.mechanicalJumper,
    code: 'mechanicalJumper',
    description: Strings.armor.mechanicalJumperDesc,
    foundAt: ['science'],
    cost: {
      gold: 1500
    },
    stats: {
      DEF: 10,
      SCI_DEF: 15,
      SCI: 10
    },
    effects: [
      sec.critDef(50)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'armor'
  },
  {
    label: Strings.armor.leatherJacket,
    code: 'leatherJacket',
    description: Strings.armor.leatherJacketDesc,
    foundAt: ['armory'],
    cost: {
      gold: 500
    },
    stats: {
      DEF: 25
    },
    effects: [
      sec.dodgePlus(30)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'armor'
  },
  {
    label: Strings.armor.clockworkSuit,
    code: 'clockworkSuit',
    description: Strings.armor.clockworkSuitDesc,
    foundAt: ['science'],
    cost: {
      gold: 3000
    },
    stats: {
      DEF: 20,
      SCI_DEF: 20,
      SCI: 15
    },
    effects: [
      sec.critDef(55)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'armor'
  },
  {
    label: Strings.armor.chainVest,
    code: 'chainVest',
    description: Strings.armor.chainVestDesc,
    foundAt: ['armory'],
    cost: {
      gold: 1000
    },
    stats: {
      DEF: 40
    },
    effects: [
      sec.dodgePlus(15)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'armor'
  },
  {
    label: Strings.armor.goldJacket,
    code: 'goldJacket',
    description: Strings.armor.goldJacketDesc,
    foundAt: ['treasury'],
    cost: {
      gold: 5000
    },
    stats: {
      DEF: 15
    },
    effects: [
      sec.goldPlus(50)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'armor'
  },
  {
    label: Strings.armor.metalCage,
    code: 'metalCage',
    description: Strings.armor.metalCageDesc,
    foundAt: ['armory'],
    cost: {
      gold: 2000
    },
    stats: {
      DEF: 60
    },
    effects: [
      sec.heavy(40)
    ],
    rarity: 'common',
    lvl: 3,
    type: 'armor'
  },
  {
    label: Strings.armor.clockworkArmor,
    code: 'clockworkArmor',
    description: Strings.armor.clockworkArmorDesc,
    foundAt: ['science'],
    cost: {
      gold: 10000
    },
    stats: {
      DEF: 60,
      SCI_DEF: 35,
      SCI: 25
    },
    effects: [
      sec.critDef(20),
      sec.heavy(20)
    ],
    rarity: 'common',
    lvl: 4,
    type: 'armor'
  },
  {
    label: Strings.armor.titaniumPlateSuit,
    code: 'titaniumPlateSuit',
    description: Strings.armor.titaniumPlateSuitDesc,
    foundAt: ['armory'],
    cost: {
      gold: 5000
    },
    stats: {
      DEF: 80
    },
    effects: [
      sec.heavy(40)
    ],
    rarity: 'common',
    lvl: 4,
    type: 'armor'
  },
  {
    label: Strings.items.beer,
    code: 'beer',
    description: Strings.items.beerDesc,
    foundAt: ['cellar'],
    cost: {
      gold: 100
    },
    stats: {},
    effects: [
      sec.protect(10),
      sec.vitalProtect(30)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'accessory'
  },
  {
    label: Strings.items.magnifyingGlass,
    code: 'magnifyingGlass',
    description: Strings.items.magnifyingGlassDesc,
    foundAt: ['science'],
    cost: {
      gold: 1000
    },
    stats: {},
    effects: [
      sec.rarePlus(15)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'accessory'
  },
  {
    label: Strings.items.metalGloves,
    code: 'metalGloves',
    description: Strings.items.metalGlovesDesc,
    foundAt: ['armory'],
    cost: {
      gold: 150
    },
    stats: {
      DEF: 10
    },
    effects: [
      sec.stealMinus(20)
    ],
    rarity: 'common',
    lvl: 0,
    type: 'accessory'
  },
  {
    label: Strings.items.wine,
    code: 'wine',
    description: Strings.items.wineDesc,
    foundAt: ['cellar'],
    cost: {
      gold: 900
    },
    stats: {},
    effects: [
      sec.inspire(20)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'accessory'
  },
  {
    label: Strings.items.topHat,
    code: 'topHat',
    description: Strings.items.topHatDesc,
    foundAt: ['theives'],
    cost: {
      gold: 1500
    },
    stats: {
      DEF: 10,
      SCI_DEF: 5
    },
    effects: [
      sec.critDef(20),
      sec.steal(10)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'accessory'
  },
  {
    label: Strings.items.goldPurse,
    code: 'goldPurse',
    description: Strings.items.goldPurseDesc,
    foundAt: ['treasury'],
    cost: {
      gold: 200
    },
    stats: {},
    effects: [
      sec.goldPlus(15)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'accessory'
  },
  {
    label: Strings.items.codPiece,
    code: 'codPiece',
    description: Strings.items.codPieceDesc,
    foundAt: ['armory'],
    cost: {
      gold: 500
    },
    stats: {
      DEF: 15
    },
    effects: [
      sec.intimidate(10),
      sec.critDef(20)
    ],
    rarity: 'common',
    lvl: 1,
    type: 'accessory'
  },
  {
    label: Strings.items.whiskey,
    code: 'whiskey',
    description: Strings.items.whiskeyDesc,
    foundAt: ['cellar'],
    cost: {
      gold: 2500
    },
    stats: {
      SCI_DEF: -20
    },
    effects: [
      sec.protect(30),
      sec.vitalProtect(50),
      sec.inspire(20), // chance to increase damage by teammates
      sec.critMinus(50)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'accessory'
  },
  {
    label: Strings.items.gasMask,
    code: 'gasMask',
    description: Strings.items.gasMaskDesc,
    foundAt: ['science'],
    cost: {
      gold: 1000
    },
    stats: {
      SCI_DEF: 5,
      DEF: 5
    },
    effects: [
      sec.poisonDef(),
      sec.intimidate(20)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'accessory'
  },
  {
    label: Strings.items.metalBra,
    code: 'metalBra',
    description: Strings.items.metalBraDesc,
    foundAt: ['armory'],
    cost: {
      gold: 500
    },
    stats: {
      DEF: 20
    },
    effects: [
      sec.intimidate(20),
      sec.critDef(30)
    ],
    rarity: 'common',
    lvl: 2,
    type: 'accessory'
  },
  {
    label: Strings.items.absenth,
    code: 'absenth',
    description: Strings.items.absenthDesc,
    foundAt: ['cellar'],
    cost: {
      gold: 5000
    },
    stats: {
    },
    effects: [
      sec.rarePlus(15),
      sec.intimidateDef(),
      sec.inspire(20)
    ],
    rarity: 'common',
    lvl: 3,
    type: 'accessory'
  },
  {
    label: Strings.items.steelToeBoots,
    code: 'steelToeBoots',
    description: Strings.items.steelToeBootsDesc,
    foundAt: ['armory'],
    cost: {
      gold: 1000
    },
    stats: {
      DEF: 20
    },
    effects: [
      sec.critPlus(30),
      sec.critDef(10)
    ],
    rarity: 'common',
    lvl: 3,
    type: 'accessory'
  },
  {
    label: Strings.items.scotch,
    code: 'scotch',
    description: Strings.items.scotchDesc,
    foundAt: ['cellar'],
    cost: {
      gold: 2000
    },
    stats: {
      DEF: 10,
      ATK: 10,
      SCI: 10,
      SCI_DEF: 10
    },
    effects: [
      sec.critPlus(15),
      sec.poisonDef(),
      sec.intimidateDef(),
      sec.critDef(55),
      sec.inspire(20)
    ],
    rarity: 'common',
    lvl: 4,
    type: 'accessory'
  },
  {
    label: Strings.items.goldSack,
    code: 'goldSack',
    description: Strings.items.goldSackDesc,
    foundAt: ['science'],
    cost: {
      gold: 10000
    },
    stats: {},
    effects: [
      sec.goldPlus(35),
      sec.rarePlus(5)
    ],
    rarity: 'common',
    lvl: 4,
    type: 'accessory'
  },
];

export default Items;