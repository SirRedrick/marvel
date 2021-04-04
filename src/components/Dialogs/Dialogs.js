import React from 'react';
import { NavLink } from 'react-router-dom';

import styles from './Dialogs.module.css';

const DialogItem = (props) => (
	<div className={styles.dialog}>
		<NavLink to={`/dialogs/${props.id}`} activeClassName={styles.active}>
			{props.name}
		</NavLink>
	</div>
);

const Message = (props) => <div className={styles.message}>{props.message}</div>;

const Dialogs = (props) => {
	let dialogs = [
		{ id: 1, name: 'Dimych' },
		{ id: 2, name: 'Andrey' },
		{ id: 3, name: 'Sveta' },
		{ id: 4, name: 'Sasha' },
		{ id: 5, name: 'Viktor' },
		{ id: 6, name: 'Valera' },
	];

	let messages = [
		{ id: 1, message: 'Hi' },
		{ id: 2, message: 'How is your it-kamasutra' },
		{ id: 3, message: 'Yo' },
	];

	return (
		<div className={styles.dialogs}>
			<div className={styles.dialogsItems}>
				{dialogs.map((dialog) => (
					<DialogItem name={dialog.name} id={dialog.id} />
				))}
			</div>
			<div className={styles.messages}>
				{messages.map((message) => (
					<Message message={message.message} />
				))}
			</div>
		</div>
	);
};

export default Dialogs;
