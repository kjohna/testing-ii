const { 
  strikeCounter, 
  ballCounter,
  recordHit,
  recordFoul,
} = require('./dashboard-helpers.js');

describe('dashboard-helpers.js', () => {
  describe('strikeCounter()', () => {
    it('should increment strike count', () => {
      const state = {
        strikes: 0
      }
      // console.log(strikeCounter(state));
      expect(strikeCounter(state).strikes).toBe(1);
    });

    it('should reset balls and strikes when strikes reaches 3', () => {
      const startState = {
        balls: 3,
        strikes: 2,
      }
      const finalState = {
        balls: 0,
        strikes: 0,
      }
      expect(strikeCounter(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should reset hit to false', () => {
      const startState = {
        hit: true,
      }
      const finalState = {
        hit: false,
      }
      expect(strikeCounter(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should reset foul to false', () => {
      const startState = {
        foul: true,
      }
      const finalState = {
        foul: false,
      }
      expect(strikeCounter(startState)).toEqual(expect.objectContaining(finalState));
    });
  });

  describe('ballCounter()', () => {
    it('should increment ball count', () => {
      const state = {
        balls: 0,
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
      expect(ballCounter(startState)).toEqual(expect.objectContaining(finalState));
    })

    it('should reset hit to false', () => {
      const startState = {
        hit: true,
      }
      const finalState = {
        hit: false,
      }
      expect(ballCounter(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should reset foul to false', () => {
      const startState = {
        foul: true,
      }
      const finalState = {
        foul: false,
      }
      expect(ballCounter(startState)).toEqual(expect.objectContaining(finalState));
    });
  });

  describe('recordHit()', () => {
    it('should reset balls and strikes when hit is recorded', () => {
      const startState = {
        balls: 3,
        strikes: 2,
      }
      const finalState = {
        balls: 0,
        strikes: 0,
      }
      expect(recordHit(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should reset foul to false', () => {
      const startState = {
        foul: true,
      }
      const finalState = {
        foul: false,
      }
      expect(recordHit(startState)).toEqual(expect.objectContaining(finalState));
    });
  });

  describe('recordFoul()', () => {
    it('should set foul state to true', () => {
      const startState = {
        foul: false,
      }
      const finalState = {
        foul: true,
      }
      // console.log(recordFoul(startState));
      // console.log(finalState);
      // i guess this works too:
      // expect(recordFoul(startState)).toEqual(finalState);
      expect(recordFoul(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should increase strikes by 1', () => {
      const startState = {
        strikes: 0,
      }
      const finalState = {
        strikes: 1,
      }
      expect(recordFoul(startState)).toEqual(expect.objectContaining(finalState));
    });

    it('should not increase strikes beyond 2', () => {
      const startState = {
        strikes: 2,
      }
      const finalState = {
        strikes: 2,
      }
      expect(recordFoul(startState)).toEqual(expect.objectContaining(finalState));
    })

    it('should reset hit to false', () => {
      const startState = {
        hit: true,
      }
      const finalState = {
        hit: false,
      }
      expect(recordFoul(startState)).toEqual(expect.objectContaining(finalState));
    });
  });
});