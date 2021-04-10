import React from 'react';
import Post from './Post/Post';

import styles from './MyPosts.module.css';

const MyPosts = ({ posts }) => {
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
};

export default MyPosts;
