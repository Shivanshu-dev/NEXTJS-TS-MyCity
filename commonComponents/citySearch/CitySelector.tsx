import React, { ChangeEvent, useEffect, useState } from 'react';
import Form from 'react-bootstrap/Form';
import { ALLCITIES } from '../../static/StaticData/cityData';

function CitySelector() {
  const [showSelector, setShowSelector] = useState(false);
  const [selectedCityIndex , setIndex] = useState(ALLCITIES[0].id);

  const setCityId = (e :any)=>{
console.log(e.target.value , "console");
setIndex(()=> e.target.value)
  }

  return (
    <div className="container">
      <div className="city-container">
        <Form.Group className="mb-3">
          <Form.Label>Select your City</Form.Label>
          <select onChange={setCityId} value={selectedCityIndex}>
            {ALLCITIES.map((item:any) => (
              <option value={item.id} key={item.id}>{item.name}</option>
            ))}
          </select>
        </Form.Group>
      </div>
    </div>
  );
}

export default CitySelector;
