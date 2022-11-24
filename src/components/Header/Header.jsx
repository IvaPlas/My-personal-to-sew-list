import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Sorting from '../Sorting/Sorting';
import Logo from '../../assets/sewing-machine.svg';
import about from '../../assets/user-svgrepo-com (1).svg';
import hamburger from '../../assets/hamburger-menu.svg';

const Header = () => {
  const [hiddenNav, setHiddneNav] = useState(true);

  return (
    <>
      <header className="header-container">
        <div className="logo-title">
          <Link className="logo" to="/">
            <img className="logo_icon" src={Logo} al="sewing machine"></img>
            <h1 className="logo_main-title">
              MY <br /> SEWING <br /> LOG
            </h1>
          </Link>
        </div>
        <div className="navigation">
          <img
            className="menu-bar"
            src={hamburger}
            onClick={() => setHiddneNav(!hiddenNav)}
          />
          <nav className={(hiddenNav ? 'hidden' : '') + ' navigation-bar'}>
            <Sorting />
            <div className="about">
              {' '}
              <Link className="about-page" to="/about">
                <h4 className="about-me">ABOUT ME</h4>
                <img className="about-logo" src={about} alt="icon about" />
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
