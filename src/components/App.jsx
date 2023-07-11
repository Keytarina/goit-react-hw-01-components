import { Profile } from 'components/Profile/Profile.jsx'
import user from 'components/Profile/user.json'

import { Statistics } from 'components/Statistics/Statistics.jsx'
import data from 'components/Statistics/data.json'

import { FriendList } from 'components/FriendList/FriendList.jsx'
import friends from 'components/FriendList/friends.json'

import { TransactionHistory } from 'components/TransactionHistory/TransactionHistory.jsx'
import transactions from 'components/TransactionHistory/transactions.json'


export const App = () => {
  return (
    <div
      style={{ 
        // height: '100vh',
        display: 'flex',
        padding: "20px",
        flexDirection: "column",
        justifyContent: 'center',
        alignItems: 'center',
        gap: '30px',
        fontSize: 40,
        color: '#010101'
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location ={user.location }
        avatar ={user.avatar }
        stats ={user.stats }
      />
      <Statistics title="Upload stats" stats={data} />
      <Statistics stats={data} />
      <FriendList
        friends={friends}
      />
      <TransactionHistory transactions={transactions} />
    </div>
  );
};
