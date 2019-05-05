import { useReducer } from 'preact/hooks';
import deepmerge from 'deepmerge';
import Skill from '@components/Skill';
import investmentValidator from './investmentValidator';
import style from './index.css';

function reducer (state, action) {
  switch (action.type) {
    case 'skillChange':
      var newInvested = state.invested.slice(0);
      newInvested[action.treeIndex] += action.newValue - action.oldValue;
      var newSkills = deepmerge(state.skills, {
        [action.treeName]: {
          [action.tierIndex + '']: {
            [action.skillName]: {
              invested: action.newValue,
            }
          }
        }
      });
      if (investmentValidator(newSkills)) {
        return {
          ...state,
          invested: newInvested,
          skills: newSkills,
        };
      } else {
        return state;
      }
  }
}

function contextKiller (event) {
  event.preventDefault();
  return false;
}

export default function VaultHunter ({
  name = 'Unnamed',
  discipline = 'Classless',
  skills = {},
}) {
  const initialState = {
    invested: [0, 0, 0],
    skills,
  };
  const [state, dispatch] = useReducer(reducer, initialState);
  const trees =
    Object.keys(state.skills).map((treeName, treeIndex) =>
      <div
        class={`${style.tree} ${[style.green, style.blue, style.red][treeIndex]}`}
        style={{
          '--invested': state.invested[treeIndex],
          '--tree-index': treeIndex,
        }}
      >
        <h2 class={style.treeName}>{ treeName }</h2>
        <div class={style.skills}>
          { Object.keys(state.skills[treeName]).map((tier, tierIndex) =>
            <div class={style.tier}>
              { Object.keys(state.skills[treeName][tier]).map(skillName =>
                <Skill
                  {...state.skills[treeName][tier][skillName]}
                  name={skillName}
                  enabled={state.invested[treeIndex] >= 5 * tierIndex - 5}
                  onChange={skillChangeListenerFactory(skillName, treeIndex, treeName, tierIndex)}
                />
              ) }
            </div>
          ) }
        </div>
      </div>
    );

  function skillChangeListenerFactory (skillName, treeIndex, treeName, tierIndex) {
    return (oldValue, newValue) => {
      dispatch({
        type: 'skillChange',
        skillName,
        treeIndex,
        treeName,
        tierIndex,
        newValue,
        oldValue,
      });
    };
  }

  return (
    <div class={style.VaultHunter} onContextMenu={contextKiller}>
      <h1 class={style.title}>{ name }
        <div class={style.subtitle}>the { discipline }</div>
      </h1>
      <div class={style.trees}>
        { trees }
      </div>
    </div>
  );
}
