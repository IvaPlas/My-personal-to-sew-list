import React from "react";

import { useParams } from "react-router-dom";
import GarmentPreview from "../components/GarmentPreview";

const Tops =({garments}) => {
  const { category } = useParams();

  return (
    // {garments
    //   .filter((garment) => (garment.category === category))
    //   .map((garment, index)=>(<GarmentPreview key={index} garments={garments}/>))}

    {garments
      .filter((garment) => (garment.category === category))
      .map((garment, index)=>(
        {garments.map((garment, index) => (
          <div key={index} className="garment-preview">
            <Link to={`/garments/${garment.name}`}>
              <h3 className="garment-preview_name">{garment.name}</h3>{' '}
            </Link>
            <img
              className="garment-preview_photo"
              src={garment.image}
              alt={garment.name}
            />
          </div>
      </>))}
    );
}
