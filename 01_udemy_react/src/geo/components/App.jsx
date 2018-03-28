import React, { Component } from 'react';
import SearchForm from './SearchForm';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hundleOnSubmit(place){
    console.log(place);
  }
  render() {
    return (
      <div>
        <h2 className="header">緯度経度検索</h2>
        <SearchForm onSubmit={place => this.hundleOnSubmit(place)} />
      </div>
    );
  }
}

export default App;
