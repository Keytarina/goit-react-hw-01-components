// import { Profile } from 'components/Profile/Profile.jsx'
// import user from 'components/Profile/user.json';
// s
import { FriendList } from 'components/FriendList/FriendList.jsx'
import friends from 'components/FriendList/friends.json';
// import { Transactions } from 'components/TransactionHistory/TransactionHistory.jsx'
// import transactions from 'components/TransactionHistory/transactions.json';

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101'
      }}
    >
      {/* #1 Компонент Profile */}
      {/* <Profile
        username={user.username}
        tag={user.tag}
        location ={user.location }
        avatar ={user.avatar }
        stats ={user.stats }
      /> */}

      {/* <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} /> */}

      {/* #1 Компонент FriendList */}
      <FriendList
        friends={friends}
      />
    </div>
  );
};
