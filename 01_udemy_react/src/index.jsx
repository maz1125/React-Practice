import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

// import App from './components/app';
// import ClassApp from './components/classApp';
// import App from './geo/components/App';
import SearchPage from './geo/components/SearchPage';
import reducer from './geo/reducers/';


// ReactDOM.render(<App />, document.querySelector('.container'));
// ReactDOM.render(<ClassApp   />, document.querySelector('.container'));

const store = createStore(
  reducer,
  // applyMiddleware(thunk),
  composeWithDevTools(applyMiddleware(thunk)),
);

ReactDOM.render(
  <Provider store={store}>
    <SearchPage
      history={window.history}
      location={window.location}
    />
  </Provider>,
  document.querySelector('.container'),
);
