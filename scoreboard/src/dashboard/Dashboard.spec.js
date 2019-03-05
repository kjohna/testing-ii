import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('<Dashboard />', () => {
  it('should display the dashboard', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/dashboard/i);

    expect(text).toBeInTheDocument();
  });

  it('should display strike button', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/strike/i);

    expect(text).toBeInTheDocument();
  })
});