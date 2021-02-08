import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

export const mount = (el) => {
  console.log("== MOUNT ==");
  ReactDOM.render(
    <App />,
    el
  );
}

if (process.env.NODE_ENV === 'development') {
  const devRoot = document.querySelector('#_feed-dev-root');
  if (devRoot) {
    mount(devRoot);
  }
}