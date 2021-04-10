import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

export default function Profile({ posts }) {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts posts={posts} />
		</div>
	);
}
