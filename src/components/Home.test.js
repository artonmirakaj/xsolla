import { render, screen } from '@testing-library/react';
import Home from './Home';

test('renders learn react link', () => {
  render(<Home />);
  const linkElement = screen.getByText(/^welcome to star wars$/i);
  expect(linkElement).toBeInTheDocument();
});