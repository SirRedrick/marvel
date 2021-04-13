import { connect } from 'react-redux';
import MyPosts from './MyPosts';
import { addPost, updatePostInput } from '../../../redux/profileSlice';

const mapStateToProps = (state) => ({
  posts: state.profile.posts,
  postInput: state.profile.postInput,
});

const mapDispatchToProps = (dispatch) => ({
  addPost: () => dispatch(addPost()),
  updatePostInput: (value) => dispatch(updatePostInput(value)),
});

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
