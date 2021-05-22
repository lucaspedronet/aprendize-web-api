import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Routes } from './routers';

function App(): JSX.Element {
  return (
    <BrowserRouter>
      <Routes />
    </BrowserRouter>
  );
}

export { App };
