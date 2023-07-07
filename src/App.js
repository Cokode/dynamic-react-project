import {BrowserRouter, Routes, Route } from 'react-router-dom';
//import './App.css';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import People from './task/People';
import Backlog from './pages/Backlog/Backlog';
import { styled, createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle` 
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`;

const AppWrapper = styled.div`
  text-align: center;
`;

function App() {
  return ( 
    <>
    <GlobalStyle />
    <AppWrapper className='App'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element = {<Board /> } />
            <Route path='/board' element={<Board />}></Route>
            <Route path='/backlog' element ={<Backlog />}></Route>
            <Route path='/people' element={<People />}></Route>
          </Routes> 
      </BrowserRouter>
    </AppWrapper>
    </>
  );
}

export default App;