import { useState } from 'react';
import './App.css';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(prev => !prev); // switch player AFTER two squares
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
    // Stop if game over or square already taken
    if (squares[i]) return;

    // Prevent touching the same square twice in one turn
    if (pendingSquares.includes(i)) return;

    const newPending = [...pendingSquares, i];
    setPendingSquares(newPending);

    // Only apply moves after TWO different squares are touched
    if (newPending.length === 2) {
      const nextSquares = squares.slice();
      const mark = xIsNext ? 'X' : 'O';

      newPending.forEach(index => {
        nextSquares[index] = mark;
      });

      setPendingSquares([]);   // reset for next player
      onPlay(nextSquares);     // this will flip xIsNext
    }
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
