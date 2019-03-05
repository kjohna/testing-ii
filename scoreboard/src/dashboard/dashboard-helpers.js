export function strikeCounter(state) {
  let updatedStrikes = state.strikes;
  updatedStrikes ++;
  if(updatedStrikes > 3) {
    updatedStrikes = 0;
  }
  return {
    ...state,
    strikes: updatedStrikes
  }
}