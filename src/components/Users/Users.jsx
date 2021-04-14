import React from 'react';
import PropTypes from 'prop-types';
import styles from './Users.module.css';

const Users = ({
  users, follow, unfollow, setUsers,
}) => {
  if (users.length === 0) {
    setUsers([
      {
        id: 1,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        followed: false,
        fullName: 'Dmitry',
        status: 'I am a boss',
        location: { city: 'Minsk', country: 'Belarus' },
      },
      {
        id: 2,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        followed: true,
        fullName: 'Sasha',
        status: 'I am a too',
        location: { city: 'Moscow', country: 'Russia' },
      },
      {
        id: 3,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        followed: false,
        fullName: 'Tolya',
        status: 'I am as well',
        location: { city: 'Kiev', country: 'Ukraine' },
      },
      {
        id: 4,
        photoUrl: 'https://upload.wikimedia.org/wikipedia/commons/9/99/Sample_User_Icon.png',
        followed: false,
        fullName: 'Ben',
        status: 'No, I am a boss',
        location: { city: 'Seattle', country: 'USA' },
      },
    ]);
  }

  return (
    <div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photoUrl} alt="user avatar" className={styles.photo} />
            </div>
            <div>
              {user.followed
                ? <button type="button" onClick={() => unfollow(user.id)}>Unfollow</button>
                : <button type="button" onClick={() => follow(user.id)}>Follow</button>}
            </div>
          </span>
          <span>
            <span>
              <div>{user.fullName}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>{user.location.country}</div>
              <div>{user.location.city}</div>
            </span>
          </span>
        </div>
      ))}
    </div>
  );
};

Users.propTypes = {
  users: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      photoUrl: PropTypes.string.isRequired,
      followed: PropTypes.bool.isRequired,
      fullName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default Users;
