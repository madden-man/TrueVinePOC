import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

export const Header = () =>
  <section className="header">
    <div className="header__inner">
      <Link to="/" className="header__big-link">
        TrueVine
      </Link>
      <div className="header__inner-links">
      <Link to="/dship">
          Discipleship
        </Link>
        <Link to="/calendar">
          Calendar
        </Link>
        <Link to="/about-us">
          About Us
        </Link>
        <Link to="/donate">
          Donate
        </Link>
      </div>
    </div>
  </section>;

export default Header;
