import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Travelling is Fun and memories cherish forever/i);
  expect(linkElement).toBeInTheDocument();
});
