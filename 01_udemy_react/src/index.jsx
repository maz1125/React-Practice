import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';

// import App from './components/app';
// import ClassApp from './components/classApp';
// import App from './geo/components/App';
import SearchPage from './geo/components/SearchPage';
import reducer from './geo/reducers/';


// ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<ClassApp   />, document.querySelector('.container'));

ReactDOM.render(
  <SearchPage
    history={window.history}
    location={window.location}
    store={createStore(reducer)}
  />,
  document.querySelector('.container'),
);
