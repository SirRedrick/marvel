import { connect } from 'react-redux';
import {
  follow,
  setUsers,
  unfollow,
  setCurrentPage,
  setTotalUsersCount,
} from '../../redux/usersSlice';
import Users from './Users';

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

export default connect(mapStateToProps, mapDispatchToProps)(Users);
