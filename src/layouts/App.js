import React, { Component } from 'react';
import {Route, Switch} from 'react-router-dom';
import Navigation from 'layouts/Navigation';
import Home from 'views/Home';
import Footer from 'layouts/Footer';
import Sightings from 'views/Sightings'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => (
            <Home />
          )}/>
          <Route exact path="/Sightings" render={() => (
            <Home />
          )}/>
          <Route path="/Sightings/:id" render={( {match} ) => (
            <h1>{match.params.id}</h1>)}/>
          <Route path="/AddSighting" render={() => (
            <Home />
          )}/>
          <Route path="/Species" render={() => (
            <Home />
          )}/>
          <Route path="/Settings" render={() => (
            <Home />
          )}/>
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
