import TicTacToe from "./components/TicTacToe";
import TicTacToeTest from "./components/TicTacToeTest";
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="game-board">
        <TicTacToe />
        <div>Test</div>
        <TicTacToeTest />
      </div>
    </div>
  );
}

export default App;
