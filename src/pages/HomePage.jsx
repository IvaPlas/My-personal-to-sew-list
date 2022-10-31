import React from 'react';
import GarmentPreview from '../components/GarmentPreview';
import Sorting from '../components/Sorting';

const HomePage = ({ garments }) => {
  return (
    <>
      <h4 className="welcome">
        My name is Iva and this is my personal sewing log with my favourite
        garments I want to sew or I sewed already.
      </h4>
      <GarmentPreview data={garments} />
    </>
  );
};
export default HomePage;
