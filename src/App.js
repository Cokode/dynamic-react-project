
import './App.css';
import Board from './pages/Board/Board';
import Header from './components/Header/Header';
import People from './task/People';

function App() {
  return ( 
    <div className='App'>
      <Header />
      <Board />
      <People />
    </div>
  );
}

export default App;