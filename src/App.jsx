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
        <button onClick={() => setResult(board.handleClick(1, 2))}>
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
export default App
