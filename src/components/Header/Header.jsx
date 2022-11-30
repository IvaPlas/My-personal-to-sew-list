import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './header.css';
import Sorting from '../Sorting/Sorting';
import Logo from '../../assets/sewing-machine.svg';
import about from '../../assets/user-svgrepo-com (1).svg';
import hamburger from '../../assets/hamburger-menu.svg';
import add from '../../assets/plus-add-svgrepo-com.svg';

const Header = () => {
  const [hiddenNav, setHiddneNav] = useState(true);
  const handleNav = () => {
    setHiddneNav(!hiddenNav);
  };

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
          <img className="menu-bar" src={hamburger} onClick={handleNav} />
          <nav className={(hiddenNav ? 'hidden' : '') + ' navigation-bar'}>
            <Sorting />
            <div className="nav-personal">
              <Link className="new-project_page" to="/newProject">
                <img
                  className="new-project_icon"
                  src={add}
                  alt="new project icon "
                />
                <h4 className="new-project_title">NEW PROJECT</h4>
              </Link>

              <Link className="about_page" to="/about">
                <img className="about_icon" src={about} alt="icon about" />
                <h4 className="about_title">ABOUT</h4>
              </Link>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Header;
