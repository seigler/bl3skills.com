export default function investmentValidator (skills) {
// ok &= (
//   (level == thisLevel && total == 0 && treeTotal >= invested + total) ||
//   (level != thisLevel && total == 0) ||
//   (total > 0 && (level * 5 <= invested))
// );
  console.log('----------------------');
  let totalSpent = 0;
  for (let tree of Object.values(skills)) {
    let treeTotal = 0;
    let tierIndex = 0;
    for (let tier of Object.values(tree)) {
      let tierTotal = 0;
      for (let skill of Object.values(tier)) {
        if (skill.invested < 0 || skill.invested > skill.ranks) { return false; }
        tierTotal += skill.invested || 0;
      };
      // console.log(`${tierTotal} > 0 && ${treeTotal} + 5 < ${tierIndex} * 5 = ${!(tierTotal > 0 && treeTotal + 5 < tierIndex * 5)}`);
      if (tierTotal > 0 && treeTotal + 5 < tierIndex * 5) { return false; }
      treeTotal += tierTotal;
      tierIndex += 1;
    };
    totalSpent += treeTotal;
  };
  if (totalSpent > 47) { return false; }
  return true;
}
