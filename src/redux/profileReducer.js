const ADD_POST = 'ADD_POST';
const CHANGE_POST_INPUT = 'CHANGE_POST_INPUT';

const profileReducer = (state, action) => {
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
    case CHANGE_POST_INPUT:
      return {
        ...state,
        postInput: action.value,
      };
    default:
      return state;
  }
};

export const addPostActionCreator = () => ({
  type: ADD_POST,
});

export const changePostInputActionCreator = (value) => ({
  type: CHANGE_POST_INPUT, value,
});

export default profileReducer;
