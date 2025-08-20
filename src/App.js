import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import DetailsPage from './pages/DetailsPage';
import GlobalStyles from './styles/GlobalStyles';
import styled from 'styled-components';

const MainCointent = styled.main`
  flex-grow: 1;
  padding: 20px
  `;


function App() {
  return (
    <Router>
      <GlobalStyles/>
      <Header/>
      <MainCointent>
        <Routes>
          <Route path='/' element={<HomePage/>}/>
          <Route path='/:type/:encodedUrl' element={<DetailsPage/>}/>
        </Routes>
      </MainCointent>
    </Router>
  );
}

export default App;
