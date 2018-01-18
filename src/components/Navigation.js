import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Navbar, NavbarBrand, NavbarItem, Title, NavbarBurger, NavbarMenu, NavbarEnd} from 'bloomer'

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.toggleActive= this.toggleActive.bind(this);
    this.state = {
        isActive: false,
    };
  }

  toggleActive() {
    this.setState({ isActive: !this.state.isActive });
  };

  render() {
    return (
      <React.Fragment>
        <Navbar>
          <NavbarBrand>
            <NavLink to="/" className="navbar-item">
              <Title>KvaaK!</ Title>
            </ NavLink>
            <NavbarBurger isActive={this.state.isActive} onClick={this.toggleActive} />
          </ NavbarBrand>
          <NavbarMenu isActive={this.state.isActive} onClick={this.onClickNav}>
            <NavbarEnd>
              <NavLink to="/Sightings" activeClassName="is-active" className="navbar-item">Sightings</NavLink>
              <NavLink to="/Species" activeClassName="is-active" className="navbar-item">Species</NavLink>
              <NavLink to="/AddSighting" activeClassName="is-active" className="navbar-item">Add sighting</NavLink>
              <NavLink to="/Settings" activeClassName="is-active" className="navbar-item">
                <span className="icon is-large">
                    <i className="fa fa-2x fa-cog" />
                </span>
              </ NavLink>
            </ NavbarEnd>
          </ NavbarMenu>
        </ Navbar>
      </ React.Fragment>
    );
  }
}

export default Navigation;
