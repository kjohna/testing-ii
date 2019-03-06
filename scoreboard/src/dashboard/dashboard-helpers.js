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
    balls: updatedBalls,
    hit: false,
  }
}

export function ballCounter(state) {
  let updatedStrikes = state.strikes;
  let updatedBalls = state.balls;
  updatedBalls ++;
  if(updatedBalls > 3) {
    updatedStrikes = 0;
    updatedBalls = 0;
  }
  return {
    ...state,
    strikes: updatedStrikes,
    balls: updatedBalls,
    hit: false,
  }
}

export function recordHit(state) {
  return {
    ...state,
    balls: 0,
    strikes: 0,
    hit: true,
  }
}