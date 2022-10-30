import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Sorting from './Sorting.jsx';
import Logo from '../assets/sewing-machine.svg';

const Header = () => {
  return (
    <>
      <header className="header-container">
        <nav className="logo-title">
          <Link to="/">
            <img className="logo" src={Logo} al="sewing machine"></img>
            <h1 className="main-title">
              MY SEWING <br /> LOG
            </h1>
          </Link>
        </nav>
        <div className="sorting-nav">
          <Sorting />
          <div className="about">ABOUT</div>
        </div>
      </header>
    </>
  );
};

export default Header;
