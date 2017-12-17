import React, { Component } from 'react';
import {Route, Switch, NavLink} from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import AddSighting from 'pages/AddSighting';
import HomePage from 'pages/HomePage';
import Sightings from 'pages/Sightings';
import Species from 'pages/Species';
import Navigation from 'components/Navigation';
import Header from 'components/Header';


class App extends Component {
  render() {
    var homePageProps = {};
    homePageProps.title = "What is that?";
    homePageProps.subtitle =
      <React.Fragment>
        Is it a plane? <strong>No!</strong> Is it a bird? <strong>Yes!</strong>
      </React.Fragment>;

    var sightingsProps = {};
    sightingsProps.title = "Sightings";
    sightingsProps.subtitle =
      <React.Fragment>
        Jimbo just saw a <strong>mockingbird</strong>!
      </React.Fragment>;

    var addSightingsProps = {};
    addSightingsProps.title = "Add Sightings";
    addSightingsProps.subtitle =
      <React.Fragment>
        Did you see something interesting? Tell me about it!
      </React.Fragment>;

    var speciesProps = {};
    speciesProps.title = "Species";
    speciesProps.subtitle =
      <React.Fragment>
        There is many species but these are mine!
      </React.Fragment>;

    return (
      <React.Fragment>
      <section className="hero is-primary">
        <div className="hero-head">
          <Navigation />
        </div>
        <div className="hero-body">
          <div className="container">
              <Switch>
                <Route exact path="/" render={() => (
                  <Header {...homePageProps} />
                )}/>
                <Route exact path="/Sightings" render={() => (
                  <Header {...sightingsProps} />
                )}/>
                <Route path="/Sightings/:id" render={( {match} ) => (
                  <h1>{match.params.id}</h1>)}/>
                <Route path="/AddSighting" render={() => (
                  <Header {...addSightingsProps} />
                )}/>
                <Route path="/Species" render={() => (
                  <Header {...speciesProps} />
                )}/>
              </Switch>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="container">
          <Switch>
            <Route exact path="/" render={() => (
              <HomePage/>
            )}/>
            <Route exact path="/Sightings" render={() => (
              <Sightings/>
            )}/>
            <Route path="/Sightings/:id" render={( {match} ) => (
              <h1>{match.params.id}</h1>)}/>
            <Route path="/AddSighting" render={() => (
              <Header {...addSightingsProps} />
            )}/>
            <Route path="/Species" render={() => (
              <Header {...speciesProps} />
            )}/>
          </Switch>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="content has-text-centered">
            <p>
              <strong>KvaaK!</strong> by <a href="https://terokoodaa.io">Tero Jaakkola</a>. <br />
              <a className="is-inverted is-outlined is-small" href="https://github.com/terokoodaa">
                <span className="icon is-large">
                  <i className="fa fa-2x fa-github"></i>
                </span>
              </a>
            </p>
          </div>
        </div>
      </footer>
      </React.Fragment>
    );
  }
}

export default App;
