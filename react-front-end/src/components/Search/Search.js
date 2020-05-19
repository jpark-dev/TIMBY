import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyMapComponent from '../GoogleMaps/index';
import TourCard from '../TourCard/index';
import Box from '@material-ui/core/Box';
// import SearchBar from '../SearchBar/SearchBar'
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

import getTours from '../../helpers/getTours';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'transparent'
  },
  search: {
    marginTop: '-56px',
  }
}));

const Search = () => {
  const classes = useStyles();
  const [activeCard, setActiveCard] = useState(0);
  const [tours, setTours] = useState([]);
  const [markers, setMarkers] = useState([]);

  useEffect(() => {
    getTours()
      .then(dataTours => {
        let tempMarkers = [];
        setTours(dataTours);
        for (const { id, lat, lng } of dataTours) {
          let tempMarker = {};
          tempMarker.key = id;
          tempMarker.lat = parseFloat(lat);
          tempMarker.lng = parseFloat(lng);
          tempMarkers.push(tempMarker);
        }
        setMarkers(tempMarkers);
      })
      .catch(error => console.log(error));
  }, []);

  const changeCard = (key) => {
    setActiveCard(key - 1);
  };

  return (
    <div className={classes.search}>
      {/* <SearchBar /> */}
      {/* <IconButton aria-label="delete" onClick={() => setSearching(searching ? false : true)} >
        <SearchIcon />
      </IconButton> */}
      <MyMapComponent
        googleMapURL={`https://maps.googleapis.com/maps/api/js?key=${process.env.REACT_APP_MAP_API_KEY}&v=3.exp&libraries=geometry,drawing,places`}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `100vh`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%`, zIndex: -1 }} />}
        markers={markers}
        defaultZoom={12}
        lat={49.24}
        changeCard={changeCard}
      />
      <Box
        bgcolor="background.paper"
        color="text.primary"
        p={2}
        position="absolute"
        bottom={0}
        className={classes.box}
      >
        <TourCard
          position="absolute"
          top={400}
          {...tours[activeCard]} />
      </Box>
    </div>
  )
};

export default Search;
