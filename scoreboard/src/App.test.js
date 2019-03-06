import React from 'react';
import { render, fireEvent } from 'react-testing-library';
import 'jest-dom/extend-expect';

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

  it('counts balls', () => {
    const { getByText, getByTestId } = render(<App />);

    const countBallButton = getByText(/count ball/i);
    const ballDisplay = getByTestId('balls-display');

    fireEvent.click(countBallButton);
    
    expect(ballDisplay.textContent).toBe("1");  // ball count is initialized at 0 in App's state
  });

  it('records hit', () => {
    const { getByText, getByTestId } = render(<App />);

    const recordHitButton = getByText(/count hit/i);

    fireEvent.click(recordHitButton);

    expect(getByText(/Hit!/i)).toBeInTheDocument();

  });

  it('records foul', () => {
    const { getByText, getByTestId } = render(<App />);

    const recordFoulButton = getByText(/count foul/i);

    fireEvent.click(recordFoulButton);

    expect(getByText(/Foul!/i)).toBeInTheDocument();

  });
});