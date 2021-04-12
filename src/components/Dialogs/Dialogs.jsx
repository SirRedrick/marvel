import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { addMessageActionCreator, changeMessageInputActionCreator } from '../../redux/dialogsReducer';

import styles from './Dialogs.module.css';

const Dialogs = ({
  dialogs, messages, messageInput, dispatch,
}) => {
  const newPostElement = React.createRef();

  const handleClick = () => {
    dispatch(addMessageActionCreator());
  };

  const handleChange = () => {
    dispatch(changeMessageInputActionCreator(newPostElement.current.value));
  };

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
        <div>
          <textarea value={messageInput} onChange={handleChange} ref={newPostElement} placeholder="Enter your message" />
        </div>
        <div>
          <button type="button" onClick={handleClick}>Add Post</button>
        </div>
      </div>
    </div>
  );
};

Dialogs.propTypes = {
  dialogs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  messages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    message: PropTypes.string.isRequired,
  })).isRequired,
  messageInput: PropTypes.string.isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default Dialogs;
