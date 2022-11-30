import React from 'react';
import { useParams } from 'react-router-dom';
import '../components/GarmentPreview/garment-preview.css';
import { Link } from 'react-router-dom';
import { garments } from '../garments';

const Tops = ({ garments }) => {
  const { category } = useParams();
  return (
    <>
      <div className="garment-preview_container">
        {garments
          .filter((garment) => garment.category === category)
          .map((garment, index) => (
            <div key={index} className="garment-preview">
              <Link to={`/garments/${garment.name}`}>
                <img
                  className="garment-preview_photo"
                  src={garment.image}
                  alt={garment.name}
                />{' '}
                <h4 className="garment-preview_name">{garment.name}</h4>{' '}
              </Link>
            </div>
          ))}
      </div>
    </>
  );
};

export default Tops;
