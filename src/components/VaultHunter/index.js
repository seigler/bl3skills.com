import { useState } from 'preact/hooks';

import SKILLS from '@constants/skills';
import style from './index.css';

function getInitials(string) {
  const initials = string.match(/\b\w/g) || [];
  return ((initials.shift() || '') + (initials.pop() || '')).toUpperCase();
}

export default function VaultHunter ({name = 'Unnamed', discipline = 'Classless', skills = {}}) {
  const [build, setBuild] = useState(skills);
  const trees =
    Object.keys(build).map((treename, index) =>
      <div class={ `${style.tree} ${[style.blue, style.red, style.green][index]}` }>
        <h2 class={ style.treeName }>{ treename }</h2>
        { Object.keys(build[treename]).map(tier =>
          <div class={ style.tier }>
            { Object.keys(build[treename][tier]).map(skillname => {
              const skill = build[treename][tier][skillname];
              const isAugment = [SKILLS.AUGMENT_CHEVRON, SKILLS.AUGMENT_DIAMOND].includes(skill.type);
              let shapeStyle = null;
              if (skill.type === SKILLS.AUGMENT_CHEVRON) { shapeStyle = style.chevron; }
              if (skill.type === SKILLS.AUGMENT_DIAMOND) { shapeStyle = style.diamond; }
              if (skill.type === SKILLS.ACTION_SKILL) { shapeStyle = style.actionSkill; }
              return (
                <div class={ [
                  style.skill,
                  isAugment ? style.augment : '',
                  shapeStyle,
                  skill.bought ? style.bought : '',
                ].join(' ') }>
                  { getInitials(skillname) }
                </div>
              )
            } ) }
          </div>
        ) }
      </div>
    );

	return (
    <div class={ style.VaultHunter }>
      <h2>{ name } the { discipline }</h2>
      <div class={ style.trees }>
        { trees }
      </div>
    </div>
	);
}
