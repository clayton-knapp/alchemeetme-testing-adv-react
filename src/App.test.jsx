import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

// const user = {
//   id: 1,
//   created_at: '2021-12-13T00:17:29+00:00',
//   name: 'Vonta',
//   avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
//   header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
//   likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
//   motto: 'Res Non Verba',
//   color: 'crimson',
// };

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
    await screen.findByText('Vonta');

    // screen.debug()
  });

  // STRETCH
  // it('Should render the header background color', async () => {
  //   render(<App />)

  //   // test for background color

  //   // screen.debug()
  // })
});
