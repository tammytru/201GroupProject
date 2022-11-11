import { render, screen } from '@testing-library/react';
import { ExplorePage } from './pages';

test('renders learn react link', () => {
  render(<ExplorePage />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
