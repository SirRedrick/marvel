import React from 'react';
// import PropTypes from 'prop-types';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';

import styles from './Profile.module.css';

const Profile = () => (
  <div className={styles.content}>
    <ProfileInfo />
    <MyPostsContainer />
  </div>
);

// Profile.propTypes = {
//   profile: PropTypes.shape({
//     posts: PropTypes.arrayOf(PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       message: PropTypes.string.isRequired,
//       likesCount: PropTypes.number.isRequired,
//     })),
//     postInput: PropTypes.string.isRequired,
//   }).isRequired,
//   dispatch: PropTypes.func.isRequired,
// };

export default Profile;
