import React from 'react';
import PropTypes from 'prop-types';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = ({
  posts, input, addPost, changeInput,
}) => (
  <div className={styles.content}>
    <ProfileInfo />
    <MyPosts posts={posts} input={input} addPost={addPost} changeInput={changeInput} />
  </div>
);

Profile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    likesCount: PropTypes.number,
  })).isRequired,
  input: PropTypes.string.isRequired,
  addPost: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default Profile;
