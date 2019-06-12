import SKILLS from '@constants/skills';
import style from './index.css';

function getInitials (string) {
  const numWords = (string.match(/\s/g) || []).length + 1;
  switch (numWords) {
    case 1:
      return string.slice(0, 3);
    case 2:
      return (string.match(/^\w{1,2}|\s\w{1,2}/g) || []).join('').replace(/\s/g, '');
    default:
      return (string.match(/^\w|\s\w/g) || []).join('').replace(/\s/g, '');
  }
}

export default function Skill ({
  name = '?',
  text = 'Long description',
  ranks = 0,
  invested = 0,
  tier = 0,
  level = 1,
  effect = (rank, level) => `Rank ${rank} effect`,
  type = null,
  enabled = true,
  image = null,
  onChange = (oldValue, newValue) => null,
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
  function clickListener (event) {
    var newValue;
    if (event.type === 'click') {
      newValue = Math.min(invested + 1, ranks);
    } else { //  (event.type === 'contextmenu')
      newValue = Math.max(invested - 1, 0);
    }
    if (enabled && invested !== newValue) {
      onChange(invested, newValue);
    }
    event.preventDefault();
    return false;
  }
  return (
    <div
      class={[
        style.skill,
        isAugment ? style.augment : '',
        shapeStyle,
        enabled ? style.enabled : '',
        enabled && (ranks === 0 || invested > 0) ? style.usable : '',
      ].join(' ')}
      onClick={clickListener}
      onContextMenu={clickListener}
    >
      <div class={style.image}><img src={image} alt={getInitials(name)} /></div>
      { enabled && ranks > 0 && <div class={style.ranks}>{invested}/{ranks}</div>}
      <div class={style.description}>
        <h3 class={style.skillTitle}>{name}</h3>
        {text}
        { invested > 0 &&
          <div class={style.effect}>
            Current Effect:<br />
            {effect(invested, level)}
          </div>
        }
        { type !== null &&
          <div class={style.effect}>
            {effect(1, level)}
          </div>
        }
        { type == null && invested < ranks &&
          <div class={style.effect}>
            Next Rank:<br />
            {effect(invested + 1, level)}
          </div>
        }
      </div>
    </div>
  );
}
