export const item = ({
  label = '',
  code = '',
  description = '',
  foundAt = [],
  cost = {},
  stats = {},
  effects = [],
  rarity = '',
  lvl = 0,
  type = ''
}) => ({
  label, code, description, foundAt, cost, stats, effects, rarity, lvl, type
});

export const foundAtTreasury = (item) => ({
  ...item,
  foundAt: [...item.foundAt, 'treasury']
});

export const foundAtArmory = (item) => ({
  ...item,
  foundAt: [...item.foundAt, 'armory']
});

export const foundAtScience = (item) => ({
  ...item,
  foundAt: [...item.foundAt, 'science']
});

export const foundAtThieves = (item) => ({
  ...item,
  foundAt: [...item.foundAt, 'thieves']
});

export const foundAtCellar = (item) => ({
  ...item,
  foundAt: [...item.foundAt, 'cellar']
});

export const weapon = (item) => ({
  ...item,
  type: 'weapon'
});

export const armor = (item) => ({
  ...item,
  type: 'armor'
});

export const sheild = (item) => ({
  ...item,
  type: 'sheild'
});

export const accessory = (item) => ({
  ...item,
  type: 'accessory'
});

export const lvl1 = (item) => ({
  ...item,
  lvl: 0
});

export const lvl2 = (item) => ({
  ...item,
  lvl: 1
});

export const lvl3 = (item) => ({
  ...item,
  lvl: 2
});

export const lvl4 = (item) => ({
  ...item,
  lvl: 3
});

export const lvl5 = (item) => ({
  ...item,
  lvl: 4
});

export const rarityCommon = (item) => ({
  ...item,
  rarity: 'common'
});

export const rarityUncommon = (item) => ({
  ...item,
  rarity: 'uncommon'
});

export const rarityRare = (item) => ({
  ...item,
  rarity: 'rare'
});

export const rarityLegendary = (item) => ({
  ...item,
  rarity: 'legendary'
});