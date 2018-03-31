import React, { PropTypes } from 'react';

function GeoResult({ address, lat, lng }) {
  return (
    <ui className="geo-result">
      <li>住所：{address}</li>
      <li>緯度：{lat}</li>
      <li>経度：{lng}</li>
    </ui>
  );
}

GeoResult.propTypes = {
  address: PropTypes.string,
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
};

GeoResult.defaultProps = {
  address: '',
};

export default GeoResult;
