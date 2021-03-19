import React from 'react';
import styles from './Post.module.css';

export default function Post({ message }) {
	return (
		<div className={styles.item}>
			<img src="https://leanfrontiers.com/wp-content/uploads/2018/12/logo-placeholder-png.png" alt="" />
			{message}
			<div>like</div>
		</div>
	);
}
