import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAdmins } from '../actions';

class AdminsListPage extends Component {
  componentDidMount() {
    this.props.fetchAdmins();
  }

  renderAdmins() {
    return this.props.admins.map(({ id, name }) => {
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
        <h4>Admins</h4>
        <div className="row">
          {this.renderAdmins()}
        </div>
        </div>
      </div>
    );
  }
}

export default {
  component: connect(({ admins}) => ({ admins }), { fetchAdmins })(AdminsListPage),
  loadData: ({ dispatch }) => dispatch(fetchAdmins())
};