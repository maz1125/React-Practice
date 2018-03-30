import React, { Component } from 'react';
import axios from 'axios';
import SearchForm from './SearchForm';
import GeoResult from './GeoResult';
import Map from './Map';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  hundleOnSubmit(place) {
    axios
      .get(GEOCODE_ENDPOINT, { params: { address: place } })
      .then((results) => {
        const resultData = results.data;
        const result = resultData.results[0];
        // TODO exception hundling
        switch (resultData.status) {
          case 'OK': {
            const geoLocation = result.geometry.location;
            this.setState({
              address: result.formatted_address,
              lat: geoLocation.lat,
              lng: geoLocation.lng,
            });
            break;
          }
          default: {
            this.setState({
              address: '結果が見つかりませんでした',
              lat: 0,
              lng: 0,
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
          lat={this.state.lat}
          lng={this.state.lng}
        />
        <Map lat={this.state.lat} lng={this.state.lng} />
      </div>
    );
  }
}

export default App;
