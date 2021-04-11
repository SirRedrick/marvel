import React from 'react';
import PropTypes from 'prop-types';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

const Profile = ({
  posts, postInput, dispatch,
}) => (
  <div className={styles.content}>
    <ProfileInfo />
    <MyPosts posts={posts} postInput={postInput} dispatch={dispatch} />
  </div>
);

Profile.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
    likesCount: PropTypes.number,
  })).isRequired,
  postInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Profile;
