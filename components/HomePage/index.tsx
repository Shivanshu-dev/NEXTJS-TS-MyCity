import React from 'react';
import ShopCard from './ShopCard';
import styled from 'styled-components';

const HomeContainer = () => {
  return (
    <Head>
    <SubHead>
      <ShopCard />
    </SubHead>
  </Head>
  )
}

export default HomeContainer;


const Head = styled.div`
width: 100%;
display: flex;
flex-wrap: wrap;
margin-top: 14px;
margin-bottom: 14px;
`
const SubHead = styled.div`
max-width: 30%;
display: flex;
justify-content: center;
margin-top:20px;
`