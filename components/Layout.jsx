import React from 'react';
import Header from './Header';

const t = ({ children }) => (
  <>
    <Header />
    {children}
  </>
);

export default t;
