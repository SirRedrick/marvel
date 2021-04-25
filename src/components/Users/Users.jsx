import React from 'react';
import PropTypes from 'prop-types';
import * as axios from 'axios';
import styles from './Users.module.css';
import userIcon from '../../assets/images/default-user-icon.png';

class Users extends React.Component {
  componentDidMount() {
    const { setUsers } = this.props;
    axios
      .get('https://social-network.samuraijs.com/api/1.0/users')
      .then((res) => {
        setUsers(res.data.items);
      });
  }

  render() {
    const { users, follow, unfollow } = this.props;

    return (
      <div>
        {users.map((user) => (
          <div key={user.id}>
            <span>
              <div>
                <img src={user.photos.small || userIcon} alt="user avatar" className={styles.photo} />
              </div>
              <div>
                {user.followed
                  ? <button type="button" onClick={() => unfollow(user.id)}>Unfollow</button>
                  : <button type="button" onClick={() => follow(user.id)}>Follow</button>}
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
