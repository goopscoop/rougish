import {character} from './characterConstructors';

  // name = '',
  // code = '',
  // description = '',
  // foundAt = [],
  // primaryStats = {},
  // abilities = [],
  // effects = [],
  // lvl = 0,
  // type = '',
  // hp = 0,
  // hasDied = false

export const ghost = enemy => ({
  ...enemy,
  name: 'Ghost',
  description: 'spooky',
  foundAt: ['test'],
  lvl: 1,
  type: 'Apperation',
  hp: 20,
  primaryStats: {
    STR: 3,
    MNTL: 1,
    FRT: 1,
    LCK: 2
  },
  isPlayer: false
})