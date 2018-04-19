import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { geoCode } from '../domain/GeoCoder';

class SearchForm extends Component {
  handleSubmit(e) {
    e.preventDefault();
    this.props.onSubmit(this.props.place);
  }

  render() {
    return (
      <form className="search-form" onSubmit={e => this.handleSubmit(e)}>
        <input
          className="place-input"
          type="text"
          value={this.props.place}
          onChange={(e) => {
              e.preventDefault();
              this.props.onPlaceChange(e.target.value);
            }}
        />
        <input className="button-input" type="submit" value="検索" />
      </form>
    );
  }
}

SearchForm.propTypes = {
  place: PropTypes.string.isRequired,
  onSubmit: PropTypes.func.isRequired,
  onPlaceChange: PropTypes.func.isRequired,
};

const mapStateToProps = state => ({
  place: state.place,
});

const mapDispatchToProps = dispatch => ({
  onPlaceChange: place => dispatch({ type: 'CHANGE_PLACE', place }),
  onSubmit: (place) => {
    geoCode(place)
      .then(({ resultStatus, resultAddress, resultLocation }) => {
        // TODO exception hundling
        switch (resultStatus) {
          case 'OK': {
            // this.setState({ address: resultAddress, location: resultLocation });
            dispatch({ type: 'GEOCODE_FETCHED', address: resultAddress, location: resultLocation });
            // return searchHotelByLocation(resultLocation);
            break;
          }
          default: {
            // this.setState({
            //   address: '結果が見つかりませんでした',
            //   location: resultLocation,
            // });
            break;
          }
        }
        return [];
      // console.log(results);
      // }).then((hotels) => {
      //   this.setState({ hotels });
      });
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(SearchForm);
