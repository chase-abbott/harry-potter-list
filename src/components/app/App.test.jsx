import React from 'react';
import { render, cleanup, screen } from '@testing-library/react';
import { MemoryRouter as Router } from 'react-router';
import App from './App';

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', async () => {
    render(
      <Router>
        <App/>
      </Router>
    );
    screen.getByText('Loading...');

    const ul = await screen.findAllByRole('list');
    expect(ul[0]).not.toBeEmptyDOMElement();
  }
  );

  it('renders detail page', async () => {
    render(
      <Router initialEntries={['/detail/1']}>
        <App/>
      </Router>
    );

    screen.getByText('Loading...');
    const image = await screen.findByAltText('Rick Sanchez');

    expect(image).toBeVisible();
    
  }
  );
});


