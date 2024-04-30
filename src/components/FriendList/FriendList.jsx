import css from './FriendList.module.css';
import FriendListItem from '../FriendListItem/FriendListItem';
import friends from '../friends.json';

export default function FriendList() {
  return (
    <ul className={css.list}>
      {friends.map(friend => (
        <li key={friend.id}>
          <FriendListItem
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}
