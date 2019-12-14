import React from 'react';
import Header from 'components/Header';

export const BasicLayout = ({ children }) =>
  <>
    <Header />
    <section style={{maxWidth: '100rem'}}>
      {children}
    </section>
  </>;