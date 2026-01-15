import { useState } from 'react';
import './App.css';
import Graph from './graph';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(prev => !prev); 
  }

  return (
    <>
      <h1>Tic Tac Toe Connections</h1>
      <Board
        xIsNext={xIsNext}
        squares={squares}
        onPlay={handlePlay}
      />
    </>
  );
}

function Board({ xIsNext, squares, onPlay }) {
  const [pendingSquares, setPendingSquares] = useState([]);

  function handleClick(i) {

    if (squares[i]) return;

    if (pendingSquares.includes(i)) return;

    const newPending = [...pendingSquares, i];
    setPendingSquares(newPending);
    
    if (newPending.length === 2) {
      const nextSquares = squares.slice();
      const mark = xIsNext ? 'X' : 'O';
    

      newPending.forEach(index => {
        nextSquares[index] = mark;
      });

      setPendingSquares([]);   
      onPlay(nextSquares);    
    }
    let numClicks = 0;
  


    const nextSquares = squares.slice();
     


    //Finds which shape is next
    if (xIsNext){
      nextSquares[i] = 'X';
      numClicks += 1;
    }else{
      nextSquares[i] = 'O';
      numClicks += 1;
    }
    onPlay(nextSquares);
  }

  //const winner = calculateWinner(squares);
  let status;

  //if (winner) {
    //status = "Winner: " + winner;
  //} else {
    //status = `Next player: ${xIsNext ? "X" : "O"} (select 2 squares)`;
  //}

  return (
    <>
      <div className="status">{status}</div>

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
