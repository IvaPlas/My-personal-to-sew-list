import React from 'react';
import './Garment-preview.css';
import { Link } from 'react-router-dom';
import { garments } from '../garments';

const GarmentPreview = () => {
  return (
    <>
      {garments.map((garment, index) => (
        <Link to={`/garments/${garment.name}`}>
          <div key={index} className="garment-preview">
            <h3 className="garment-preview_name">{garment.name}</h3>
            <p className=" garment-preview_description">
              {garment.description}
            </p>
            <img
              className="garment-preview_photo"
              src={garment.image}
              alt={garment.name}
            />
          </div>
        </Link>
      ))}
    </>
  );
};

export default GarmentPreview;
