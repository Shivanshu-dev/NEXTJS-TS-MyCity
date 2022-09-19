import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NoUserHeader() {
  return (
    <Navbar style={{ height: '60px' }} bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ fontStyle: 'none', textDecoration: 'none', color: 'white' }} >My City</Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link style={{ fontStyle: 'none', textDecoration: 'none', color: 'white' }}>Login</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NoUserHeader;
