
export const character = ({
  name = '',
  description = '',
  foundAt = [],
  primaryStats = {
    STR: 1,
    MNTL: 1,
    FRT: 1,
    LCK: 1
  },
  secondaryStats,
  abilities = [],
  effects = [],
  lvl = 0,
  type = '',
  hp = 0,
  hasDied = false,
  isPlayer = true,
  imgName = ''
}) => {
  const generateCode = () => {
    return `${name[0]}${name[1]}${name[2]}${Math.random()}`;
  };

  const generateSecondaryStates = () => {
    let initiative = primaryStats.STR + primaryStats.FRT + (primaryStats.LCK / 2)
    if (isPlayer){
      initiative += 1;
    }

    return {
      initiative
    };
  };

  return {
    name,
    code: generateCode(),
    description,
    foundAt,
    primaryStats,
    abilities,
    effects,
    lvl,
    type,
    hp,
    hasDied,
    secondaryStats: generateSecondaryStates(),
    imgName
  } 
};

// Character classes
// 

export const scuttler = char => ({
  ...char,
  primaryStats: {
    STR: 3,
    MNTL: 1,
    FRT: 1,
    LCK: 2
  },
  type: 'scuttler'
});

export const scarlet = char => ({
  ...char,
  primaryStats: {
    STR: 2,
    MNTL: 2,
    FRT: 1,
    LCK: 2
  },
  type: 'scarlet'
});

export const inventor = char => ({
  ...char,
  primaryStats: {
    STR: 1,
    MNTL: 3,
    FRT: 2,
    LCK: 1
  },
  type: 'inventor'
});

export const priest = char => ({
  ...char,
  primaryStats: {
    STR: 2,
    MNTL: 2,
    FRT: 2,
    LCK: 1
  },
  type: 'priest'
});

export const sneaktheif = char => ({
  ...char,
  primaryStats: {
    STR: 1,
    MNTL: 2,
    FRT: 1,
    LCK: 3
  },
  type: 'sneaktheif'
});

export const bruiser = char => ({
  ...char,
  primaryStats: {
    STR: 4,
    MNTL: 1,
    FRT: 1,
    LCK: 1
  },
  type: 'bruiser'
});

export const mentalist = char => ({
  ...char,
  primaryStats: {
    STR: 1,
    MNTL: 4,
    FRT: 1,
    LCK: 1
  },
  type: 'mentalist'
});

export const drunkard = char => ({
  ...char,
  primaryStats: {
    STR: 1,
    MNTL: 1,
    FRT: 4,
    LCK: 1
  },
  type: 'drunkard'
});

export const dimwit = char => ({
  ...char,
  primaryStats: {
    STR: 1,
    MNTL: 1,
    FRT: 1,
    LCK: 4
  },
  type: 'dimwit'
});
