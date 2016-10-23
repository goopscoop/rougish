const improvements = [
  {
    name: 'Treasury',
    code: 'treasury',
    id: 'imprv-treasury',
    isPurchased: false,
    cost: {
      gold: 100
    },
    upgrades: [
      {
        label: 'Upgrade Treasury (lvl 1)',
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1000
        }
      },
      {
        label: 'Upgrade Treasury (lvl 2)',
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 5000
        }
      },
      {
        label: 'Upgrade Treasury (lvl 3)',
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 10000
        }
      },
      {
        label: 'Upgrade Treasury (lvl 4)',
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 20000
        }
      },
      {
        label: 'Upgrade Treasury (lvl 5)',
        code: 'lvl5',
        isPurchased: false,
        cost: {
          gold: 50000
        }
      },
    ]
  },
  {
    name: 'Armory',
    code: 'armory',
    id: 'imprv-armory',
    isPurchased: false,
    cost: {
      gold: 200,
      iron: 50
    },
    upgrades: [
      {
        label: 'Upgrade Armory (lvl 1)',
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 500,
          iron: 100
        }
      },
      {
        label: 'Upgrade Armory (lvl 2)',
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 1000,
          iron: 200
        }
      },
      {
        label: 'Upgrade Armory (lvl 3)',
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 5000,
          iron: 500
        }
      },
      {
        label: 'Upgrade Armory (lvl 4)',
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 10000,
          iron: 2000,
          crystals: 10
        }
      },
      {
        label: 'Upgrade Armory (lvl 5)',
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
    name: 'Cellar',
    code: 'cellar',
    id: 'imprv-cellar',
    isPurchased: false,
    cost: {
      gold: 500,
      gin: 100
    },
    upgrades: [
      {
        label: 'Upgrade Cellar (lvl 1)',
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1000,
          iron: 50,
          gin: 50
        }
      },
      {
        label: 'Upgrade Cellar (lvl 2)',
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 1500,
          iron: 150,
          gin: 150
        }
      },
      {
        label: 'Upgrade Cellar (lvl 3)',
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 5000,
          iron: 500,
          gin: 250
        }
      },
      {
        label: 'Upgrade Cellar (lvl 4)',
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
        label: 'Upgrade Cellar (lvl 5)',
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
    name: 'Theives Guild',
    code: 'theives',
    id: 'imprv-theives',
    isPurchased: false,
    cost: {
      gold: 500,
      gin: 10,
      iron: 30
    },
    upgrades: [
      {
        label: 'Upgrade Theives Guild (lvl 1)',
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
        label: 'Upgrade Theives Guild (lvl 2)',
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
        label: 'Upgrade Theives Guild (lvl 3)',
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
        label: 'Upgrade Theives Guild (lvl 4)',
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
        label: 'Upgrade Theives Guild (lvl 5)',
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
    name: 'Science Lab',
    code: 'science',
    id: 'imprv-science',
    isPurchased: false,
    cost: {
      gold: 1000,
      iron: 500,
      crystals: 100
    },
    upgrades: [
      {
        label: 'Upgrade Science (lvl 1)',
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 2000,
          iron: 50,
          crystals: 50
        }
      },
      {
        label: 'Upgrade Science (lvl 2)',
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 4000,
          iron: 100,
          crystals: 75
        }
      },
      {
        label: 'Upgrade Science (lvl 3)',
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 15000,
          iron: 500,
          crystals: 200
        }
      },
      {
        label: 'Upgrade Science (lvl 4)',
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 30000,
          iron: 750,
          crystals: 500
        }
      },
      {
        label: 'Upgrade Science (lvl 5)',
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
