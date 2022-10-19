import React from 'react';

const GarmentDetail = ({ garment }) => {
  return (
    <>
      <div className="garment-preview">
        <a href={garment.link} target="_blank">
          <h3 className="garment-preview_name">{garment.name}</h3>
        </a>
        <p className=" garment-preview_description">{garment.description}</p>
        <a href={garment.link} target="_blank">
          <img
            className="garment-preview_photo"
            src={garment.image}
            alt={garment.name}
          />
        </a>
      </div>
    </>
  );
};
export default GarmentDetail;
