import logo from './logo.svg';
import './App.css';
import TicTacToe from './components/tic-tac-toe';

function App() {
  return (
    <div className="App">
        <TicTacToe num={5} mark = {3}/>
    </div>
  );
}

export default App;
