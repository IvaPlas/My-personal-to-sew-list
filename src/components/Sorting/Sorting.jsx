import React from 'react';
import { Link } from 'react-router-dom';
import './sorting.css';
import tops from '../../assets/clothing-clothes-t-shirt-svgrepo-com.svg';
import all from '../../assets/closet-clothes-furniture-2-svgrepo-com.svg';
import bottoms from '../../assets/clothing-pants-trousers-svgrepo-com.svg';
import dresses from '../../assets/dress-clothing-clothes-svgrepo-com.svg';
import accessories from '../../assets/purse-lady-accessory-svgrepo-com.svg';
import Tops from '../../pages/Tops';
// import { Link, useParams } from 'react-router-dom';
// import { garments } from '../garments';

const Sorting = ({ garments }) => {
  return (
    <div className="sorting">
      <Link className="all-page sorting-tag" to="/all">
        <img className="icon-all icon" src={all} al="wardrobe icon"></img>
        <h4 className="sorting-tag_name sorting-tag_all">ALL</h4>{' '}
      </Link>

      <Link className="tops-page sorting-tag" to="/tops">
        <img className="icon-tops icon" src={tops} al="top icon"></img>
        <h4 className="sorting-tag_name sorting-tag_tops">TOPS</h4>{' '}
      </Link>

      <Link className="bottoms-page sorting-tag" to="/bottoms">
        <img
          className="icon-bottoms icon"
          src={bottoms}
          al="trouses icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_bottoms">BOTTOMS</h4>
      </Link>

      <Link className="dresses-page sorting-tag" to="/dresses">
        <img
          className="icon-dresses icon"
          src={dresses}
          al="dresses icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_dresses">DRESSES</h4>
      </Link>

      <Link className="accessories-page sorting-tag" to="/accessories">
        <img
          className="icon-accessories icon"
          src={accessories}
          al="accessories icon"
        ></img>
        <h4 className="sorting-tag_name sorting-tag_accessories">
          ACCESSORIES
        </h4>
      </Link>
    </div>
  );
};

export default Sorting;
