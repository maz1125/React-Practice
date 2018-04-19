import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';

import SearchForm from '../containers/SearchForm';
// import GeoResult from './GeoResult';
// import Map from './Map';
// import HotelTable from './HotelTable';
import { geoCode } from '../domain/GeoCoder';
import { searchHotelByLocation } from '../domain/HotelRepository';

class SearchPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      place: this.getPlace() || '東京タワー',
      location: {
        lat: 35.6585805,
        lng: 139.7454329,
      },
    };
  }
  componentDidMount() {
  }

  componentWillUnmount() {
  }

  hundleOnSubmit(e) {
    e.preventDefault();
    this.props.history.push(`/?place=${this.state.place}`);
    this.startSearch();
  }

  hundleOnChange(e) {
    e.preventDefault();
    this.props.store.dispatch({ type: 'CHANGE_PLACE', place: e.target.value });
  }

  getPlace() {
    const params = queryString.parse(this.props.location.search);
    const placeValue = params.place;
    if (placeValue && placeValue.length > 0) {
      return placeValue;
    }
    return null;
  }

  startSearch() {

  }
  render() {
    return (
      <div className="search-page">
        <h2 className="app-header">ホテル検索</h2>
        <SearchForm
          onChange={e => this.hundleOnChange(e)}
        />
        {/*
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
        */}
      </div>
    );
  }
}

SearchPage.propTypes = {
  // place: PropTypes.string.isRequired,
  history: PropTypes.shape({
    push: PropTypes.func,
  }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.func,
  }).isRequired,
};

export default SearchPage;
