import React from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Logo from '../assets/sewing-machine.svg';
import Sorting from './Sorting.jsx';

const Header = () => {
  return (
    <>
      <header className="header-container">
        <nav className="navbar">
          <Link to="/">
            <img className="logo" src={Logo} alt="sewing machine" />
          </Link>
          <Link to="/">
            <h1 className="main-title">MY TO SEW LIST</h1>
          </Link>
          <div className="sorting-nav">
            <Sorting />
          </div>
          <div className="about">About</div>
        </nav>
      </header>
    </>
  );
};

export default Header;
