import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import App from './App';

test('Renders Hi message with emoji', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/Hi 👋/i);
  expect(linkElement).toBeInTheDocument();
});

test('Renders Name message', () => {
  const { getByText } = render(<App />);
  const linkElement = getByText(/I'm Sam Wells/i);
  expect(linkElement).toBeInTheDocument();
});
