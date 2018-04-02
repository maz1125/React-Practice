import React, { PropTypes } from 'react';
import { compose, withProps } from 'recompose';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from 'react-google-maps';

// const Map = compose(
//   withProps({
//     googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
//     loadingElement: <div style={{ height: '100%' }} />,
//     containerElement: <div className="map-container" style={{ height: '400px' }} />,
//     mapElement: <div className="map-element" style={{ height: '100%' }} />,
//   }),
//   withScriptjs,
//   withGoogleMap,
// )(props =>
//   (<GoogleMap
//     defaultZoom={12}
//     defaultCenter={{ lat: 35.6585805, lng: 139.7454329 }}
//   >
//     {props.isMarkerShown && <Marker position={{ lat: 35.6585805, lng: 139.7454329 }} />}
//    </GoogleMap>),
// 　);
// export default Map;

const enhance = compose(
  withProps({
    googleMapURL: 'https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places',
    loadingElement: <div style={{ height: '100%' }} />,
    containerElement: <div className="map-container" style={{ height: '400px' }} />,
    mapElement: <div className="map-element" style={{ height: '100%' }} />,
  }),
  withScriptjs,
  withGoogleMap,
);

const App = ({ location }) => (
  <GoogleMap
    defaultZoom={12}
    defaultCenter={location}
    center={location}
  >
    <Marker position={location} />
  </GoogleMap>
);

App.propTypes = {
  location: PropTypes.objectOf(PropTypes.number).isRequired,
};

export default enhance(App);
