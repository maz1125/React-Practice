import { geoCode } from '../domain/GeoCoder';

export const setPlace = place => dispatch => dispatch({ type: 'CHANGE_PLACE', place });

export const startSearch = () => (dispatch, getState) => {
  geoCode(getState().place)
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
};
