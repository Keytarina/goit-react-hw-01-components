import { Profile } from './Profile/Profile'
import user from './Profile/user.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* #1 Компонент Profile */}
      <Profile
        username={user.username}
        tag={user.username}
        location ={user.location }
        avatar ={user.avatar }
        stats ={user.stats }
      />

    </div>
  );
};
