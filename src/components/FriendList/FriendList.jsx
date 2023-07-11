import PropTypes from 'prop-types';
import css from './FriendList.module.css';

export const FriendList = ({ friends }) => {
  return (
    <ul className={css.friendList}>
      {friends.map(friend => {
        return (
          <li className={css.item} key ={friend.id}>
            <div className={friend.isOnline ? css.iconOnline : css.iconOffline }></div>
            <span className={css.status}></span>
            <img className={css.avatar} src={friend.avatar} alt="User avatar" width="48" />
            <p className={css.name}>{friend.name}</p>
          </li>
        )}
      )}
    </ul>
  );
};

FriendList.propTypes = {
  friends: PropTypes.PropTypes.arrayOf(
    PropTypes.shape({ 
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
     })
  ).isRequired,
};