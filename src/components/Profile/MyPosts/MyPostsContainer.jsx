import React from 'react';
import PropTypes from 'prop-types';
import MyPosts from './MyPosts';
import { addPost, updatePostInput } from '../../../redux/profileSlice';

const MyPostsContainer = ({
  posts, postInput, dispatch,
}) => {
  const onAddPost = () => dispatch(addPost());
  const onUpdatePostInput = (value) => dispatch(updatePostInput(value));

  return (
    <MyPosts
      posts={posts}
      postInput={postInput}
      addPost={onAddPost}
      updatePostInput={onUpdatePostInput}
    />
  );
};

MyPostsContainer.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    likesCount: PropTypes.number,
  })).isRequired,
  postInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default MyPostsContainer;
