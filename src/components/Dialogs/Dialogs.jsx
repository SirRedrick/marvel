import React from 'react';
import PropTypes from 'prop-types';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import styles from './Dialogs.module.css';

const Dialogs = ({
  contacts, messages, messageInput, addMessage, updateMessageInput,
}) => {
  const newPostElement = React.createRef();
  const handleClick = () => addMessage();
  const handleChange = () => updateMessageInput(newPostElement.current.value);

  return (
    <div className={styles.dialogs}>
      <div className={styles.dialogsItems}>
        {contacts.map((contact) => (
          <DialogItem name={contact.name} key={contact.id} id={contact.id} />
        ))}
      </div>
      <div className={styles.messages}>
        {messages.map((message) => (
          <Message message={message.message} key={message.id} />
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
  addMessage: PropTypes.func.isRequired,
  updateMessageInput: PropTypes.func.isRequired,
};

export default Dialogs;
