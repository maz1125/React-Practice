import React, { Component } from 'react';

import SearchForm from './SearchForm';
import GeoResult from './GeoResult';
import Map from './Map';
import { geoCode } from '../domain/GeoCoder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
    };
  }
  hundleOnSubmit(place) {
    geoCode(place)
      .then(({ resultStatus, resultAddress, resultLocation }) => {
        // TODO exception hundling
        switch (resultStatus) {
          case 'OK': {
            this.setState({ address: resultAddress, location: resultLocation });
            break;
          }
          default: {
            this.setState({
              address: '結果が見つかりませんでした',
              location: resultLocation,
            });
            break;
          }
        }
      // console.log(results);
      });
  }
  render() {
    return (
      <div>
        <h2 className="header">緯度経度検索</h2>
        <SearchForm onSubmit={place => this.hundleOnSubmit(place)} />
        <GeoResult
          address={this.state.address}
          location={this.state.location}
        />
        <Map location={this.state.location} />
      </div>
    );
  }
}

export default App;
