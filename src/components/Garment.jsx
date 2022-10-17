import React from 'react';

const Garment = (props) => {
  const { name, description, image, alt } = props;
  return (
    <>
      <div className="garment">
        <h3 className="garment_name">{name}</h3>
        <p className=" garment_descritpion">{description}</p>
        <img src={image} alt={alt} />
      </div>
    </>
  );
};

export default Garment;
