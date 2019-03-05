import React from 'react';
import { render, fireEvent } from 'react-testing-library';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    const helpers = render(<App />);
  });

  it('counts strikes', () => {
    const { getByText, getByTestId } = render(<App />);

    const countStrikeButton = getByText(/count strike/i);
    const strikeDisplay = getByTestId('strikes-display');

    fireEvent.click(countStrikeButton);
    
    expect(strikeDisplay.textContent).toBe("1");  // strike count is initialized at 0 in App's state
  });
});