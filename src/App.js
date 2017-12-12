import React, { Component } from 'react';
import 'bulma/css/bulma.css';
import 'font-awesome/css/font-awesome.min.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <section className="hero is-primary is-medium">
        <div className="hero-head">
          <nav className="navbar">
            <div className="container">
              <div className="navbar-brand">
                <a className="navbar-item" href="../">
                  <h1 className="title  ">KvaaK!</h1>
                </a>
                <span className="navbar-burger burger" data-target="navbarMenu">
                  <span></span>
                  <span></span>
                  <span></span>
                </span>
              </div>
              <div id="navbarMenu" className="navbar-menu">
                <div className="navbar-end">
                  <a className="navbar-item">
                    Sightings
                  </a>
                  <a className="navbar-item">
                    Species
                  </a>
                  <a className="navbar-item">
                    Add Sigting
                  </a>
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
            <h1 className="title">
              What is that?
            </h1>
            <h2 className="subtitle">
              Is it a plane? <strong>No!</strong> Is it a bird? <strong>Yes!</strong>
            </h2>
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
            <p>With <strong>KvaaK!</strong> you can checkout what birds have been spotted by your twitcher friends and report your own sigtings!</p>
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
