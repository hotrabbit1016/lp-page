import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" className="shadow-sm">
      <Container>
        <Navbar.Brand href="#home" className="fw-bold text-success">YieldWise</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#how-it-works">How It Works</Nav.Link>
            <Nav.Link href="#founder">Founder</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;