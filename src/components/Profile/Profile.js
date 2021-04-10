import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

export default function Profile({ posts, addPost }) {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts posts={posts} addPost={addPost} />
		</div>
	);
}
