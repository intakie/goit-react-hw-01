import Profile from '../Profile/Profile';
import FriendList from '../FriendList/FriendList';
// import FriendListItem from '../FriendListItem/FriendListItem';
import userData from '../userData.json';
import friends from '../friends.json';
import css from './App.module.css';
console.log(css);

export default function App() {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      <FriendList friends={friends} />
    </>
  );
}
