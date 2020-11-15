import { describe, test, expect } from '@jest/globals';
import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

describe('App', () => {
  test('renders App', () => {
    const { getByText } = render(<App />);
    const linkElement = getByText(/Hide/i);
    expect(linkElement).toBeInTheDocument();
  });
});
