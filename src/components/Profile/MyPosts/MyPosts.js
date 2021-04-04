import React from 'react';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

export default function MyPosts() {
	let posts = [
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
				{posts.map((post) => (
					<Post message={post.message} likesCount={post.likesCount} />
				))}
			</div>
		</div>
	);
}
