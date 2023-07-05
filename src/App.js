import {BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import People from './task/People';
import Backlog from './pages/Backlog/Backlog';

function App() {
  return ( 
    <div className='App'>
      <BrowserRouter>
        <Header />
          <Routes>
            <Route path='/' element = {<Board /> } />
            <Route path='/board' element={<Board />}></Route>
            <Route path='/backlog' element ={<Backlog />}></Route>
            <Route path='/people' element={<People />}></Route>
          </Routes> 
      </BrowserRouter>
    </div>
  );
}

export default App;