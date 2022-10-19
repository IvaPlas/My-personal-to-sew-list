import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <>
      <header>
        <nav>
          <Link to="/">
            <h1>My to sew list</h1>
            <h4>Iva's personal list of garments to sew </h4>
          </Link>
        </nav>
      </header>
    </>
  );
};

export default Header;
