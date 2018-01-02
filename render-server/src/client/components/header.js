import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const authBtn = {
  loggedIn: {
    btnPath: '/api/logout',
    btnText: 'Log Out'
  },
  loggedOut: {
    btnPath: '/api/auth/google',
    btnText: "Log In"
  }
};

const Header = ({ auth }) => {
  const { btnPath, btnText } = auth ? authBtn['loggedIn'] : authBtn['loggedOut'];

  return (
    <div>
      <Link to="/">React SSR</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        <a href={btnPath}>{btnText}</a>
      </div>
    </div>
  );
};

export default connect(({ auth }) => ({ auth }))(Header);