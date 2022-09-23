import Link from 'next/link';
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

function NoUserHeader() {

  return (
    <Navbar style={{ height: '60px' }} bg="dark" variant="dark">
      <Container>
        <Link href='/'><a style={{textDecoration:'none' , color:'white'}}>My City</a></Link>
        <Nav className="mr-auto">
          <Link href='/login' ><a style={{textDecoration:'none' , color:'white'}}>Login</a></Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default NoUserHeader;
