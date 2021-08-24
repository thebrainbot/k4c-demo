import { render, screen } from '@testing-library/react';
import App from './App';

test('It renders title', () => {
  render(<App />);
  const header = screen.getByText(/Home/i);
  expect(header).toBeInTheDocument();
});

test('It renders a card list', () => {
  const {container} = render(<App />);
  const cardList = container.querySelector('[data-test-id="card-list"]');
  expect(cardList).toBeInTheDocument();
});
