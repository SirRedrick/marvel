let rerenderEntireTree = () => {};

const state = {
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
  input: '',
};

export const addPost = () => {
  const newPost = {
    id: 5,
    message: state.input,
    likesCount: 0,
  };
  state.posts.push(newPost);
  state.input = '';
  rerenderEntireTree(state);
};

export const changeInput = (value) => {
  state.input = value;
  rerenderEntireTree(state);
};

export const subscribe = (observer) => {
  rerenderEntireTree = observer;
};

export default state;
