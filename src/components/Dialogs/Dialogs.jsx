import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import styles from './Dialogs.module.css';

const Dialogs = ({ dialogs, messages }) => (
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

Dialogs.propTypes = {
  dialogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
  })).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    message: PropTypes.string,
  })).isRequired,
};

export default Dialogs;
