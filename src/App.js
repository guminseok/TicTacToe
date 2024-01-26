import TicTacToe from "./components/TicTacToe";
import TicTacToeTest from "./components/TicTacToeTest";
import TicTacToeDev from "./components/TicTacToeDev";
import TpyeReducer from "./components/TpyeReducer.tsx";
import TpyeContext from "./components/TpyeContext.tsx";
import TpyeMemo from "./components/TpyeMemo.tsx";
import './App.css';

function App() {
  return (
    <div className="game">
      <div className="margin-b"><TpyeMemo /></div>
      <div className="margin-b"><TpyeContext /></div>
      <div className="game-board">
        <TicTacToe />
        <div className="margin-b"></div>
        Test
        <TicTacToeTest />
      </div>
      <div>
        <div className="margin-b"></div>
        <div>勉強するサイトで学習</div>
        <TicTacToeDev />
      </div>
      <div className="margin-b"></div>
      <div><TpyeReducer /></div>
    </div>
  );
}

export default App;
