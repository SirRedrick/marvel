const ADD_POST = 'ADD_POST';
const CHANGE_POST_INPUT = 'CHANGE_POST_INPUT';
const ADD_MESSAGE = 'ADD_MESSAGE';
const CHANGE_MESSAGE_INPUT = 'CHANGE_MESSAGE_INPUT';

const store = {
  state: {
    dialogs: [
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
    posts: [
      { id: 1, message: 'Hi, how are you?', likesCount: 12 },
      { id: 2, message: "It's my first post", likesCount: 11 },
    ],
    postInput: '',
    messageInput: '',
  },
  callSubscriber() {
    console.log('State changed');
  },

  getState() {
    return this.state;
  },
  subscribe(observer) {
    this.callSubscriber = observer;
  },
  dispatch(action) {
    switch (action.type) {
      case ADD_POST:
        // eslint-disable-next-line no-case-declarations
        const newPost = {
          id: 5,
          message: this.state.postInput,
          likesCount: 0,
        };
        this.state.posts.push(newPost);
        this.state.postInput = '';
        this.callSubscriber(this.state);
        break;
      case CHANGE_POST_INPUT:
        this.state.postInput = action.value;
        this.callSubscriber(this.state);
        break;
      case ADD_MESSAGE:
        // eslint-disable-next-line no-case-declarations
        const newMessage = {
          id: 5,
          message: this.state.messageInput,
        };
        this.state.messages.push(newMessage);
        this.state.messageInput = '';
        this.callSubscriber(this.state);
        break;
      case CHANGE_MESSAGE_INPUT:
        this.state.messageInput = action.value;
        this.callSubscriber(this.state);
        break;
      default:
    }
  },
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const changePostInputActionCreator = (value) => ({
  type: CHANGE_POST_INPUT, value,
});

export const addMessageActionCreator = () => ({
  type: ADD_MESSAGE,
});

export const changeMessageInputActionCreator = (value) => ({
  type: CHANGE_MESSAGE_INPUT, value,
});

export default store;
