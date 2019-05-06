export function getLevel (state) {
  return state.invested.reduce((total, current) => total + current, 0);
};
