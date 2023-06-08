import user from './Profile/user.json';
import Profile from './Profile/Profile'; // Import komponentu Profile

import data from './Statistics/data.json';
import Statistics from './Statistics/Statistics'; // Import komponentu Statistics

import friends from './FriendList/friends.json';
import FriendList from './FriendList/FriendList'; // Import komponentu FriendList

import transactions from './TransactionHistory/transactions.json';
import TransactionHistory from './TransactionHistory/TransactionHistory'; // Import komponentu TransactionHistory

export const App = () => {
  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        fontSize: 40,
        color: '#010101',
      }}
    >
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}
      />
      <Statistics stats={data} />
      <FriendList friends={friends} />;
      <TransactionHistory items={transactions} />
    </div>
  );
};
