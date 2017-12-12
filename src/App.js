import React, { Component } from 'react';
import {Route, Switch, Link} from 'react-router-dom';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

import AddSighting from 'pages/AddSighting';
import HomePage from 'pages/HomePage';
import Sightings from 'pages/Sightings';
import Species from 'pages/Species';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                  <h1 className="title">KvaaK!</h1>
                </ Link>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <Link to="/Sightings" className="navbar-item">Sightings</Link>
                  <Link to="/Species" className="navbar-item">Species</Link>
                  <Link to="/AddSighting" className="navbar-item">Add sighting</Link>
                  <a className="navbar-item">
                    <span className="icon is-large">
                        <i className="fa fa-2x fa-cog"></i>
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </nav>
        </div>

        <div className="hero-body">
          <div className="container">
            <Switch>
              <Route exact path="/" component={HomePage}></Route>
              <Route exact path="/Sightings" component={Sightings}/>
              <Route path="/Sightings/:id" render={( {match} ) => (
                <h1>{match.params.id}</h1>)}/>
              <Route path="/AddSighting" component={AddSighting}></Route>
              <Route path="/Species" component={Species}></Route>
            </Switch>
          </div>
        </div>

      </section>

      <section className="section">
        <div className="container">
          <h1 className="title">
            About KvaaK!
          </h1>
          <p className="subtitle">
            KvaaK! is a platform for hardcore <strong>twitchers</ strong>!
          </p>
          <div className="content">
            <hr />
            <p>With <strong>KvaaK!</strong> you can checkout what birds have been spotted by your twitcher friends and report your own sightings!</p>
          </div>
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
