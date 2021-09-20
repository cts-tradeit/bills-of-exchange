import { render, screen } from '@testing-library/react';
import App from './App';

test('renders main app bar', () => {
  render(<App />);
  const linkElement = screen.getByTestId("appBar");
  expect(linkElement).toBeInTheDocument();
});
