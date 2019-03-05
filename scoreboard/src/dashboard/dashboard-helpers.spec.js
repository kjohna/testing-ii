const { strikeCounter } = require('./dashboard-helpers.js');

describe('dashboard-helpers.js', () => {
  describe('countStrike()', () => {
    it('should increment strike count', () => {
      const state = {
        balls: 0,
        strikes: 0,
      }
      expect(strikeCounter(state).strikes).toBe(1);
    })
  })
});