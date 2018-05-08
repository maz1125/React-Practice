import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch,
} from 'react-router-dom';

import SearchPage from './SearchPage';
import AboutPage from './AboutPage';

const App = () => (
  <Router>
    <div>
      <div className="siimple-navbar siimple-navbar--navy">
        <div className="siimple-layout--left">
          <div className="siimple-navbar-title">ホテル検索</div>
        </div>
        <div className="siimple-layout--right">
          <div id="user-container">
            <div hidden id="user-pic" />
            <div hidden id="user-name" />
            <button hidden id="sign-out" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
              Sign-out
            </button>
            <button hidden id="sign-in" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-color-text--white">
              Sign-in with Google
            </button>
          </div>
        </div>
      </div>
      <div className="app">
        <div className="siimple-menu side-menu">
          <div className="siimple-menu-group" />
          <Link to="/" className="siimple-menu-item">ホテル検索</Link>
          <Link to="/about" className="siimple-menu-item">検索履歴</Link>
        </div>
        <Switch>
          <Route exact path="/" component={SearchPage} />
          <Route exact path="/about" component={AboutPage} />
        </Switch>
      </div>
      <div className="siimple-footer align-center">
        Made by maz1125
      </div>
    </div>
  </Router>
);

export default App;
