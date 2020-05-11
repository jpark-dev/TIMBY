import React, { useState } from 'react';
import Collapse from '@material-ui/core/Collapse';
import MyMapComponent from '../GoogleMaps/index';
import TourCard from '../TourCard/index';
import Box from '@material-ui/core/Box';
import SearchBar from '../SearchBar/SearchBar'
import IconButton from '@material-ui/core/IconButton';
import ExploreIcon from '@material-ui/icons/Explore';
import SearchIcon from '@material-ui/icons/Search';

const Search = () => {
  const [inProp, setInProp] = useState(false);
  const [searching, setSearching] = useState(false);
  return (
    <div>
      <SearchBar />
      <IconButton aria-label="delete" onClick={() => setSearching(searching ? false : true)} >
        <SearchIcon />
      </IconButton>
      <Collapse in={inProp}>
        <MyMapComponent
          googleMapURL="https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places"
          loadingElement={<div style={{ height: `100%` }} />}
          containerElement={<div style={{ height: `600px` }} />}
          mapElement={<div style={{ height: `100%` }} />}
        />
      </Collapse>
      <Box
        bgcolor="background.paper"
        color="text.primary"
        p={2}
        position="absolute"
        bottom={75}
      >
        <IconButton aria-label="delete" onClick={() => setInProp(inProp ? false : true)} >
          <ExploreIcon />
        </IconButton>
        <TourCard
          position="absolute"
          top={400} price="10" duration="2H" rating="4.6" />
      </Box>
    </div>
  )
};

export default Search;
