import React from 'react';
import { bool, node } from 'prop-types';
import Header from 'components/Header';

export const BasicLayout = ({ constrainedWidth, children }) =>
  <>
    <Header />
    <section style={{maxWidth: constrainedWidth && '75rem', margin: 'auto'}}>
      {children}
    </section>
  </>;

BasicLayout.propTypes = {
  constrainedWidth: bool,
  children: node,
}

export default BasicLayout;
