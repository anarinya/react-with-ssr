import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchUsers } from '../actions';

class UsersPage extends Component {
  componentDidMount() {
    this.props.fetchUsers();
  }

  renderUsers() {
    return this.props.users.map(({ id, name }) => {
      return (
        <div className="col s12 m6 l6 xl4" key={id}>
          <div className="card">
            <div className="card-content center-align">
              <i className="material-icons large">person</i>
              <span className="card-title">{name}</span>
            </div>
          </div>
        </div>
      );
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
        <h4>Users</h4>
        <div className="row">
          {this.renderUsers()}
        </div>
        </div>
      </div>
    );
  }
}

export default {
  component: connect(({ users }) => ({ users}), { fetchUsers })(UsersPage),
  loadData: ({ dispatch }) => dispatch(fetchUsers())
};