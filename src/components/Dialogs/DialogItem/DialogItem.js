import React from 'react';

import { NavLink } from 'react-router-dom';

import styles from './DialogItem.module.css';

const DialogItem = (props) => (
	<div className={styles.dialog}>
		<NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
			{props.name}
		</NavLink>
	</div>
);

export default DialogItem;
