import { render, screen } from '@testing-library/react';
import App from './App';

test('renders OctoFit Tracker navbar title', () => {
  render(<App />);
  const navbarBrand = screen.getByText(/octofit tracker/i);
  expect(navbarBrand).toBeInTheDocument();
});
