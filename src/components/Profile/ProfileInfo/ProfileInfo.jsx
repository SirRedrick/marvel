import React from 'react';

import styles from './ProfileInfo.module.css';

const ProfileInfo = () => (
  <div>
    <img
      className={styles.banner}
      src="https://images.unsplash.com/photo-1556329415-8aac3b1c1ea7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
      alt=""
    />
    <div className={styles.descriptionBlock}>ava + desc</div>
  </div>
);

export default ProfileInfo;
