const items = {
  weapons: [
    {
      label: Strings.improvements.weapons.goldDagger,
      code: 'goldDagger',
      description: Strings.improvements.weapons.goldDaggerDesc,
      cost: {
        gold: 100
      },
      stats: {
        ATK: 5
      },
      effects: {
        goldPlus: .1
      }
    },
  ],
  armor: [
    {
      label: Strings.improvements.armor.goldVest,
      code: 'goldVest',
      description: Strings.improvements.armor.goldVestDesc,
      cost: {
        gold: 100
      },
      stats: {
        DEF: 5
      },
      effects: {
        goldPlus: .1
      }
    }
  ],
  items: [
    {
      label: Strings.improvements.items.goldPurse,
      code: 'goldPurse',
      description: Strings.improvements.items.goldPurseDesc,
      cost: {
        gold: 100
      },
      stats: {},
      effects: {
        goldPlus: .1
      }
    },
  ]
};

export default items;