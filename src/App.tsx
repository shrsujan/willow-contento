import React from 'react';
import { ThemeProvider } from 'styled-components';

import theme from './theme';

import Router from 'router';

const App: React.FC<{}> = () => {
  return (
    <ThemeProvider theme={theme}>
      <Router />
    </ThemeProvider>
  );
};

export default App;
