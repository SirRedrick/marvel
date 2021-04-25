/* eslint-disable no-shadow */
import React from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import PropTypes from 'prop-types';
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
} from '../../redux/usersSlice';
import Users from './Users';
import Preloader from '../common/Preloader/Preloader';

class UsersContainer extends React.Component {
  componentDidMount() {
    const {
      pageSize, currentPage, setUsers, setTotalUsersCount, toggleIsFetching,
    } = this.props;
    toggleIsFetching(true);
    axios
      .get(
        `https://social-network.samuraijs.com/api/1.0/users?page=${currentPage}&count=${pageSize}`,
      )
      .then((res) => {
        setUsers(res.data.items);
        setTotalUsersCount(res.data.totalCount);
      });
    toggleIsFetching(false);
  }

  onPageChange = (page) => {
    const { setCurrentPage, pageSize, setUsers } = this.props;
    toggleIsFetching(true);

    axios
      .get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${pageSize}`)
      .then((res) => {
        setUsers(res.data.items);
      });
    setCurrentPage(page);
    toggleIsFetching(false);
  };

  render() {
    const {
      users,
      pageSize,
      totalUsersCount,
      currentPage,
      follow,
      unfollow,
      isFetching,
    } = this.props;

    return (
      <>
        {isFetching ? (
          <Preloader />
        ) : (
          <Users
            users={users}
            currentPage={currentPage}
            pageSize={pageSize}
            totalUsersCount={totalUsersCount}
            follow={follow}
            unfollow={unfollow}
            onPageChange={this.onPageChange}
          />
        )}
      </>
    );
  }
}

UsersContainer.propTypes = {
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
  isFetching: PropTypes.bool.isRequired,
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
  toggleIsFetching: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
  isFetching: state.users.isFetching,
});

export default connect(mapStateToProps, {
  follow,
  unfollow,
  setUsers,
  setCurrentPage,
  setTotalUsersCount,
  toggleIsFetching,
})(UsersContainer);
