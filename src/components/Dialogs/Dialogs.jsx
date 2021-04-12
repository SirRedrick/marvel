import React from 'react';
import PropTypes from 'prop-types';

import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

import { addMessage, updateMessageInput } from '../../redux/dialogsSlice';

import styles from './Dialogs.module.css';

const Dialogs = ({
  contacts, messages, messageInput, dispatch,
}) => {
  const newPostElement = React.createRef();

  const handleClick = () => {
    dispatch(addMessage());
  };

  const handleChange = () => {
    dispatch(updateMessageInput(newPostElement.current.value));
  };

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {contacts.map((dialog) => (
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
  contacts: PropTypes.arrayOf(PropTypes.shape({
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
