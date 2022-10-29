import React from 'react';
import GarmentPreview from '../components/GarmentPreview';
import Sorting from '../components/Sorting';

const HomePage = ({ garments }) => {
  return (
    <>
      <h4 className="welcome">
        Welcome and see my most favourite garments I want to sew or I sewed
        already and get inspire maybe
      </h4>
      <Sorting data={garments} />
      <GarmentPreview data={garments} />
    </>
  );
};
export default HomePage;
