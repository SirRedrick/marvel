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
} from '../../redux/usersSlice';
import Users from './Users';

class UsersContainer extends React.Component {
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

    return (
      <Users
        users={users}
        currentPage={currentPage}
        pageSize={pageSize}
        totalUsersCount={totalUsersCount}
        follow={follow}
        unfollow={unfollow}
        onPageChange={this.onPageChange}
      />
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
  setCurrentPage: PropTypes.func.isRequired,
  setTotalUsersCount: PropTypes.func.isRequired,
  follow: PropTypes.func.isRequired,
  unfollow: PropTypes.func.isRequired,
  setUsers: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  users: state.users.users,
  pageSize: state.users.pageSize,
  totalUsersCount: state.users.totalUsersCount,
  currentPage: state.users.currentPage,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(follow(userId)),
  unfollow: (userId) => dispatch(unfollow(userId)),
  setUsers: (users) => dispatch(setUsers(users)),
  setCurrentPage: (pageNumber) => dispatch(setCurrentPage(pageNumber)),
  setTotalUsersCount: (totalCount) => dispatch(setTotalUsersCount(totalCount)),
});

export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);
