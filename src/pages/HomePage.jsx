import React from 'react';
import GarmentPreview from '../components/GarmentPreview';

const HomePage = ({ garments }) => {
  return (
    <>
      <h6>Hi my name is Iva</h6>
      <GarmentPreview data={garments} />
    </>
  );
};
export default HomePage;
