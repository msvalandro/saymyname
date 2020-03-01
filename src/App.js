import React from 'react';

import GlobalStyle from './styles/global';
import Home from './pages/Home';
import Header from './components/Header';

export default function App() {
  return (
    <>
      <Header></Header>
      <Home></Home>
      <GlobalStyle></GlobalStyle>
    </>
  );
}
