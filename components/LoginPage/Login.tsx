/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'next/router';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

type Props = {}

const Login = (props: Props) => {
 const router = useRouter();
  const sendToRegister = ()=>{
router.push('/register');
  }

  return (
    <>
    <Form>
    <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" placeholder="Enter email" />
      <Form.Text className="text-muted">
        We'll never share your email with anyone else.
      </Form.Text>
    </Form.Group>

    <Form.Group className="mb-3" controlId="formBasicPassword">
      <Form.Label>Password</Form.Label>
      <Form.Control type="password" placeholder="Password" />
    </Form.Group>
    <Button variant="primary" type="submit">
      Submit
    </Button>
  </Form>
  <RegisterLink onClick={sendToRegister}>Register here</RegisterLink>
  </>
  )
}

export default Login

const RegisterLink = styled.div({
    color:'blue',
    textDecoration:'underline',
    cursor:'pointer',
    marginTop:'6px'
})