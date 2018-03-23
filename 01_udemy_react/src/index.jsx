import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/app';
import ClassApp from './components/classApp';

ReactDOM.render(<App />, document.querySelector('.container'));
ReactDOM.render(<ClassApp />, document.querySelector('.container'));
