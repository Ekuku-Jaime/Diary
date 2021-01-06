import React, { Component } from "react";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";
import Nav from "react-bootstrap/Nav";
import { logout } from "../../actions/auth";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import {  PersonCircle } from 'react-bootstrap-icons';
class NavB extends Component {
  static propTypes = {
    auth: PropTypes.object.isRequired,
    logout: PropTypes.func.isRequired,
  };
  render() {
    const { isAuthenticated, user } = this.props.auth;
    const authLinks = (
      <Nav className="mr-auto">
        <NavDropdown title="Account" id="basic-nav-dropdown">
          <NavDropdown.Item onClick={this.props.logout}>
          <PersonCircle /> Logout
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
    );
    const guestLinks = (
      <Nav className="ml-auto">
        <Nav.Link>
          {" "}
          <Link to="/register">Register</Link>
        </Nav.Link>
        <Nav.Link>
          {" "}
          <Link to="/login">Login</Link>
        </Nav.Link>
      </Nav>
    );
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand> <Link to="/">Diary</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav " />
        <Navbar.Collapse  id="basic-navbar-nav ">
         <div className="ml-auto"> {isAuthenticated ? authLinks : guestLinks}</div>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
const mapStateToProps = (state) => ({
  auth: state.auth,
});
export default connect(mapStateToProps, { logout })(NavB);
