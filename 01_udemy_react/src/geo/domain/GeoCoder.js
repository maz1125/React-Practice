import axios from 'axios';

const GEOCODE_ENDPOINT = 'https://maps.googleapis.com/maps/api/geocode/json';

export const geoCode = place =>
  axios
    .get(GEOCODE_ENDPOINT, { params: { address: place } })
    .then((results) => {
      // return { "asdf" };
      const resultData = results.data;
      const resultStatus = resultData.status;
      const result = resultData.results[0];
      if (typeof resultData === 'undefined') {
        return { resultStatus };
      }
      const resultAddress = result.formatted_address;
      const resultLocation = result.geometry.location;
      return { resultStatus, resultAddress, resultLocation };
      // return { resultStatus };
    });

export const reverseGeoCode = () => null;
