import { render, screen } from '@testing-library/react';
import Header from './Header';

test('It renders the header default', () => {
  render(<Header />);
  const header = screen.getByText(/Home/i);
  expect(header).toBeInTheDocument();
});

test('It renders the header with correct title from prop', () => {
  render(<Header title="Test page" />);
  const header = screen.getByText(/Test Page/i);
  expect(header).toBeInTheDocument();
});
