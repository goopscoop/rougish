export const __ability = ({
  label = '',
  code = '',
  description = '',
  isActive = true,
  targets = 'party', // or enemy
  splash = false,
  baseDam = 0,
  effects = [],
  isUnlocked = false
}) => ({
  label,
  code,
  description,
  isActive,
  targets,
  splash,
  baseDam,
  effects,
  isUnlocked
});
