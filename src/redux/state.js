import dialogsReducer from './dialogsReducer';
import profileReducer from './profileReducer';
import sidebarReducer from './sidebarReducer';

const store = {
  state: {
    dialogsPage: {
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
      messageInput: '',
    },
    profilePage: {
      posts: [
        { id: 1, message: 'Hi, how are you?', likesCount: 12 },
        { id: 2, message: "It's my first post", likesCount: 11 },
      ],
      postInput: '',
    },
    sidebar: {},
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
    this.state.profilePage = profileReducer(this.state.profilePage, action);
    this.state.dialogsPage = dialogsReducer(this.state.dialogsPage, action);
    this.state.sidebar = sidebarReducer(this.state.sidebar, action);

    this.callSubscriber(this.state);
  },
};

export default store;
