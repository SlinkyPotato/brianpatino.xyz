import { render, screen } from '@testing-library/react';
import App from './App';

test('Brian Patino exists', () => {
  render(<App />);
  const nameElements = screen.getAllByText(/Brian Patino/i);
  expect(nameElements).toBeDefined();
});
