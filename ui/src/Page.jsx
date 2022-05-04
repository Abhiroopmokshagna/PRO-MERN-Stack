import React from "react";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Glyphicon,
  Grid,
  Col,
} from "react-bootstrap";
import Contents from "./Contents.jsx";
import { LinkContainer } from "react-router-bootstrap";
import IssueAddNavItem from "./IssueAddNavItem.jsx";
import Search from "./Search.jsx";
import SigninNavItem from "./SigninNavItem.jsx";

function NavBar() {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>Issue Tracker</Navbar.Brand>
      </Navbar.Header>
      <Nav>
        <LinkContainer exact to="/">
          <NavItem>Home</NavItem>
        </LinkContainer>
        <LinkContainer to="/issues">
          <NavItem>Issue List</NavItem>
        </LinkContainer>
        <LinkContainer to="/report">
          <NavItem>Report</NavItem>
        </LinkContainer>
      </Nav>
      <Col sm={5}>
        <Navbar.Form>
          <Search />
        </Navbar.Form>
      </Col>
      <Nav pullRight>
        <IssueAddNavItem />
        <SigninNavItem />
        <NavDropdown
          id="user-dropdown"
          title={<Glyphicon glyph="option-vertical" />}
          noCaret
        >
          <LinkContainer to="/about">
            <MenuItem>About</MenuItem>
          </LinkContainer>
        </NavDropdown>
      </Nav>
    </Navbar>
  );
}
function Footer() {
  return (
    <small>
      <hr />
      <p className="text-center">
        Full source code available at this{" "}
        <a href="https://github.com/Abhiroopmokshagna/PRO-MERN-Stack">
          GitHub repository
        </a>
      </p>
    </small>
  );
}
export default function Page() {
  return (
    <div>
      <NavBar />
      <Grid fluid>
        <Contents />
      </Grid>
      <Footer />
    </div>
  );
}
