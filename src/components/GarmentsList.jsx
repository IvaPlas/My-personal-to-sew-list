import React from 'react';
import Garment from './Garment';
import { garments } from '../garments';

const GarmentsList = () => {
  return (
    <>
      <div>
        {garments.map((garment) => (
          <Garment
            key={garment.name}
            name={garment.name}
            description={garment.description}
            image={garment.image}
          />
        ))}
      </div>
    </>
  );
};

export default GarmentsList;
