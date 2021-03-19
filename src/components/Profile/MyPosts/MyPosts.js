import React from 'react';
import Post from './Post/Post';
import styles from './MyPosts.module.css';

export default function MyPosts() {
	return (
		<div>
			My posts
			<div>
				<textarea></textarea>
				<button>Add Post</button>
			</div>
			<div>
				<Post message="Hi, how are you?" />
				<Post message="It's my first post" />
			</div>
		</div>
	);
}
