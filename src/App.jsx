import { useState, useRef } from 'react';
import './App.css';
import Graph from './graph';

function App() {
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill(null));

  // Persistent graph instance (does not reset on re-render)
  const graphRef = useRef(new Graph());

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
        graph={graphRef.current}
      />
    </>
  );
}

function Board({ xIsNext, squares, onPlay, graph }) {
  const [pendingSquares, setPendingSquares] = useState([]);

  function handleClick(i) {
    // Do not allow selecting an already collapsed square
    if (squares[i]) return;

    // Prevent selecting the same square twice in one turn
    if (pendingSquares.includes(i)) return;

    const newPending = [...pendingSquares, i];
    setPendingSquares(newPending);

    // When two squares are selected, complete the quantum move
    if (newPending.length === 2) {
      const nextSquares = squares.slice();
      const mark = xIsNext ? 'X' : 'O';

      // Place the mark on both squares
      newPending.forEach(index => {
        nextSquares[index] = mark;
      });

      // Add edge to the graph
      const [v, w] = newPending;
      graph.addEdge(v, w);

      // Debug output
      console.log(`Edge added between ${v} and ${w}`);
      graph.printGraph();

      // Reset for next turn
      setPendingSquares([]);
      onPlay(nextSquares);
    }
  }

  return (
    <>
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
    <button className="square" onClick={onSquareClick}>
      {value}
    </button>
  );
}

export default App;