import {useRouter} from 'next/router';
import React from 'react';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { SHOPDATAOFCITY, ShopsInCity } from '../../interfaces/CommonInterfaces';

function ShopCard({data}:{data : SHOPDATAOFCITY}) {
  const {name , id ,shopImage,timing , shopDescription} = data;
  const router = useRouter();

  const redirectToShop = (id:number)=>{
    router.push(`/shop/${id}/allproducts`);
  }

  return (
    <Card >
      <Card.Img style={{width:'auto' , maxHeight:'236px' , objectFit:'contain'}} variant="top" src={shopImage} />
      <Card.Body>
        <Card.Title>{name}</Card.Title>
        <Card.Text>
          {shopDescription}
          <Button variant="outline-danger">{timing}</Button>
        </Card.Text>
        <Button onClick={()=>redirectToShop(id)} variant="primary">Go to shop </Button>
      </Card.Body>
    </Card>
  );
}

export default ShopCard;