import { useState, useRef } from 'react';
import './App.css';
import Graph from './graph';

function App() {
  //Board setiup
  const [xIsNext, setXIsNext] = useState(true);
  const [squares, setSquares] = useState(Array(9).fill([]));

  const graphRef = useRef(new Graph());

  function handlePlay(nextSquares) {
    setSquares(nextSquares);
    setXIsNext(prev => !prev);
  }

  return (
    <>
      <h1>Tic Tac Toe</h1>
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
    console.log('Click on square:', i);
    console.log('Current squares:', squares);
    console.log('Pending squares:', pendingSquares);
    
    //don't allow double selects
    if (pendingSquares.includes(i)) {
      console.log('Square already pending');
      return;
    }
    //adds click to list of clicks
    const newPending = [...pendingSquares, i];
    setPendingSquares(newPending);
    console.log('New pending:', newPending);

    // Wait two clicks
    if (newPending.length === 2) {
      const nextSquares = squares.slice();
      const mark = xIsNext ? 'X' : 'O';

      newPending.forEach(index => {
        nextSquares[index] = mark;
      });

      // Add edge
      const [v, w] = newPending;
      graph.addEdge(v, w);

      graph.printGraph();

      // Reset squares
      setPendingSquares([]);
      onPlay(nextSquares);
    }
  }
  //show squares
  const displaySquares = squares.map((square, index) => {
    if (square) return square;
    if (pendingSquares.includes(index)) {
      return xIsNext ? 'X' : 'O';
    }
    return null;
  });

  console.log('Display squares:', displaySquares);

  return (
    <>
      <div className="board-row">
        <Square value={displaySquares[0]} onSquareClick={() => handleClick(0)} />
        <Square value={displaySquares[1]} onSquareClick={() => handleClick(1)} />
        <Square value={displaySquares[2]} onSquareClick={() => handleClick(2)} />
      </div>
      <div className="board-row">
        <Square value={displaySquares[3]} onSquareClick={() => handleClick(3)} />
        <Square value={displaySquares[4]} onSquareClick={() => handleClick(4)} />
        <Square value={displaySquares[5]} onSquareClick={() => handleClick(5)} />
      </div>
      <div className="board-row">
        <Square value={displaySquares[6]} onSquareClick={() => handleClick(6)} />
        <Square value={displaySquares[7]} onSquareClick={() => handleClick(7)} />
        <Square value={displaySquares[8]} onSquareClick={() => handleClick(8)} />
      </div>
    </>
  );
}

function Square({ value, onSquareClick }) {
  console.log('Rendering square with value:', value);
  return (
    //<button className="square" onClick={onSquareClick}>
      //{value}
    //</button>
    <button className="square" onClick={onSquareClick} style={{color: 'black', border: '1px solid black', minWidth: '50px', minHeight: '50px'}}>
  {value || '.'} 
</button>
  );
}

export default App;