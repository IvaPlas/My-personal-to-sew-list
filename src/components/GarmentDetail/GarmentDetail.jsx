import React from 'react';
import { useParams } from 'react-router-dom';
import './garment-detail.css';
import Form from '../Form/Form';

const GarmentDetail = ({ garments }) => {
  const { name } = useParams();

  return (
    <>
      {garments
        .filter((garment) => garment.name === name)
        .map((garment, index) => (
          <div key={index} className="garment-detail_container">
            <img
              className="garment-detail_photo"
              src={garment.image}
              alt={garment.name}
            />
            <div classname="garment-detail_details">
              <a href={garment.link} target="_blank">
                <h3 className="garment-detail_name">{garment.name}</h3>
              </a>
              <p className="garment-detail_description">
                {garment.description}
              </p>
              <Form />
            </div>
          </div>
        ))}
    </>
  );
};
export default GarmentDetail;
