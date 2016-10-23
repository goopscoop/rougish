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
        label: 'Increase Maximum Resources (lvl 1)',
        code: 'lvl1',
        isPurchased: false,
        cost: {
          gold: 1000
        }
      },
      {
        label: 'Increase Maximum Resources (lvl 2)',
        code: 'lvl2',
        isPurchased: false,
        cost: {
          gold: 5000
        }
      },
      {
        label: 'Increase Maximum Resources (lvl 3)',
        code: 'lvl3',
        isPurchased: false,
        cost: {
          gold: 10000
        }
      },
      {
        label: 'Increase Maximum Resources (lvl 4)',
        code: 'lvl4',
        isPurchased: false,
        cost: {
          gold: 20000
        }
      },
      {
        label: 'Increase Maximum Resources (lvl 5)',
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
    upgrades: []
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
    upgrades: []
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
    upgrades: []
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
    upgrades: []
  },
];

export default improvements;
