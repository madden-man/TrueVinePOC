import React from 'react';
import { Link } from 'react-router-dom';

import './header.css'

export const Header = () =>
  <section className="header">
    <Link to="/">
      TrueVine
    </Link>
  </section>;

export default Header;
