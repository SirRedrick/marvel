import React from 'react';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

export default function MyPosts() {
	let postData = [
		{ id: 1, message: 'Hi, how are you?', likesCount: 12 },
		{ id: 2, message: "It's my first post", likesCount: 11 },
	];

	return (
		<div className={styles.postsBlock}>
			<h3>My posts</h3>
			<div>
				<div>
					<textarea></textarea>
				</div>
				<div>
					<button>Add Post</button>
				</div>
			</div>
			<div className={styles.posts}>
				<Post message={postData[0].message} likesCount={postData[0].likesCount} />
				<Post message={postData[1].message} likesCount={postData[0].likesCount} />
			</div>
		</div>
	);
}
