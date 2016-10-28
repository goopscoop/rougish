import Strings from './strings';

const improvements = [
  {
    name: Strings.improvements.treasury.name,
    code: 'treasury',
    id: 'imprv-treasury',
    isPurchased: false,
    cost: {
      gold: 100
    },
    currentLvl: 0,
    upgrades: [
      {
        label: Strings.improvements.treasury.upgrade1,
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1000
        }
      },
      {
        label: Strings.improvements.treasury.upgrade2,
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 5000
        }
      },
      {
        label: Strings.improvements.treasury.upgrade3,
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 10000
        }
      },
      {
        label: Strings.improvements.treasury.upgrade4,
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 20000
        }
      },
      {
        label: Strings.improvements.treasury.upgrade5,
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 50000
        }
      },
    ],
  },
  {
    name: Strings.improvements.armory.name,
    code: 'armory',
    id: 'imprv-armory',
    isPurchased: false,
    cost: {
      gold: 200,
      iron: 50
    },
    currentLvl: 0,
    upgrades: [
      {
        label: Strings.improvements.armory.upgrade1,
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 500,
          iron: 100
        }
      },
      {
        label: Strings.improvements.armory.upgrade2,
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 1000,
          iron: 200
        }
      },
      {
        label: Strings.improvements.armory.upgrade3,
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 5000,
          iron: 500
        }
      },
      {
        label: Strings.improvements.armory.upgrade4,
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 10000,
          iron: 2000,
          crystals: 10
        }
      },
      {
        label: Strings.improvements.armory.upgrade5,
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 25000,
          iron: 5000,
          crystals: 100
        }
      }
    ]
  },
  {
    name: Strings.improvements.cellar.name,
    code: 'cellar',
    id: 'imprv-cellar',
    isPurchased: false,
    cost: {
      gold: 500,
      gin: 100
    },
    currentLvl: 0,
    upgrades: [
      {
        label: Strings.improvements.cellar.upgrade1,
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1000,
          iron: 50,
          gin: 50
        }
      },
      {
        label: Strings.improvements.cellar.upgrade2,
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 1500,
          iron: 150,
          gin: 150
        }
      },
      {
        label: Strings.improvements.cellar.upgrade3,
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 5000,
          iron: 500,
          gin: 250
        }
      },
      {
        label: Strings.improvements.cellar.upgrade4,
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 7500,
          iron: 1000,
          gin: 500,
          crystals: 10
        }
      },
      {
        label: Strings.improvements.cellar.upgrade5,
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 15000,
          iron: 2000,
          gin: 1000,
          crystals: 150
        }
      }
    ]
  },
  {
    name: Strings.improvements.theives.name,
    code: 'theives',
    id: 'imprv-theives',
    isPurchased: false,
    cost: {
      gold: 500,
      gin: 10,
      iron: 30
    },
    currentLvl: 0,
    upgrades: [
      {
        label: Strings.improvements.theives.upgrade1,
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1500,
          iron: 75,
          gin: 75,
          crystals: 10
        }
      },
      {
        label: Strings.improvements.theives.upgrade2,
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 3000,
          iron: 300,
          gin: 200,
          crystals: 50
        }
      },
      {
        label: Strings.improvements.theives.upgrade3,
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 10000,
          iron: 1000,
          gin: 750,
          crystals: 100
        }
      },
      {
        label: Strings.improvements.theives.upgrade4,
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 20000,
          iron: 1500,
          gin: 1000,
          crystals: 200
        }
      },
      {
        label: Strings.improvements.theives.upgrade5,
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 50000,
          iron: 2000,
          gin: 1500,
          crystals: 500
        }
      }
    ]
  },
  {
    name: Strings.improvements.science.name,
    code: 'science',
    id: 'imprv-science',
    isPurchased: false,
    cost: {
      gold: 1000,
      iron: 500,
      crystals: 100
    },
    currentLvl: 0,
    upgrades: [
      {
        label: Strings.improvements.science.upgrade1,
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 2000,
          iron: 50,
          crystals: 50
        }
      },
      {
        label: Strings.improvements.science.upgrade2,
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 4000,
          iron: 100,
          crystals: 75
        }
      },
      {
        label: Strings.improvements.science.upgrade3,
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 15000,
          iron: 500,
          crystals: 200
        }
      },
      {
        label: Strings.improvements.science.upgrade4,
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 30000,
          iron: 750,
          crystals: 500
        }
      },
      {
        label: Strings.improvements.science.upgrade5,
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 75000,
          iron: 1000,
          crystals: 1000
        }
      }
    ]
  },
];

export default improvements;
