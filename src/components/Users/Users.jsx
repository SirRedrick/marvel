import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import styles from './Users.module.css';
import userIcon from '../../assets/images/default-user-icon.png';

class Users extends React.Component {
  componentDidMount() {
    const {
      pageSize, currentPage, setUsers, setTotalUsersCount,
    } = this.props;
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      )
      .then((res) => {
        setUsers(res.data.items);
        setTotalUsersCount(res.data.totalCount);
      });
  }

  onPageChange = (page) => {
    const { setCurrentPage, pageSize, setUsers } = this.props;
    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
      .then((res) => {
        setUsers(res.data.items);
      });
    setCurrentPage(page);
  };

  render() {
    const {
      users, pageSize, totalUsersCount, currentPage, follow, unfollow,
    } = this.props;
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
              onClick={() => this.onPageChange(page)}
            >
              {page}
            </button>
          ))}
        </div>
        {users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img
                  src={user.photos.small || userIcon}
                  alt="user avatar"
                  className={styles.photo}
                />
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
  }
}

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
  pageSize: PropTypes.number.isRequired,
  totalUsersCount: PropTypes.number.isRequired,
  currentPage: PropTypes.number.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

export default Users;
