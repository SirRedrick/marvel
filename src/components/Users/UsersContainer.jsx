import { connect } from 'react-redux';
import { follow, setUsers, unfollow } from '../../redux/usersSlice';
import Users from './Users';

const mapStateToProps = (state) => ({
  users: state.users.users,
});

const mapDispatchToProps = (dispatch) => ({
  follow: (userId) => dispatch(follow(userId)),
  unfollow: (userId) => dispatch(unfollow(userId)),
  setUsers: (users) => dispatch(setUsers(users)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Users);
