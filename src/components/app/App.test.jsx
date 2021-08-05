import React from 'react';
import { render, cleanup } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', async () => {
    const { asFragment } = render(
      <Router>
        <App />
      </Router>
    );
    expect(asFragment()).toMatchSnapshot();
  });
});
