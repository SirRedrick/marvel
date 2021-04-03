import React from 'react';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

export default function MyPosts() {
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
				<Post message="Hi, how are you?" />
				<Post message="It's my first post" />
			</div>
		</div>
	);
}
