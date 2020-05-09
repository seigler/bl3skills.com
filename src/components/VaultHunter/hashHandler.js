export function setHash (skillsState) {
  const hashparts = [];
  for (let tree of Object.values(skillsState)) {
    for (let tier of Object.values(tree)) {
      for (let skill of Object.values(tier)) {
        if (skill && skill.type == null) {
          hashparts.push(skill.invested || 0);
        }
      };
    };
  };
  const url = window.location.href.split('#')[0] + '#' + hashparts.join('');
  window.location.replace(url);
};

export function getHash (skillsState) {
  const hash = window.location.href.split('#')[1] || '';
  const hashparts = hash.match(/./g) || [];
  const skills = JSON.parse(JSON.stringify(skillsState));
  for (let tree of Object.keys(skills)) {
    for (let tier of Object.keys(skills[tree])) {
      for (let skill of Object.keys(skills[tree][tier])) {
        if (skills[tree][tier][skill]) {
          if (skills[tree][tier][skill].type == null) {
            skills[tree][tier][skill] = { invested: parseInt(hashparts.shift() || 0) };
          } else {
            skills[tree][tier][skill] = {};
          }
        }
      };
    };
  };
  return skills;
};
