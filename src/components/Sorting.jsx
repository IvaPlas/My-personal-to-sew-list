import React from 'react';
import './sorting.css';
import tops from '../assets/clothing-clothes-t-shirt-svgrepo-com.svg';
import all from '../assets/closet-clothes-furniture-2-svgrepo-com.svg';
import bottoms from '../assets/clothing-pants-trousers-svgrepo-com.svg';
import dresses from '../assets/dress-clothing-clothes-svgrepo-com.svg';
import accessories from '../assets/purse-lady-accessory-svgrepo-com.svg';
// import { Link, useParams } from 'react-router-dom';
// import { garments } from '../garments';

const Sorting = ({ garments }) => {
  // const { category } = useParams();
  return (
    <div className="sorting">
      {/* {garments.map((garment, cathegory) => (
        <div key={cathegory} className="sorting-tags"> */}
      <div className="sorting-tag">
        <img className="icon-all icon" src={all} al="wardrobe icon"></img>
        <h4 className="sorting-tag_name sorting-tag_all">ALL</h4>
      </div>
      <div className="sorting-tag">
        <img className="icon-tops icon" src={tops} al="top icon"></img>
        <h4 className="sorting-tag_name sorting-tag_tops">TOPS</h4>
      </div>
      <div className="sorting-tag">
        <img
          className="icon-bottoms icon"
          src={bottoms}
          al="trouses icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_bottoms">BOTTOMS</h4>
      </div>
      <div className="sorting-tag">
        <img
          className="icon-dresses icon"
          src={dresses}
          al="dresses icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_dresses">DRESSES</h4>
      </div>
      <div className="sorting-tag">
        <img
          className="icon-accessories icon"
          src={accessories}
          al="accessories icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_accessories">
          ACCESSORIES
        </h4>
      </div>
    </div>
  );
};

export default Sorting;
