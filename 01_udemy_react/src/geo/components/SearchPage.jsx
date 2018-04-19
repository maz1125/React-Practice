import React, { Component } from 'react';
import PropTypes from 'prop-types';
import queryString from 'query-string';
import { connect } from 'react-redux';

import SearchForm from '../containers/SearchForm';
import GeoResult from './GeoResult';
import Map from './Map';
// import HotelTable from './HotelTable';

class SearchPage extends Component {
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     place: this.getPlace() || '東京タワー',
  //   };
  // }

  getPlace() {
    const params = queryString.parse(this.props.location.search);
    const placeValue = params.place;
    if (placeValue && placeValue.length > 0) {
      return placeValue;
    }
    return null;
  }

  render() {
    return (
      <div className="search-page">
        <h2 className="app-header">ホテル検索</h2>
        <SearchForm />
        <div className="search-result-area">
          <Map location={this.props.geocodeResults.location} />
          <div className="result-data" >
            <GeoResult
              address={this.props.geocodeResults.address}
              location={this.props.geocodeResults.location}
            />
            {/*
            <HotelTable hotels={this.state.hotels} />
            */}
          </div>
        </div>
      </div>
    );
  }
}

SearchPage.propTypes = {
  // place: PropTypes.string.isRequired,
  // history: PropTypes.shape({
  //   push: PropTypes.func,
  // }).isRequired,
  location: PropTypes.shape({
    search: PropTypes.func,
  }).isRequired,
  geocodeResults: PropTypes.shape({
    address: PropTypes.string.isRequired,
    location: PropTypes.shape({
      lng: PropTypes.number.isRequired,
      lot: PropTypes.number.isRequired,
    }),
  }).isRequired,
};

const mapStateToProps = state => ({
  geocodeResults: state.geocodeResults,
});

export default connect(mapStateToProps)(SearchPage);
