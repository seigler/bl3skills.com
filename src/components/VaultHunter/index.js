import { useState } from 'preact/hooks';
import Skill from '@components/Skill';
import style from './index.css';

const initialState = {
  invested: [12, 0, 20],
};

export default function VaultHunter ({
  name = 'Unnamed',
  discipline = 'Classless',
  skills = {},
}) {
  const [build] = useState(initialState);
  const trees =
    Object.keys(skills).map((treename, treeindex) =>
      <div
        class={`${style.tree} ${[style.green, style.blue, style.red][treeindex]}`}
        style={{ '--invested': build.invested[treeindex] }}
      >
        <h2 class={style.treeName}>{ treename }</h2>
        { Object.keys(skills[treename]).map((tier, tierindex) =>
          <div class={style.tier}>
            { Object.keys(skills[treename][tier]).map(
              skillname => <Skill
                {...skills[treename][tier][skillname]}
                name={skillname}
                enabled={build.invested[treeindex] >= 5 * tierindex - 5}
              />
            ) }
          </div>
        ) }
      </div>
    );

  return (
    <div class={style.VaultHunter}>
      <h2>{ name } the { discipline }</h2>
      <div class={style.trees}>
        { trees }
      </div>
    </div>
  );
}
