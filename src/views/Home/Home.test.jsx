import { render, screen, waitFor } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Home from './Home';
import Profile from '../../components/Profile/Profile';

const user = {
  id: 1,
  created_at: '2021-12-13T00:17:29+00:00',
  name: 'Vonta',
  avatar: 'https://thumbs.gfycat.com/NiceRequiredGrunion-size_restricted.gif',
  header: 'https://static.wikia.nocookie.net/naruto/images/5/50/Team_Kakashi.png',
  likes: ['React', 'Anime', 'Traveling', 'Living', 'Tower Defense Games', 'Card Games'],
  motto: 'Res Non Verba',
  color: 'crimson',
};

describe('Profile Tests', () => {
  test('Should render the user profile', async () => {
    render(
      <MemoryRouter>
        <Home user={user} />
      </MemoryRouter>
    );

    // screen.debug();

    // const heading = screen.getByRole('heading');
    // expect(heading.textContent).toEqual('Vonta');

    // check for profile name
    await waitFor(() => {
      const profile = screen.getByText(/vonta/i);
      expect(profile.textContent).toBe('Vonta');
    });

    // check for motto
    await waitFor(() => {
      const motto = screen.getByText(/res non verba/i);
      expect(motto.textContent).toBe('Res Non Verba');
    });

    // check for interests heading
    waitFor(() => {
      const interestsHeading = screen.getByText(/interests/i);
      expect(interestsHeading.textContent).toBe('Interests');
    });

    // test for avatar image
    screen.getByAltText('avatar');

    // test for header image
    screen.getByAltText('header');

    // test for list of interests
    const list = screen.getAllByRole('listitem');
    expect(list.length).toEqual(6);
  });
});
