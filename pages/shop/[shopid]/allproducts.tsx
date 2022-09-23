import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import ProductCard from '../../../components/productPage/ProductCard';
import { ProductsInShop } from '../../../interfaces/CommonInterfaces';
import { PRODUCTSFORSHOP1 } from '../../../static/StaticData/shopData';

const AllProducts = () => {
  const {query} = useRouter();
  const [productsData , setProductsData] = useState([] as Array<ProductsInShop>);

  // from city id get all shops save it in redux
  // then from that redux data filter the data with shop id
  // on unmounting when cx goes to select city again clear the state in redux with new data

  useEffect(()=>{
if(query){
setProductsData(()=> PRODUCTSFORSHOP1);
}
  },[query])
  return (
    <>
    <ProductContainer className='row'>
   { productsData.length ? productsData.map((item)=>(
<ProductCardContainer className='col-4' key={item.id}><ProductCard data={item} /></ProductCardContainer>
    )): <><p>This Shop Has No Products To sell</p> </> }
    </ProductContainer>
    </>
  )
}

export default AllProducts;

const ProductContainer = styled.div({
  width:'100%'
})

const ProductCardContainer = styled.div({
  marginBottom:'8px'
})