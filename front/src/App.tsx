import React from 'react';

import styled from '@emotion/styled';

import './App.css'
import Main from './pages/main'
import MarkDownAdd from './pages/markdownAdd';
import Test from './pages/test';

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <Root>
    <Main />
    <Router>
      <Routes>
        
          <Route path="/" element={<Test/>} />
          <Route
            path="/mdadd"
            element={<MarkDownAdd/>}
          />
      </Routes>
    </Router>
      
      
    </Root>
    );
}

export default App;

const Root = styled.div`
  width: auto;
  height: auto;
  text-align: center;
`