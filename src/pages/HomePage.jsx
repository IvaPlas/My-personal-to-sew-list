import React from 'react';
import GarmentPreview from '../components/GarmentPreview';
import { garments } from '../garments';

const HomePage = () => {
  return (
    <>
      <h6>Hi my name is Iva</h6>
      {garments.map((garment) => (
        <GarmentPreview
          key={garment.name}
          name={garment.name}
          image={garment.image}
          garment={garment}
        />
      ))}
    </>
  );
};
export default HomePage;
