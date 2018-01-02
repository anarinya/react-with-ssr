import React from 'react';
import { renderRoutes } from 'react-router-config';
import { Header, Footer } from './components';
import { fetchCurrentUser } from './actions';

const App = ({ route }) => {
  return (
    <div id="app" style={{ minHeight: "100%", display: "flex", flexDirection: "column" }}>
      <Header />
      <main style={{ flex: "1 0 auto" }}>
        {renderRoutes(route.routes)}
      </main>
      <Footer />
    </div>
  );
};

export default {
  component: App,
  loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
};