import Strings from './strings';
const { secondarySkills: sec } = Strings;

const _item = (code, desc, value) => ({
  code,
  desc,
  value
})

export const goldPlus = value => _item('goldPlus', sec.goldPlusDesc, value);
export const critPlus = value => _item('critPlus', sec.critPlusDesc, value);
export const critDam = value => _item('critDam', sec.critDamDesc, value);
export const critDef = value => _item('critDef', sec.critDefDesc, value);
export const critMinus = value => _item('critMinus', sec.critMinusDesc, value);
export const weapBreak = value => _item('weaponBreak', sec.weaponBreakDesc, value);
export const splashDam = value => _item('splashDam', sec.splashDamDesc, value);
export const ranged = () => _item('ranged', sec.rangedDesc, true);
export const twoHanded = () => _item('twoHanded', sec.twoHandedDesc, true);
export const dodgePlus = value => _item('dodgePlus', sec.dodgePlusDesc, value);
export const heavy = value => _item('heavy', sec.heavyDesc, value);
export const protect = value => _item('protect', sec.protectDesc, value);
export const vitalProtect = value => _item('vitalProtect', sec.vitalProtectDesc, value);
export const rarePlus = value => _item('rarePlus', sec.rarePlusDesc, value);
export const steal = value => _item('steal', sec.stealDesc, value);
export const stealMinus = value => _item('stealMinue', sec.stealMinueDesc, value);
export const inspire = value => _item('inspire', sec.inspireDesc, value);
export const intimidate = value => _item('intimidate', sec.intimidateDesc, value);
export const intimidateDef = () => _item('intimidateDef', sec.intimidateDefDesc, true);
export const poisonPlus = value => _item('poisonPlus', sec.poisonPlusDesc, value);
export const poisonDef = () => _item('poisonDef', sec.poisonDefDesc, true);

