
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import logo from './assets/nervlogo.png';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';

function Header() {
  return (
    <Container className="header-login">
    <Navbar variant='dark' className='nav'>
      <Navbar.Brand href="#home">
        <Container className="title-logo">
        <img src={logo}></img>
        <h1>nerv</h1>
        </Container>
        </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#games">Games</Nav.Link>
          <Nav.Link href="#forum">Forum</Nav.Link>
          <Nav.Link href="#about">About</Nav.Link>
          <Nav.Link href="#contact">Contact</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
    <Button className='btn btn-dark'>Log In</Button>
    </Container>
    
  );
}

export default Header;