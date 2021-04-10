import React from 'react';

import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPosts from './MyPosts/MyPosts';

import styles from './Profile.module.css';

export default function Profile({ posts, input, addPost, changeInput }) {
	return (
		<div className={styles.content}>
			<ProfileInfo />
			<MyPosts posts={posts} input={input} addPost={addPost} changeInput={changeInput} />
		</div>
	);
}
