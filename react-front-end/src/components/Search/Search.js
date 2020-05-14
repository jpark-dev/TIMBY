import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MyMapComponent from '../GoogleMaps/index';
import TourCard from '../TourCard/index';
import Box from '@material-ui/core/Box';
// import SearchBar from '../SearchBar/SearchBar'
// import IconButton from '@material-ui/core/IconButton';
// import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles((theme) => ({
  box: {
    backgroundColor: 'transparent'
  }
}));

const Search = () => {
  const classes = useStyles();
  const [inProp, setInProp] = useState(false);
  const [activeCard, setActiveCard] = useState(1);

  const changeCard = (key) => {
    setActiveCard(key);
  }

  const markers = [
    { key: '1', lat: 49.28, lng: -123.12, loadInfo: changeCard },
    { key: '2', lat: 49.30, lng: -123.20, loadInfo: changeCard },
    { key: '3', lat: 49.25, lng: -123.05, loadInfo: changeCard },
  ];
  // const [searching, setSearching] = useState(false);

  const changeProp = () => {
    setInProp(inProp ? false : true);
  }
  return (
    <div>
      {/* <SearchBar /> */}
      {/* <IconButton aria-label="delete" onClick={() => setSearching(searching ? false : true)} >
        <SearchIcon />
      </IconButton> */}
      <MyMapComponent
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCBuFpoG9VwY6gloZZ3xSAtGBkUFFOGWIs&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `770px`, width: '100%' }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markers={markers}
      />
      <Box
        bgcolor="background.paper"
        color="text.primary"
        p={2}
        position="absolute"
        bottom={25}
        className={classes.box}
      >
        <TourCard
          position="absolute"
          top={400}
          title="Tour de Breweries"
          location="Vancouver"
          time="9:00 AM"
          date="05.24.2020"
          description="Description of the event. Description of the event."
          price="10" duration="2H" rating={activeCard}
          toggleMap={changeProp} />
      </Box>
    </div>
  )
};

export default Search;
