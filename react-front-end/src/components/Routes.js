import React from 'react';

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Search from './Search/Search';
import Listings from './Listings/Listings';
import Profile from './Profile/Profile';
import Bookings from './Bookings/Bookings';
import BotNav from './BotNav';

export default function Routes() {

  return (
    <Router>
      <Switch>
        <Route path="/search">
          <Search />
        </Route>
        <Route path="/bookings">
          <Bookings />
        </Route>
        <Route path="/listings">
          <Listings />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <Route path="/" exact>
          <Search />
        </Route>
      </Switch>
    </Router>
  );
};