import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import states, { addPost, changeInput, subscribe } from './redux/state';

const rerenderEntireTree = (state) => {
  ReactDOM.render(
    <React.StrictMode>
      <App state={state} addPost={addPost} changeInput={changeInput} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
};

rerenderEntireTree(states);

subscribe(rerenderEntireTree);
