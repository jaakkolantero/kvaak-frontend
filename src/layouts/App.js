import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import Navigation from "layouts/Navigation";
import Footer from "layouts/Footer";
import Home from "views/Home";
import Sightings from "views/Sightings";
import Species from "views/Species";
import AddSighting from "views/AddSighting";
import BackendListConnect from "views/Settings";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Switch>
          <Route exact path="/" render={() => <Home />} />
          <Route exact path="/Sightings" render={() => <Sightings />} />
          <Route
            path="/Sightings/:id"
            render={({ match }) => <h1>{match.params.id}</h1>}
          />
          <Route path="/AddSighting" render={() => <AddSighting />} />
          <Route path="/Species" render={() => <Species />} />
          <Route path="/Settings" render={() => <BackendListConnect />} />
        </Switch>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
