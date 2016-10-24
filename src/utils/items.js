import Strings from './strings';

const Items = {
  weapons: {
    lvl1: [
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
        effects: {
          goldPlus: .1
        },
        rarity: 'common'
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
        effects: {
          critChance: 10
        },
        rarity: 'common'
      },
    ],
    lvl2: [
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
        effects: {
          critChance: .5,
          break: .04 // % chance it will break
        },
        rarity: 'common'
      },
    ],
    lvl3: [
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
        effects: {
          goldPlus: .2
        },
        rarity: 'common'
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
          ATK: 20
        },
        effects: {
          splash: .2,
          ranged: true
        },
        rarity: 'common'
      },
    ],
    lvl4: [
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
        effects: {
          critChance: .5,
          critDam: 2 // 200% crit damage
        },
        rarity: 'common'
      },
    ],
    lvl5: [
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
        effects: {
          critChance: .1,
          twoHanded: true
        },
        rarity: 'common'
      },
    ]
  },
  armor: {
    lvl1: [
      {
        label: Strings.armor.goldVest,
        code: 'goldVest',
        description: Strings.armor.goldVestDesc,
        foundAt: ['treasury'],
        cost: {
          gold: 100
        },
        stats: {
          DEF: 7
        },
        effects: {
          goldPlus: .1
        },
        rarity: 'common'
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
        effects: {
        },
        rarity: 'common'
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
        effects: {
          critDef: .20
        },
        rarity: 'common'
      }
    ],
    lvl2: [
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
        effects: {
        },
        rarity: 'common'
      }
    ],
    lvl3: [
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
        effects: {
          critDef: .15
        },
        rarity: 'common'
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
        effects: {
        },
        rarity: 'common'
      }
    ],
    lvl4: [
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
        effects: {
          goldPlus: .5
        },
        rarity: 'common'
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
        effects: {
        },
        rarity: 'common'
      }
    ],
    lvl5: [
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
        effects: {
          critDef: .20
        },
        rarity: 'common'
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
        effects: {
        },
        rarity: 'common'
      }
    ]
  },
  items: {
    lvl1: [
      {
        label: Strings.items.beer,
        code: 'beer',
        description: Strings.items.beerDesc,
        foundAt: ['cellar'],
        cost: {
          gold: 100
        },
        stats: {},
        effects: {
          protect: .20
        },
        rarity: 'common'
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
        effects: {
          rarePlus: .15
        },
        rarity: 'common'
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
        effects: {
          stealing: -0.2
        },
        rarity: 'common'
      },
    ],
    lvl2: [
      {
        label: Strings.items.wine,
        code: 'wine',
        description: Strings.items.wineDesc,
        foundAt: ['cellar'],
        cost: {
          gold: 200
        },
        stats: {},
        effects: {
          inspire: .20 // chance to increase damage by teammates
        },
        rarity: 'common'
      },
      {
        label: Strings.items.topHat,
        code: 'topHat',
        description: Strings.items.topHatDesc,
        foundAt: ['theives'],
        cost: {
          gold: 1500
        },
        stats: {},
        effects: {
          critDef: .2, // 100% block crit
          stealing: .5 
        },
        rarity: 'common'
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
        effects: {
          goldPlus: .15
        },
        rarity: 'common'
      },
      {
        label: Strings.items.codPiece,
        code: 'codPiece',
        description: Strings.items.codPieceDesc,
        foundAt: ['armory'],
        cost: {
          gold: 300
        },
        stats: {
          DEF: 15
        },
        effects: {
          intimidation: .2,
          critDef: .2
        },
        rarity: 'common'
      },
    ],
    lvl3: [
      {
        label: Strings.items.whiskey,
        code: 'whiskey',
        description: Strings.items.whiskeyDesc,
        foundAt: ['cellar'],
        cost: {
          gold: 500
        },
        stats: {
          SCI_DEF: -20
        },
        effects: {
          protect: .3,
          inspire: .3, // chance to increase damage by teammates
          critChance: -.2
        },
        rarity: 'common'
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
        effects: {
          poisonDef: 1,
          intimidation: .2
        },
        rarity: 'common'
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
        effects: {
          intimidation: .2,
          critDef: .3
        },
        rarity: 'common'
      },
    ],
    lvl4: [
      {
        label: Strings.items.absenth,
        code: 'absenth',
        description: Strings.items.absenthDesc,
        foundAt: ['cellar'],
        cost: {
          gold: 1500
        },
        stats: {
        },
        effects: {
          rarePlus: .3,
          intimidationDef: 1
        },
        rarity: 'common'
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
        effects: {
          critChance: .3
        },
        rarity: 'common'
      },
    ],
    lvl5: [
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
        effects: {
          critChance: .15,
          poisonDef: .55,
          intimidationDef: .55,
          critDef: .55
        },
        rarity: 'common'
      },
      {
        label: Strings.items.goldSack,
        code: 'goldSack',
        description: Strings.items.goldSackDesc,
        foundAt: ['science'],
        cost: {
          gold: 100
        },
        stats: {},
        effects: {
          goldPlus: .25
        },
        rarity: 'common'
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
        effects: {
          critChance: .3
        },
        rarity: 'common'
      },
    ]
  }
};

export default Items;