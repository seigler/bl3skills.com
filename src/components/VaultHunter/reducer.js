import deepmerge from 'deepmerge';
import investmentValidator from './investmentValidator';
import { setHash } from './hashHandler';

export default function reducer (state, action) {
  switch (action.type) {
    case 'skillChange':
      var newSkills = deepmerge(state.skills, {
        [action.treeName]: {
          [action.tierIndex]: {
            [action.skillIndex]: {
              invested: action.newValue,
            }
          }
        }
      });
      const skillChangeTotals = investmentValidator(newSkills);
      if (skillChangeTotals) {
        setHash(newSkills);
        return {
          ...state,
          invested: skillChangeTotals,
          skills: newSkills,
        };
      } else {
        return state;
      }
    case 'loadSkills':
      const loadSkillsTotals = investmentValidator(action.skills);
      if (loadSkillsTotals) {
        return {
          ...state,
          invested: loadSkillsTotals,
          skills: deepmerge(state.skills, action.skills),
        };
      } else {
        return state;
      }
  }
}
