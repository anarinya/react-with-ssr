import React from 'react';
import { HomePage, UsersListPage } from '../pages';

export default [
  {
    ...HomePage,
    path: '/',
    exact: true
  }, {
    ...UsersListPage,
    path: '/users'
  }
];