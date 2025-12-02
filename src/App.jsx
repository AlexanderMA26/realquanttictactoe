import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import play from './play'
import Graph from './graph';

function App() {
  const [count, setCount] = useState(0)
  const g = new Graph;
    
  useEffect(() => {
    play(); 
  }, [])

  return (
    <>
      <h1>Tic Tac Toe connections</h1>
      <div className="card">
        <button onClick={handleClick(1, 2)}>
          1-2
        </button>
        <button onClick={handleClick(2, 3)}>
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
