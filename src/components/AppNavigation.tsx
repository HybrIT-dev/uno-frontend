import React from 'react';
import { Nav, Navbar } from "react-bootstrap";

const AppNavigation = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
    <Navbar.Brand href="#home"><span className="brandStart">Merk</span><span className="brandEnd">Kiezer</span></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
        <Nav.Link href="/Home">Home</Nav.Link>
      </Nav>
    </Navbar.Collapse>
    </Navbar>
  )
}

export default AppNavigation;