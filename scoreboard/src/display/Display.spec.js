import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display';

describe('<Display />', () => {
  it('should display provided balls and strikes count', () => {
    const balls = 2;
    const strikes = 1;
    const { getByTestId } = render(<Display balls={balls} strikes={strikes} />);

    expect(getByTestId('balls-display').textContent).toBe(balls.toString());
    expect(getByTestId('strikes-display').textContent).toBe(strikes.toString());
  });
});