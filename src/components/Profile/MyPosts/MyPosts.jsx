import React from 'react';
import PropTypes from 'prop-types';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

const MyPosts = ({
  posts, postInput, addPost, updatePostInput,
}) => {
  const newPostElement = React.createRef();
  const handleClick = () => addPost();
  const handleChange = () => updatePostInput(newPostElement.current.value);

  return (
    <div className={styles.postsBlock}>
      <h3>My posts</h3>
      <div>
        <div>
          <textarea value={postInput} onChange={handleChange} ref={newPostElement} />
        </div>
        <div>
          <button type="button" onClick={handleClick}>Add Post</button>
        </div>
      </div>
      <div className={styles.posts}>
        {posts.map((post) => (
          <Post message={post.message} likesCount={post.likesCount} />
        ))}
      </div>
    </div>
  );
};

MyPosts.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    likesCount: PropTypes.number,
  })).isRequired,
  postInput: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  updatePostInput: PropTypes.func.isRequired,
};

export default MyPosts;
