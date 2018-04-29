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
        <div className="siimple-navbar-title">ホテル検索</div>
      </div>
      <div className="app">
        <ul className="left-navi">
          <li><Link to="/">ホテル検索</Link></li>
          <li><Link to="/about">検索履歴</Link></li>
        </ul>
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
