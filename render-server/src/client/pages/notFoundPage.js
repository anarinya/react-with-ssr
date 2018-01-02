import React from 'react';

const NotFoundPage = ({ staticContext = {} }) => {
  staticContext.notFound = true;
  
  return (
    <div className="center-align" style={{ marginTop: '200' }}>
      <h2 className="grey-text text-darken-4">
        Oops, page not found!
      </h2>
    </div>
  );
};

export default {
  component: NotFoundPage
}