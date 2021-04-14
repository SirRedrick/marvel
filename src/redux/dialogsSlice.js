const ADD_MESSAGE = 'ADD_MESSAGE';
const UPDATE_MESSAGE_INPUT = 'UPDATE_MESSAGE_INPUT';

const initialState = {
  contacts: [
    { id: 1, name: 'Dimych' },
    { id: 2, name: 'Andrey' },
    { id: 3, name: 'Sveta' },
    { id: 4, name: 'Sasha' },
    { id: 5, name: 'Viktor' },
    { id: 6, name: 'Valera' },
  ],
  messages: [
    { id: 1, message: 'Hi' },
    { id: 2, message: 'How is your it-kamasutra' },
    { id: 3, message: 'Yo' },
  ],
  messageInput: '',
};

const dialogsReducer = (state = initialState, action) => {
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
    case UPDATE_MESSAGE_INPUT:
      return {
        ...state,
        messageInput: action.value,
      };
    default:
      return state;
  }
};

export const addMessage = () => ({ type: ADD_MESSAGE });
export const updateMessageInput = (value) => ({ type: UPDATE_MESSAGE_INPUT, value });

export default dialogsReducer;
