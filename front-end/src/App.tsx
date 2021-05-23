import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { Routes } from './routers';
import { defaultTheme } from './styles/themes';

import { PageBody } from './layout/PageBody';
import { Footer } from './layout/Footer';
import GlobalStyle from './styles/global';

function App(): JSX.Element {
  return (
    <ThemeProvider theme={defaultTheme}>
      <PageBody>
        <BrowserRouter>
          <Routes />
          <Footer />
        </BrowserRouter>
        <GlobalStyle />
      </PageBody>
    </ThemeProvider>
  );
}

export { App };
