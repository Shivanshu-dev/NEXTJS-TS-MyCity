import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function LoggedInHeader() {
  return (
    <Navbar style={{ height: '60px' }} bg="dark" variant="dark">
      <Container>
        <Nav.Link style={{ fontStyle: 'none', textDecoration: 'none', color: 'white' }}>My City</Nav.Link>
        <Nav className="mr-auto">
          <Nav.Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
          >
            My Account
          </Nav.Link>
          <Nav.Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
          >
            Cart
          </Nav.Link>
          <Nav.Link
            style={{
              fontStyle: 'none', textDecoration: 'none', color: 'white', marginRight: '8px',
            }}
          >
            Logout
          </Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default LoggedInHeader;
