import React from 'react';
import { useParams } from 'react-router-dom';
import GarmentDetail from '../components/GarmentDetail';
import { garments } from '../garments';

const GarmentDetailPage = () => {
  return (
    <div>
      {garments.map((garment) => (
        <GarmentDetail
          key={garment.name}
          name={garment.name}
          description={garment.description}
          image={garment.image}
          link={garment.link}
          id={garment.id}
        />
      ))}
    </div>
  );
};

export default GarmentDetailPage;
