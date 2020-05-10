import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import MyMapComponent from '../GoogleMaps/index';

const Search = () => {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <h1>Search Route!</h1>
      <Collapse in={inProp}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Collapse>
      <button onClick={() => setInProp(inProp ? false : true)}>
        animate show . hide
      </button>
    </div>
  )
};

export default Search;
