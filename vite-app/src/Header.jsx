import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React, { useContext, useState } from 'react';
import logo from './assets/nervlogo.png';
import { Navbar, Nav, Button, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { LoginContext } from './App';

function Header() {
  const contextValue = useContext(LoginContext);
  const user = contextValue.user;
  const [expanded, setExpanded] = useState(false);

  const closeNav = () => setExpanded(false);

  return (
    <Container className='header-login'>
      <Navbar expanded={expanded} onToggle={setExpanded} variant='dark' className='nav' expand='lg'>
        <Navbar.Brand as={Link} to='/home' onClick={closeNav}>
          <Container className='title-logo'>
            <img src={logo} alt='logo' />
            <h1>nerv</h1>
          </Container>
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => setExpanded(expanded ? false : "expanded")} aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='mr-auto'>
            <Nav.Link as={Link} to='/home' onClick={closeNav}>
              Home
            </Nav.Link>
            <Nav.Link as={Link} to='/games' onClick={closeNav}>
              Lunaris
            </Nav.Link>
            <Nav.Link as={Link} to='/blog' onClick={closeNav}>
              Blog
            </Nav.Link>
            <Nav.Link as={Link} to='/about' onClick={closeNav}>
              About
            </Nav.Link>
            <Nav.Link as={Link} to='/contact' onClick={closeNav}>
              Contact
            </Nav.Link>
          </Nav>
          <Button className='btn-dark py-3 login-button' as={Link} to='/login' onClick={closeNav}>
            {Object.keys(user).length !== 0 ? 'Account' : 'Log In'}
          </Button>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
}

export default Header;