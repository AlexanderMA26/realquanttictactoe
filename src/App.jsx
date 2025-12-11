import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Graph from './graph';
import gameBoard from './play'

function App() {
  const [board] = useState(() => new gameBoard()); 
  const [result, setResult] = useState("");
    

  return (
    <>
      <h1>Tic Tac Toe connections</h1>
      <div className="card">
        <button onClick={() => setResult(board.handleClick(1, 2))}>
          1-2
        </button>
        <button onClick={() => setResult(board.handleClick(2, 3))}>
          2-3
        </button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
    </>
  )
}

function handleClick(num1, num2){
    
}

function Board({xIsNext, squares, onPlay}) {
  //Either updates the board or declares a winner
  function handleClick(i) {
    if (calculateWinner(squares) || squares[i]){
      return;
    }
    //Finds which shape is next
    if (xIsNext){
      nextSquares[i] = 'X';
    }else{
      nextSquares[i] = 'O';
    }
    onPlay(nextSquares);
  }
  const winner = calculateWinner(squares);
  let status;
  if (winner) {
    status = "Winner: " + winner;
  } else {
    status = "Next player: " + (xIsNext ? "X" : "O");
  }
  return (

    //Sets up game board
  <>
  <div className='status'>{status}</div>
 <div className="board-row">
        <Square value={squares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={squares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={squares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
      <Square value={squares[3]} onSquareClick={() => handleClick(3)} />
      <Square value={squares[4]} onSquareClick={() => handleClick(4)} />
      <Square value={squares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
      <Square value={squares[6]} onSquareClick={() => handleClick(6)} />
      <Square value={squares[7]} onSquareClick={() => handleClick(7)} />
      <Square value={squares[8]} onSquareClick={() => handleClick(8)} />
      </div>
  </>
  );
}

function Square({ value, onSquareClick }) {
  return (
    <button className="square" onClick={onSquareClick}>{value}</button>
  );
}
export default App
