import React from 'react';
import PropTypes from 'prop-types';
import { addMessage, updateMessageInput } from '../../redux/dialogsSlice';
import Dialogs from './Dialogs';

const DialogsContainer = ({
  dialogs, dispatch,
}) => {
  const onAddMessage = () => dispatch(addMessage());
  const onUpdateMessageInput = (value) => dispatch(updateMessageInput(value));

  return (
    <Dialogs
      contacts={dialogs.contacts}
      messages={dialogs.messages}
      messageInput={dialogs.messageInput}
      addMessage={onAddMessage}
      updateMessageInput={onUpdateMessageInput}
    />
  );
};

DialogsContainer.propTypes = {
  dialogs: PropTypes.shape({
    contacts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
    })),
    messageInput: PropTypes.string,
  }).isRequired,
  dispatch: PropTypes.func.isRequired,
};

export default DialogsContainer;
