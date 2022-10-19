import React from 'react';
import { useParams } from 'react-router-dom';

const GarmentDetail = ({ garments }) => {
  const { name } = useParams();

  return (
    <>
      {garments
        .filter((garment) => garment.name === name)
        .map((garment, index) => (
          <div key={index} className="garment-preview">
            <a href={garment.link} target="_blank">
              <h3 className="garment-preview_name">{garment.name}</h3>
            </a>
            <p className=" garment-preview_description">
              {garment.description}
            </p>
            <a href={garment.link} target="_blank">
              <img
                className="garment-preview_photo"
                src={garment.image}
                alt={garment.name}
              />
            </a>
          </div>
        ))}
    </>
  );
};
export default GarmentDetail;
