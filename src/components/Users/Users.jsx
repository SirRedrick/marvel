import React from 'react';
import PropTypes from 'prop-types';
import styles from './Users.module.css';
import userIcon from '../../assets/images/default-user-icon.png';

const Users = ({
  users,
  currentPage,
  follow,
  unfollow,
  onPageChange,
  totalUsersCount,
  pageSize,
}) => {
  const pageCount = Math.ceil(totalUsersCount / pageSize);
  const pages = [];
  for (let i = 1; i <= pageCount; i += 1) {
    pages.push(i);
  }
  return (
    <div>
      <div>
        {pages.map((page) => (
          <button
            type="button"
            key={page}
            className={currentPage === page ? styles.selectedPage : undefined}
            onClick={() => onPageChange(page)}
          >
            {page}
          </button>
        ))}
      </div>
      {users.map((user) => (
        <div key={user.id}>
          <span>
            <div>
              <img src={user.photos.small || userIcon} alt="user avatar" className={styles.photo} />
            </div>
            <div>
              {user.followed ? (
                <button type="button" onClick={() => unfollow(user.id)}>
                  Unfollow
                </button>
              ) : (
                <button type="button" onClick={() => follow(user.id)}>
                  Follow
                </button>
              )}
            </div>
          </span>
          <span>
            <span>
              <div>{user.name}</div>
              <div>{user.status}</div>
            </span>
            <span>
              <div>user.location.country</div>
              <div>user.location.city</div>
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
      photoUrl: PropTypes.string,
      followed: PropTypes.bool.isRequired,
      fullName: PropTypes.string.isRequired,
      status: PropTypes.string.isRequired,
      location: PropTypes.shape({
        city: PropTypes.string.isRequired,
        country: PropTypes.string.isRequired,
      }).isRequired,
    }).isRequired,
  ).isRequired,
  unfollow: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  onPageChange: PropTypes.func.isRequired,
  currentPage: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  pageSize: PropTypes.number.isRequired,
};

export default Users;
