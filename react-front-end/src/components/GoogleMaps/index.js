import React from 'react';
import { GoogleMap, Marker, withScriptjs, withGoogleMap } from "react-google-maps";
import styles from './GoogleMapsStyles.json';

const MyMapComponent = withScriptjs(withGoogleMap((props) =>
  <GoogleMap
    defaultZoom={props.defaultZoom}
    defaultCenter={{ lat: 49.282730, lng: -123.1207351 }}
    defaultOptions={{
      fullscreenControl: false,
      styles: styles,
      disableDefaultUI: true
    }}
  >
    {props.markers.map(marker => {
      return (
        <Marker
          key={marker.key}
          position={{ lat: marker.lat, lng: marker.lng }}
          onClick={() => props.changeCard(marker.key)}
        />
      )
    })}
  </GoogleMap>
))

export default MyMapComponent;