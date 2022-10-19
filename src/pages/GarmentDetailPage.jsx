import React from 'react';
import GarmentDetail from '../components/GarmentDetail';

const GarmentDetailPage = ({ garments }) => {
  return (
    <div>
      <GarmentDetail garments={garments} />
    </div>
  );
};

export default GarmentDetailPage;
