import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import Home from './pages/Home';

import GlobalStyle from './styles/global';

function App() {
  return (
    <BrowserRouter>
      <Home />
      <GlobalStyle />
    </BrowserRouter>
  );
}

export default App;
