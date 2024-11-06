import React from 'react';
import { Navbar, Nav, Container, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function BarNavigation() {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#2E2733', color: '#fff' }}>
      <Container>
        <Navbar.Brand as={Link} to="/" style={{ color: '#fff', fontWeight: 'bold' }}>
          <img src="path/to/logo.png" alt="logo" style={{ width: '30px', marginRight: '10px' }} />
          Ancient Sips
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/" style={{ color: '#fff' }}>Home</Nav.Link>
            <Nav.Link as={Link} to="/favorites" style={{ color: '#fff' }}>My favorites</Nav.Link>
            <Nav.Link as={Link} to="/all-drinks" style={{ color: '#fff' }}>All Drinks</Nav.Link>
            <Nav.Link as={Link} to="/DiscoverCocktail" style={{ color: '#fff' }}>Discover your drink</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Buscar"
              className="me-2"
              aria-label="Buscar"
              style={{ borderRadius: '20px' }}
            />
            <Button variant="outline-light">
              🔍
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BarNavigation;
