import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

describe('Header Tests', () => {
  it('Should render the header image', () => {
    render(<App />);

    // test for header image
    screen.getByAltText('Alchemy Logo');

    // screen.debug()
  });

  it('Should render the header profile name', async () => {
    render(<App />);

    // test for profile name
    const profileName = await screen.findByLabelText('profile-name');
    expect(profileName).toBeInTheDocument();

    // screen.debug()
  });

  // STRETCH
  // it('Should render the header background color', async () => {
  //   render(<App />)

  //   // test for background color

  //   // screen.debug()
  // })
});
