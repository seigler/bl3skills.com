// import { useState } from 'preact/hooks';
import SKILLS from '@constants/skills';
import style from './index.css';

function getInitials (string) {
  const initials = string.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

export default function VaultHunter ({
  name = '?',
  text = 'Long description',
  ranks = 0,
  invested = 0,
  effect = rank => `Rank ${rank} effect`,
  type = null,
  enabled = true,
}) {
  const isAugment = [
    SKILLS.AUGMENT_CHEVRON,
    SKILLS.AUGMENT_DIAMOND,
    SKILLS.ACTION_SKILL,
  ].includes(type);
  let shapeStyle = null;
  if (type === SKILLS.AUGMENT_CHEVRON) { shapeStyle = style.chevron; }
  if (type === SKILLS.AUGMENT_DIAMOND) { shapeStyle = style.diamond; }
  if (type === SKILLS.ACTION_SKILL) { shapeStyle = style.actionSkill; }
  return (
    <div class={[
      style.skill,
      isAugment ? style.augment : '',
      shapeStyle,
      enabled ? style.enabled : '',
      enabled && (ranks === 0 || invested > 0) ? style.usable : '',
    ].join(' ')}>
      { getInitials(name) }
      { enabled && ranks > 0 && <div class={style.ranks}>{invested}/{ranks}</div>}
    </div>
  );
}
