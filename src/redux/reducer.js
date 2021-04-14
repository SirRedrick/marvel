import { combineReducers } from 'redux';
import profileReducer from './profileSlice';
import dialogsReducer from './dialogsSlice';
import sidebarReducer from './sidebarSlice';
import usersReducer from './usersSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
  users: usersReducer,
});

export default rootReducer;
