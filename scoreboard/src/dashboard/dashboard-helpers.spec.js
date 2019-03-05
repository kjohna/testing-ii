const { 
  strikeCounter, 
  ballCounter,
  recordHit 
} = require('./dashboard-helpers.js');

describe('dashboard-helpers.js', () => {
  describe('countStrike()', () => {
    it('should increment strike count', () => {
      const state = {
        balls: 0,
        strikes: 0,
      }
      expect(strikeCounter(state).strikes).toBe(1);
    })

    it('should reset balls and strikes when strikes reaches 3', () => {
      const startState = {
        balls: 3,
        strikes: 2,
      }
      const finalState = {
        balls: 0,
        strikes: 0,
      }
      expect(strikeCounter(startState)).toEqual(finalState);
    })
  });

  describe('countBall()', () => {
    it('should increment ball count', () => {
      const state = {
        balls: 0,
        strikes: 0,
      }
      expect(ballCounter(state).balls).toBe(1);
    })

    it('should reset balls and strikes when balls reaches 4', () => {
      const startState = {
        balls: 3,
        strikes: 2,
      }
      const finalState = {
        balls: 0,
        strikes: 0,
      }
      expect(ballCounter(startState)).toEqual(finalState);
    })
  });

  describe('recordHit()', () => {
    it('should reset balls and strikes when hit is recorded', () => {
      const startState = {
        balls: 3,
        strikes: 2,
        hit: false,
      }
      const finalState = {
        balls: 0,
        strikes: 0,
        hit: true,
      }
      expect(recordHit(startState)).toEqual(finalState);
    })
  })
});