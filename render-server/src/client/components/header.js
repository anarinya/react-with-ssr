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
    <header>
      <nav className="blue z-depth-0">
        <div className="nav-wrapper">
          <Link to="/" className="brand-logo left" style={{ marginLeft: 20, fontSize: "1.2em" }}>React SSR</Link>
          <ul className="right">
            <li><Link to="/users">Users</Link></li>
            <li><Link to="/admins">Admins</Link></li>
            <li><a className="btn grey darken-4" href={btnPath}>{btnText}</a></li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default connect(({ auth }) => ({ auth }))(Header);