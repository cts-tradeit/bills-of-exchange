import React from 'react';
import { render, screen } from '@testing-library/react';
import MainComponent from './MainComponent';

test('renders menu item "Parties"', () => {
  render(<MainComponent />);
  const linkElement = screen.getByText(/Parties/i);
  expect(linkElement).toBeInTheDocument();
});
