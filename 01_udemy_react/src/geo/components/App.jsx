import React, { Component } from 'react';
import SearchForm from './SearchForm';
import GeoResult from './GeoResult';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hundleOnSubmit(place) {
    console.log(place);
  }
  render() {
    return (
      <div>
        <h2 className="header">緯度経度検索</h2>
        <SearchForm onSubmit={place => this.hundleOnSubmit(place)} />
        <GeoResult
          address={this.state.address}
          lat={this.state.lat}
          lng={this.state.lng}
        />
      </div>
    );
  }
}

export default App;
