import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const Header = ({ auth }) => {
  console.log('my auth status is: ' + auth);
  return (
    <div>
      <Link to="/">React SSR</Link>
    </div>
  );
};

export default connect(({ auth }) => ({ auth }))(Header);