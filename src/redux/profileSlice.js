const ADD_POST = 'ADD_POST';
const UPDATE_POST_INPUT = 'UPDATE_POST_INPUT';

const initialState = {
  posts: [
    { id: 1, message: 'Hi, how are you?', likesCount: 12 },
    { id: 2, message: "It's my first post", likesCount: 11 },
  ],
  postInput: '',
};

export const addPost = () => ({
  type: ADD_POST,
});

export const updatePostInput = (value) => ({
  type: UPDATE_POST_INPUT, value,
});

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST:
      return {
        ...state,
        postInput: '',
        posts: state.posts.concat({
          id: 5,
          message: state.postInput,
          likesCount: 0,
        }),
      };
    case UPDATE_POST_INPUT:
      return {
        ...state,
        postInput: action.value,
      };
    default:
      return state;
  }
};

export default profileReducer;
