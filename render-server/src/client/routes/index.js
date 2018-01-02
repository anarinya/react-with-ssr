import React from 'react';
import { HomePage, UsersListPage, NotFoundPage } from '../pages';
import App from '../app';

export default [
  {
    ...App,
    routes: [
      {
        ...HomePage,
        path: '/',
        exact: true
      }, {
        ...UsersListPage,
        path: '/users'
      }, {
        ...NotFoundPage
      }
    ]
  }
];