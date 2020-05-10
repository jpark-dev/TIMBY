import React, { useState } from 'react';
import { Transition } from 'react-transition-group';
import MyMapComponent from '../GoogleMaps/index';

const duration = 300;

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0,
}

const transitionStyles = {
  entering: { opacity: 1 },
  entered: { opacity: 1 },
  exiting: { opacity: 0 },
  exited: { opacity: 0 },
};

const Search = () => {
  const [inProp, setInProp] = useState(false);
  return (
    <div>
      <h1>Search Route!</h1>
      <Transition in={inProp} timeout={500}>
        {state => (
          <div style={{
            ...defaultStyle,
            ...transitionStyles[state]
          }}>
            <MyMapComponent
              googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
              loadingElement={<div style={{ height: `100%` }} />}
              containerElement={<div style={{ height: `600px` }} />}
              mapElement={<div style={{ height: `100%` }} />}
            />
          </div>
        )}
      </Transition>
      <button onClick={() => setInProp(inProp ? false : true)}>
        animate show . hide
        </button>
    </div>
  )
};

export default Search;
