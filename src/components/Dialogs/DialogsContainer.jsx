import { connect } from 'react-redux';
import { addMessage, updateMessageInput } from '../../redux/dialogsSlice';
import Dialogs from './Dialogs';

const mapStateToProps = (state) => ({
  contacts: state.dialogs.contacts,
  messages: state.dialogs.messages,
  messageInput: state.dialogs.messageInput,
});

const mapDispatchToProps = (dispatch) => ({
  addMessage: () => dispatch(addMessage()),
  updateMessageInput: (value) => dispatch(updateMessageInput(value)),
});

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;
