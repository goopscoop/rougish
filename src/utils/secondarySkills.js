import Strings from './strings';
const { secondarySkills: sec } = Strings;

const _skill = (code, desc, value) => ({
  code,
  desc,
  value
})

export const goldPlus = value => _skill('goldPlus', sec.goldPlusDesc, value);
export const critPlus = value => _skill('critPlus', sec.critPlusDesc, value);
export const critDam = value => _skill('critDam', sec.critDamDesc, value);
export const critDef = value => _skill('critDef', sec.critDefDesc, value);
export const critMinus = value => _skill('critMinus', sec.critMinusDesc, value);
export const weapBreak = value => _skill('weaponBreak', sec.weaponBreakDesc, value);
export const splashDam = value => _skill('splashDam', sec.splashDamDesc, value);
export const ranged = () => _skill('ranged', sec.rangedDesc, true);
export const twoHanded = () => _skill('twoHanded', sec.twoHandedDesc, true);
export const dodgePlus = value => _skill('dodgePlus', sec.dodgePlusDesc, value);
export const heavy = value => _skill('heavy', sec.heavyDesc, value);
export const protect = value => _skill('protect', sec.protectDesc, value);
export const vitalProtect = value => _skill('vitalProtect', sec.vitalProtectDesc, value);
export const rarePlus = value => _skill('rarePlus', sec.rarePlusDesc, value);
export const steal = value => _skill('steal', sec.stealDesc, value);
export const stealMinus = value => _skill('stealMinue', sec.stealMinueDesc, value);
export const inspire = value => _skill('inspire', sec.inspireDesc, value);
export const intimidate = value => _skill('intimidate', sec.intimidateDesc, value);
export const intimidateDef = () => _skill('intimidateDef', sec.intimidateDefDesc, true);
export const poisonPlus = value => _skill('poisonPlus', sec.poisonPlusDesc, value);
export const poisonDef = () => _skill('poisonDef', sec.poisonDefDesc, true);

