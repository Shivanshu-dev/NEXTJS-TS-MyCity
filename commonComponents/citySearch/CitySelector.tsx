import React, { useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ALLCITIES } from '../../static/StaticData/cityData';
// import { useLocation } from 'react-router-dom';
// import { ALLCITIES } from '../../staticHelpers/cityData';
// import './CitySelector.css';

function CitySelector() {
  const [showSelector, setShowSelector] = useState(false);
  // const { pathname } = useLocation();

  // useEffect(() => {
  //   if (pathname && pathname === '/') {
  //     setShowSelector(() => true);
  //   } else {
  //     setShowSelector(() => false);
  //   }
  // }, [pathname]);

  const setCityId = (e:any)=>{
console.log(e , "console");
  }

  return (
    <div className="container">
      <div className="city-container">
        <Form.Group className="mb-3">
          <Form.Label>Select your City</Form.Label>
          <Form.Select onSelect={setCityId}>
            {ALLCITIES.map((item) => (
              <option onChange={setCityId} key={item.id}>{item.name}</option>
            ))}
          </Form.Select>
        </Form.Group>
      </div>
    </div>
  );
}

export default CitySelector;
