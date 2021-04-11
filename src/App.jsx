import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';

import './App.css';

function App({ state, addPost, changeInput }) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route
            path="/profile"
            render={() => (
              <Profile
                posts={state.posts}
                input={state.input}
                addPost={addPost}
                changeInput={changeInput}
              />
            )}
          />
          <Route
            path="/dialogs"
            render={() => (
              <Dialogs dialogs={state.dialogs} messages={state.messages} />
            )}
          />
          <Route path="/news" render={() => <News />} />
          <Route path="/music" render={() => <Music />} />
          <Route path="/settings" render={() => <Settings />} />
        </div>
      </div>
    </BrowserRouter>
  );
}

App.propTypes = {
  state: PropTypes.shape({
    dialogs: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
    })),
    messages: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
    })),
    posts: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.number,
      message: PropTypes.string,
      likesCount: PropTypes.number,
    })),
    input: PropTypes.string,
  }).isRequired,
  addPost: PropTypes.func.isRequired,
  changeInput: PropTypes.func.isRequired,
};

export default App;
