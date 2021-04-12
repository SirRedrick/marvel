const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';

const dialogsReducer = (state, action) => {
  switch (action.type) {
    case ADD_MESSAGE:
      return {
        ...state,
        messageInput: '',
        messages: state.messages.concat({
          id: 5,
          message: state.messageInput,
        }),
      };
    case CHANGE_MESSAGE_INPUT:
      return {
        ...state,
        messageInput: action.value,
      };
    default:
      return state;
  }
};

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const changeMessageInputActionCreator = (value) => ({
  type: CHANGE_MESSAGE_INPUT, value,
});

export default dialogsReducer;
