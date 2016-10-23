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
          DEF: 5
        },
        effects: {
          goldPlus: .1
        },
        rarity: 'common'
      }
    ]
  },
  items: {
    lvl1: [
      {
        label: Strings.items.goldPurse,
        code: 'goldPurse',
        description: Strings.items.goldPurseDesc,
        foundAt: ['treasury'],
        cost: {
          gold: 100
        },
        stats: {},
        effects: {
          goldPlus: .1
        },
        rarity: 'common'
      },
    ] 
  }
};

export default Items;