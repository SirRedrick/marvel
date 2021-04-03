import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dialogs.module.css';

const DialogItem = (props) => (
	<div className={styles.dialog + ' ' + styles.active}>
		<NavLink to={`/dialogs/${props.id}`}>{props.name}</NavLink>
	</div>
);

const Message = (props) => <div className={styles.message}>{props.message}</div>;

export default function Dialogs(props) {
	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				<DialogItem name="Dimych" id="1" />
				<DialogItem name="Andrey" id="2" />
				<DialogItem name="Sveta" id="3" />
				<DialogItem name="Sasha" id="4" />
				<DialogItem name="Viktor" id="5" />
				<DialogItem name="Valera" id="6" />
			</div>
			<div className={styles.messages}>
				<Message message="Hi" />
				<Message message="How is your it-kamasutra" />
				<Message message="Yo" />
			</div>
		</div>
	);
}
