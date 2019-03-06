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

  it('should display "Count Strike" button', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/count strike/i);

    expect(text).toBeInTheDocument();
  });

  it('should display "Count Ball" button', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/count ball/i);

    expect(text).toBeInTheDocument();
  });

  it('should display "Count Hit" button', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/count hit/i);

    expect(text).toBeInTheDocument();
  });

  it('should display "Count Foul" button', () => {
    const { getByText } = render(<Dashboard />);

    const text = getByText(/count foul/i);

    expect(text).toBeInTheDocument();
  });
});