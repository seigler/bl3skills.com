export default function investmentValidator (skills) {
  let totalSpent = 0;
  let treeTotals = [0, 0, 0];
  let treeIndex = 0;
  for (let tree of Object.values(skills)) {
    let treeTotal = 0;
    let tierIndex = 0;
    for (let tier of Object.values(tree)) {
      let tierTotal = 0;
      for (let skill of Object.values(tier)) {
        if (skill) {
          if (skill.invested < 0 || skill.invested > skill.ranks) { return false; }
          tierTotal += skill.invested || 0;
        }
      };
      if (tierTotal > 0 && treeTotal + 5 < tierIndex * 5) { return false; }
      treeTotal += tierTotal;
      tierIndex += 1;
    };
    treeTotals[treeIndex] = treeTotal;
    totalSpent += treeTotal;
    treeIndex += 1;
  };
  if (totalSpent > (50 - 3) + 11 + 11) { return false; }
  return treeTotals;
}
