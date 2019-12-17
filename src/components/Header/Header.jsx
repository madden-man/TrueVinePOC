import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

export const Header = () =>
  <section className="header">
    <div className="header__inner">
      <Link to="/" className="header__big-link">
        TrueVine
      </Link>
    </div>
  </section>;

export default Header;
