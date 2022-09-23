import React, { useState } from 'react';
import ShopCard from './ShopCard';
import styled from 'styled-components';
import { CITYSHOPS } from '../../static/StaticData/shopData';

const HomeContainer = () => {
const [cityShops , selectCityShops] = useState(1);

const shopData = CITYSHOPS.filter((item:any)=> item.cityId === cityShops);

  return (
    <Head>
    <SubHead className='row'>
    { shopData[0]?.shopList.map((item:any)=> <ShopCardRow className='col-4' key={item.id}>
      <ShopCard data={item} />
    </ShopCardRow>
       ) }
    </SubHead>
  </Head>
  )
}

export default HomeContainer;



const Head = styled.div({
width: '100%',
display: 'flex',
marginTop: '14px',
marginBottom: '14px',
})

const SubHead = styled.div({
display: 'flex',
justifyContent: 'start',
marginTop:'20px'
})

const ShopCardRow = styled.div({
  marginBottom:'8px'
})