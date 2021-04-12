import { combineReducers } from 'redux';
import profileReducer from './profileSlice';
import dialogsReducer from './dialogsSlice';
import sidebarReducer from './sidebarSlice';

const rootReducer = combineReducers({
  profile: profileReducer,
  dialogs: dialogsReducer,
  sidebar: sidebarReducer,
});

export default rootReducer;
