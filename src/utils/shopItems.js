import * as i from './itemConstructors';
import Strings from './strings';
import * as sec from './secondarySkills';

// curried constructors
// 
// weapons
const _treasuryWpnLvl1 = (props) => i.foundAtTreasury(i.weapon(i.lvl1(i.rarityCommon(i.item(props)))));
const _treasuryWpnLvl2 = (props) => i.foundAtTreasury(i.weapon(i.lvl2(i.rarityCommon(i.item(props)))));
const _treasuryWpnLvl3 = (props) => i.foundAtTreasury(i.weapon(i.lvl3(i.rarityCommon(i.item(props)))));
const _treasuryWpnLvl4 = (props) => i.foundAtTreasury(i.weapon(i.lvl4(i.rarityCommon(i.item(props)))));
const _treasuryWpnLvl5 = (props) => i.foundAtTreasury(i.weapon(i.lvl5(i.rarityCommon(i.item(props)))));
const _armoryWpnLvl1 = (props) => i.foundAtArmory(i.weapon(i.lvl1(i.rarityCommon(i.item(props)))));
const _armoryWpnLvl2 = (props) => i.foundAtArmory(i.weapon(i.lvl2(i.rarityCommon(i.item(props)))));
const _armoryWpnLvl3 = (props) => i.foundAtArmory(i.weapon(i.lvl3(i.rarityCommon(i.item(props)))));
const _armoryWpnLvl4 = (props) => i.foundAtArmory(i.weapon(i.lvl4(i.rarityCommon(i.item(props)))));
const _armoryWpnLvl5 = (props) => i.foundAtArmory(i.weapon(i.lvl5(i.rarityCommon(i.item(props)))));
const _cellarWpnLvl1 = (props) => i.foundAtCellar(i.weapon(i.lvl1(i.rarityCommon(i.item(props)))));
const _cellarWpnLvl2 = (props) => i.foundAtCellar(i.weapon(i.lvl2(i.rarityCommon(i.item(props)))));
const _cellarWpnLvl3 = (props) => i.foundAtCellar(i.weapon(i.lvl3(i.rarityCommon(i.item(props)))));
const _cellarWpnLvl4 = (props) => i.foundAtCellar(i.weapon(i.lvl4(i.rarityCommon(i.item(props)))));
const _cellarWpnLvl5 = (props) => i.foundAtCellar(i.weapon(i.lvl5(i.rarityCommon(i.item(props)))));
const _scienceWpnLvl1 = (props) => i.foundAtScience(i.weapon(i.lvl1(i.rarityCommon(i.item(props)))));
const _scienceWpnLvl2 = (props) => i.foundAtScience(i.weapon(i.lvl2(i.rarityCommon(i.item(props)))));
const _scienceWpnLvl3 = (props) => i.foundAtScience(i.weapon(i.lvl3(i.rarityCommon(i.item(props)))));
const _scienceWpnLvl4 = (props) => i.foundAtScience(i.weapon(i.lvl4(i.rarityCommon(i.item(props)))));
const _scienceWpnLvl5 = (props) => i.foundAtScience(i.weapon(i.lvl5(i.rarityCommon(i.item(props)))));
const _thievesWpnLvl1 = (props) => i.foundAtThieves(i.weapon(i.lvl1(i.rarityCommon(i.item(props)))));
const _thievesWpnLvl2 = (props) => i.foundAtThieves(i.weapon(i.lvl2(i.rarityCommon(i.item(props)))));
const _thievesWpnLvl3 = (props) => i.foundAtThieves(i.weapon(i.lvl3(i.rarityCommon(i.item(props)))));
const _thievesWpnLvl4 = (props) => i.foundAtThieves(i.weapon(i.lvl4(i.rarityCommon(i.item(props)))));
const _thievesWpnLvl5 = (props) => i.foundAtThieves(i.weapon(i.lvl5(i.rarityCommon(i.item(props)))));

// aromor
const _treasuryArmLvl1 = (props) => i.foundAtTreasury(i.armor(i.lvl1(i.rarityCommon(i.item(props)))));
const _treasuryArmLvl2 = (props) => i.foundAtTreasury(i.armor(i.lvl2(i.rarityCommon(i.item(props)))));
const _treasuryArmLvl3 = (props) => i.foundAtTreasury(i.armor(i.lvl3(i.rarityCommon(i.item(props)))));
const _treasuryArmLvl4 = (props) => i.foundAtTreasury(i.armor(i.lvl4(i.rarityCommon(i.item(props)))));
const _treasuryArmLvl5 = (props) => i.foundAtTreasury(i.armor(i.lvl5(i.rarityCommon(i.item(props)))));
const _armoryArmLvl1 = (props) => i.foundAtArmory(i.armor(i.lvl1(i.rarityCommon(i.item(props)))));
const _armoryArmLvl2 = (props) => i.foundAtArmory(i.armor(i.lvl2(i.rarityCommon(i.item(props)))));
const _armoryArmLvl3 = (props) => i.foundAtArmory(i.armor(i.lvl3(i.rarityCommon(i.item(props)))));
const _armoryArmLvl4 = (props) => i.foundAtArmory(i.armor(i.lvl4(i.rarityCommon(i.item(props)))));
const _armoryArmLvl5 = (props) => i.foundAtArmory(i.armor(i.lvl5(i.rarityCommon(i.item(props)))));
const _cellarArmLvl1 = (props) => i.foundAtCellar(i.armor(i.lvl1(i.rarityCommon(i.item(props)))));
const _cellarArmLvl2 = (props) => i.foundAtCellar(i.armor(i.lvl2(i.rarityCommon(i.item(props)))));
const _cellarArmLvl3 = (props) => i.foundAtCellar(i.armor(i.lvl3(i.rarityCommon(i.item(props)))));
const _cellarArmLvl4 = (props) => i.foundAtCellar(i.armor(i.lvl4(i.rarityCommon(i.item(props)))));
const _cellarArmLvl5 = (props) => i.foundAtCellar(i.armor(i.lvl5(i.rarityCommon(i.item(props)))));
const _scienceArmLvl1 = (props) => i.foundAtScience(i.armor(i.lvl1(i.rarityCommon(i.item(props)))));
const _scienceArmLvl2 = (props) => i.foundAtScience(i.armor(i.lvl2(i.rarityCommon(i.item(props)))));
const _scienceArmLvl3 = (props) => i.foundAtScience(i.armor(i.lvl3(i.rarityCommon(i.item(props)))));
const _scienceArmLvl4 = (props) => i.foundAtScience(i.armor(i.lvl4(i.rarityCommon(i.item(props)))));
const _scienceArmLvl5 = (props) => i.foundAtScience(i.armor(i.lvl5(i.rarityCommon(i.item(props)))));
const _thievesArmLvl1 = (props) => i.foundAtThieves(i.armor(i.lvl1(i.rarityCommon(i.item(props)))));
const _thievesArmLvl2 = (props) => i.foundAtThieves(i.armor(i.lvl2(i.rarityCommon(i.item(props)))));
const _thievesArmLvl3 = (props) => i.foundAtThieves(i.armor(i.lvl3(i.rarityCommon(i.item(props)))));
const _thievesArmLvl4 = (props) => i.foundAtThieves(i.armor(i.lvl4(i.rarityCommon(i.item(props)))));
const _thievesArmLvl5 = (props) => i.foundAtThieves(i.armor(i.lvl5(i.rarityCommon(i.item(props)))));

// accessories
const _treasuryAccLvl1 = (props) => i.foundAtTreasury(i.accessory(i.lvl1(i.rarityCommon(i.item(props)))));
const _treasuryAccLvl2 = (props) => i.foundAtTreasury(i.accessory(i.lvl2(i.rarityCommon(i.item(props)))));
const _treasuryAccLvl3 = (props) => i.foundAtTreasury(i.accessory(i.lvl3(i.rarityCommon(i.item(props)))));
const _treasuryAccLvl4 = (props) => i.foundAtTreasury(i.accessory(i.lvl4(i.rarityCommon(i.item(props)))));
const _treasuryAccLvl5 = (props) => i.foundAtTreasury(i.accessory(i.lvl5(i.rarityCommon(i.item(props)))));
const _armoryAccLvl1 = (props) => i.foundAtArmory(i.accessory(i.lvl1(i.rarityCommon(i.item(props)))));
const _armoryAccLvl2 = (props) => i.foundAtArmory(i.accessory(i.lvl2(i.rarityCommon(i.item(props)))));
const _armoryAccLvl3 = (props) => i.foundAtArmory(i.accessory(i.lvl3(i.rarityCommon(i.item(props)))));
const _armoryAccLvl4 = (props) => i.foundAtArmory(i.accessory(i.lvl4(i.rarityCommon(i.item(props)))));
const _armoryAccLvl5 = (props) => i.foundAtArmory(i.accessory(i.lvl5(i.rarityCommon(i.item(props)))));
const _cellarAccLvl1 = (props) => i.foundAtCellar(i.accessory(i.lvl1(i.rarityCommon(i.item(props)))));
const _cellarAccLvl2 = (props) => i.foundAtCellar(i.accessory(i.lvl2(i.rarityCommon(i.item(props)))));
const _cellarAccLvl3 = (props) => i.foundAtCellar(i.accessory(i.lvl3(i.rarityCommon(i.item(props)))));
const _cellarAccLvl4 = (props) => i.foundAtCellar(i.accessory(i.lvl4(i.rarityCommon(i.item(props)))));
const _cellarAccLvl5 = (props) => i.foundAtCellar(i.accessory(i.lvl5(i.rarityCommon(i.item(props)))));
const _scienceAccLvl1 = (props) => i.foundAtScience(i.accessory(i.lvl1(i.rarityCommon(i.item(props)))));
const _scienceAccLvl2 = (props) => i.foundAtScience(i.accessory(i.lvl2(i.rarityCommon(i.item(props)))));
const _scienceAccLvl3 = (props) => i.foundAtScience(i.accessory(i.lvl3(i.rarityCommon(i.item(props)))));
const _scienceAccLvl4 = (props) => i.foundAtScience(i.accessory(i.lvl4(i.rarityCommon(i.item(props)))));
const _scienceAccLvl5 = (props) => i.foundAtScience(i.accessory(i.lvl5(i.rarityCommon(i.item(props)))));
const _thievesAccLvl1 = (props) => i.foundAtThieves(i.accessory(i.lvl1(i.rarityCommon(i.item(props)))));
const _thievesAccLvl2 = (props) => i.foundAtThieves(i.accessory(i.lvl2(i.rarityCommon(i.item(props)))));
const _thievesAccLvl3 = (props) => i.foundAtThieves(i.accessory(i.lvl3(i.rarityCommon(i.item(props)))));
const _thievesAccLvl4 = (props) => i.foundAtThieves(i.accessory(i.lvl4(i.rarityCommon(i.item(props)))));
const _thievesAccLvl5 = (props) => i.foundAtThieves(i.accessory(i.lvl5(i.rarityCommon(i.item(props)))));

export const goldDagger = _treasuryWpnLvl1({
  label: Strings.weapons.goldDagger,
  code: 'goldDagger',
  description: Strings.weapons.goldDaggerDesc,
  cost: {
    gold: 100
  },
  stats: {
    ATK: 5
  },
  effects: [
    sec.goldPlus(10)
  ]
});

export const ironShortSword = _armoryWpnLvl1({
  label: Strings.weapons.ironShortSword,
  code: 'ironShortSword',
  description: Strings.weapons.ironShortSwordDesc,
  cost: {
    gold: 200
  },
  stats: {
    ATK: 11
  },
  effects: [
    sec.critPlus(10)
  ],
});

export const brittleRapier = _armoryWpnLvl2({
    label: Strings.weapons.brittleRapier,
    code: 'brittleRapier',
    description: Strings.weapons.brittleRapierDesc,
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
});

export const goldSaber = _thievesWpnLvl3({
  label: Strings.weapons.goldSaber,
  code: 'goldSaber',
  description: Strings.weapons.goldSaberDesc,
  cost: {
    gold: 1000
  },
  stats: {
    ATK: 15
  },
  effects: [
    sec.goldPlus: .2
  ],
});

export const blunderbuss = _armoryWpnLvl3({
  label: Strings.weapons.blunderbuss,
  code: 'blunderbuss',
  description: Strings.weapons.blunderbussDesc,
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
});

export const whip = _thievesWpnLvl4({
  label: Strings.weapons.whip,
  code: 'whip',
  description: Strings.weapons.whipDesc,
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
});

export const broadSword = _armoryWpnLvl4({
  label: Strings.weapons.broadSword,
  code: 'broadSword',
  description: Strings.weapons.broadSwordDesc,
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
});

// ARMOR
export const goldVest = _treasuryArmLvl1({
  label: Strings.armor.goldVest,
  code: 'goldVest',
  description: Strings.armor.goldVestDesc,
  cost: {
    gold: 500
  },
  stats: {
    DEF: 7
  },
  effects: [
    sec.goldPlus(20)
  ],
});

export const leatherVest = _armoryArmLvl1({
  label: Strings.armor.leatherVest,
  code: 'leatherVest',
  description: Strings.armor.leatherVestDesc,
  cost: {
    gold: 200
  },
  stats: {
    DEF: 15
  },
  effects: [
    sec.dodgePlus(20)
  ],
});

export const mechanicalJumper = _scienceArmLvl1({
  label: Strings.armor.mechanicalJumper,
  code: 'mechanicalJumper',
  description: Strings.armor.mechanicalJumperDesc,
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
});

export const leatherJacket = _armoryArmLvl2({
  label: Strings.armor.leatherJacket,
  code: 'leatherJacket',
  description: Strings.armor.leatherJacketDesc,
  cost: {
    gold: 500
  },
  stats: {
    DEF: 25
  },
  effects: [
    sec.dodgePlus(30)
  ],
});

export const clockworkSuit = _scienceArmLvl3({
  label: Strings.armor.clockworkSuit,
  code: 'clockworkSuit',
  description: Strings.armor.clockworkSuitDesc,
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
});

export const chainVest = _armoryWpnLvl3({
  label: Strings.armor.chainVest,
  code: 'chainVest',
  description: Strings.armor.chainVestDesc,
  cost: {
    gold: 1000
  },
  stats: {
    DEF: 40
  },
  effects: [
    sec.dodgePlus(15)
  ],
});

export const goldJacket = _treasuryArmLvl3({
  label: Strings.armor.goldJacket,
  code: 'goldJacket',
  description: Strings.armor.goldJacketDesc,
  cost: {
    gold: 5000
  },
  stats: {
    DEF: 15
  },
  effects: [
    sec.goldPlus(50)
  ],
});

export const metalCage = _armoryArmLvl4({
  label: Strings.armor.metalCage,
  code: 'metalCage',
  description: Strings.armor.metalCageDesc,
  cost: {
    gold: 2000
  },
  stats: {
    DEF: 60
  },
  effects: [
    sec.heavy(40)
  ],
});

export const clockworkArmor = _scienceArmLvl5({
  label: Strings.armor.clockworkArmor,
  code: 'clockworkArmor',
  description: Strings.armor.clockworkArmorDesc,
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
});

export const titaniumPlateSuit = _armoryArmLvl5({
  label: Strings.armor.titaniumPlateSuit,
  code: 'titaniumPlateSuit',
  description: Strings.armor.titaniumPlateSuitDesc,
  cost: {
    gold: 5000
  },
  stats: {
    DEF: 80
  },
  effects: [
    sec.heavy(40)
  ],
});

// accessories

export const beer = _cellarAccLvl1({
  label: Strings.items.beer,
  code: 'beer',
  description: Strings.items.beerDesc,
  cost: {
    gold: 100
  },
  stats: {},
  effects: [
    sec.protect(10),
    sec.vitalProtect(30)
  ],
});

export const magnifyingGlass = _scienceAccLvl1({
  label: Strings.items.magnifyingGlass,
  code: 'magnifyingGlass',
  description: Strings.items.magnifyingGlassDesc,
  cost: {
    gold: 1000
  },
  stats: {},
  effects: [
    sec.rarePlus(15)
  ],
});

export const metalGloves = _armoryAccLvl1({
  label: Strings.items.metalGloves,
  code: 'metalGloves',
  description: Strings.items.metalGlovesDesc,
  cost: {
    gold: 150
  },
  stats: {
    DEF: 10
  },
  effects: [
    sec.stealMinus(20)
  ],
});

export const wind = _cellarAccLvl2({
  label: Strings.items.wine,
  code: 'wine',
  description: Strings.items.wineDesc,
  cost: {
    gold: 900
  },
  stats: {},
  effects: [
    sec.inspire(20)
  ],
});

export const topHat = _thievesAccLvl2({
  label: Strings.items.topHat,
  code: 'topHat',
  description: Strings.items.topHatDesc,
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
});

export const goldPurse = _treasuryAccLvl2({
  label: Strings.items.goldPurse,
  code: 'goldPurse',
  description: Strings.items.goldPurseDesc,
  cost: {
    gold: 200
  },
  stats: {},
  effects: [
    sec.goldPlus(15)
  ],
});

export const codPiece = _armoryAccLvl2({
  label: Strings.items.codPiece,
  code: 'codPiece',
  description: Strings.items.codPieceDesc,
  cost: {
    gold: 500
  },
  stats: {
    DEF: 15
  },
  effects: [
    sec.intimidate(10),
    sec.critDef(20)
  ]
});

export const whiskey = _cellarAccLvl3({
  label: Strings.items.whiskey,
  code: 'whiskey',
  description: Strings.items.whiskeyDesc,
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
});

export const gasMask = _scienceAccLvl3({
  label: Strings.items.gasMask,
  code: 'gasMask',
  description: Strings.items.gasMaskDesc,
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
});

export const metalBra = _armoryAccLvl3({
  label: Strings.items.metalBra,
  code: 'metalBra',
  description: Strings.items.metalBraDesc,
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
});

export const absenth = _cellarAccLvl4({
  label: Strings.items.absenth,
  code: 'absenth',
  description: Strings.items.absenthDesc,
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
});

export const steelToeBoots = _armoryAccLvl4({
  label: Strings.items.steelToeBoots,
  code: 'steelToeBoots',
  description: Strings.items.steelToeBootsDesc,
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
});

export const scotch = _cellarAccLvl5({
  label: Strings.items.scotch,
  code: 'scotch',
  description: Strings.items.scotchDesc,
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
    sec.intimidate,
    sec.critDef(55),
    sec.inspire(20)
  ],
});

export const goldSack = _treasuryAccLvl5({
  label: Strings.items.goldSack,
  code: 'goldSack',
  description: Strings.items.goldSackDesc,
  cost: {
    gold: 10000
  },
  stats: {},
  effects: [
    sec.goldPlus(35),
    sec.rarePlus(5)
  ],
});
