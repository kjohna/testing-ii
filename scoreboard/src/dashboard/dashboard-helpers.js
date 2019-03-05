export function strikeCounter(state) {
  let updatedStrikes = state.strikes;
  let updatedBalls = state.balls;
  updatedStrikes ++;
  if(updatedStrikes > 2) {
    updatedStrikes = 0;
    updatedBalls = 0;
  }
  return {
    ...state,
    strikes: updatedStrikes,
    balls: updatedBalls
  }
}