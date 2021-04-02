import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dialogs.module.css';

export default function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<div className={styles.dialog + ' ' + styles.active}>
					<NavLink to="/dialogs/1">Dimych</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/2">Andrey</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/3">Sveta</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/4">Sasha</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/5">Viktor</NavLink>
				</div>
				<div className={styles.dialog}>
					<NavLink to="/dialogs/6">Valera</NavLink>
				</div>
			</div>
			<div className={styles.messages}>
				<div className={styles.message}>Hi</div>
				<div className={styles.message}>How is your it-kamasutra</div>
				<div className={styles.message}>Yo</div>
			</div>
		</div>
	);
}
