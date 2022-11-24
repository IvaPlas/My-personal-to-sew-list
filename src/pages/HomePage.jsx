import React from 'react';
import GarmentPreview from '../components/GarmentPreview/GarmentPreview';
import Sorting from '../components/Sorting/Sorting';

const HomePage = ({ garments }) => {
  return (
    <>
      <GarmentPreview data={garments} />
    </>
  );
};
export default HomePage;
