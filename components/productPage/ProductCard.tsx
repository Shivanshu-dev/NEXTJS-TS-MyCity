/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styled from 'styled-components';
import QtyToggler from '../../commonComponents/TogglerButton/QtyToggler';
import {ProductsInShop} from '../../interfaces/CommonInterfaces';

const ProductCard = ({data}:{data: ProductsInShop}) => {
   const {id , shopID , cityID, name , price , imageURL , qty} = data;
   console.log(imageURL , "check url")
  return (
    <Card style={{ width: '18rem' , maxHeight:"max-content" }}>
    <Card.Img style={{maxHeight:'180px' , objectFit:'contain'}} variant="top" src={`/${imageURL}`} />
    <Card.Body>
      <Card.Title>{name}</Card.Title>
<Card.Text>Rs. {price}</Card.Text>
<QtyToggler />
    </Card.Body>
  </Card>
  )
}

export default ProductCard;

const CartToggler = styled.div({
    display:'flex',
    width:'100px',
    maxHeight:'20px',
    textAlign:'center',
    alignItems:'center'
})