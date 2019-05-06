import SKILLS from '@constants/skills';

/* eslint-disable quotes */
const skills = {
  "Tree One": {
    "0": {
      "?": {
        text: "?",
        type: SKILLS.ACTION_SKILL,
        ranks: 0,
        effect: (rank, level) => `?`,
      },
    },
  },
  "Tree Two": {
    "0": {
      "?": {
        text: "?",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `?`,
      },
    },
  },
  "Tree Three": {
    "0": {
      "?": {
        text: "?",
        type: SKILLS.ACTION_SKILL,
        effect: (rank, level) => `?`,
      },
    },
  },
};

export default skills;
