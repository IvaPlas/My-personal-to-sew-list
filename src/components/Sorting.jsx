import React from 'react';
import './sorting.css';
// import { Link, useParams } from 'react-router-dom';
// import { garments } from '../garments';

const Sorting = ({ garments }) => {
  // const { category } = useParams();
  return (
    <div className="sorting">
      {/* {garments.map((garment, cathegory) => (
        <div key={cathegory} className="sorting-tags"> */}
      <h4 className="sorting-tag">ALL</h4>
      <h4 className="sorting-tag">TOPS</h4>

      <h4 className="sorting-tag">BOTTOMS</h4>

      <h4 className="sorting-tag">DRESS</h4>

      <h4 className="sorting-tag">ACCESSORIES</h4>
    </div>
  );
};

export default Sorting;
