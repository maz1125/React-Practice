import React, { Component } from 'react';

import SearchForm from './SearchForm';
import GeoResult from './GeoResult';
import Map from './Map';
import HotelTable from './HotelTable';
import { geoCode } from '../domain/GeoCoder';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
      hotels: [
        { id: 111, name: 'ホテルオークラ', url: 'https://google.com' },
        { id: 222, name: 'アパホテル', url: 'https://yahoo.co.jp' },
      ],
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
      <div className="app">
        <h2 className="app-header">ホテル検索</h2>
        <SearchForm onSubmit={place => this.hundleOnSubmit(place)} />
        <div className="search-result-area">
          <Map location={this.state.location} />
          <div className="result-data" >
            <GeoResult
              address={this.state.address}
              location={this.state.location}
            />
            <HotelTable hotels={this.state.hotels} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
