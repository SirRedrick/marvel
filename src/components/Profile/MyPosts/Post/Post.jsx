import React from 'react';
import PropTypes from 'prop-types';

import styles from './Post.module.css';

const Post = ({ message, likesCount }) => (
  <div className={styles.item}>
    <img src="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png" alt="" />
    {message}
    <div>
      like
      {likesCount}
    </div>
  </div>
);

Post.propTypes = {
  message: PropTypes.string.isRequired,
  likesCount: PropTypes.number.isRequired,
};

export default Post;
