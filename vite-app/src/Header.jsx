import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext } from 'react';
import logo from './assets/nervlogo.png';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from './App';

function Header() {
  const contextValue = useContext(LoginContext)
  const user = contextValue.user
  return (
    <Container className='header-login'>
      <Navbar variant='dark' className='nav'>
        <Navbar.Brand as={Link} to='/home'>
          <Container className='title-logo'>
            <img src={logo} alt='logo' />
            <h1>nerv</h1>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/home'>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/games'>
              Games
            </Nav.Link>
            <Nav.Link as={Link} to='/forum'>
              Forum
            </Nav.Link>
            <Nav.Link as={Link} to='/about'>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/contact'>
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Button className='btn-dark py-3 login-button' as={Link} to='/login'>
        {Object.keys(user).length !=0? 'Log Out': 'Log In'}
      </Button>
    </Container>
  );
}

export default Header;
