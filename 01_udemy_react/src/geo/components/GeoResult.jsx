import React, { PropTypes } from 'react';

function GeoResult({ address, location }) {
  return (
    <ui className="geo-result">
      <li>住所：{address}</li>
      <li>緯度：{location.lat}</li>
      <li>経度：{location.lng}</li>
    </ui>
  );
}

GeoResult.propTypes = {
  address: PropTypes.string,
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

GeoResult.defaultProps = {
  address: '',
};

export default GeoResult;
