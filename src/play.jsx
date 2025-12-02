import Graph from './graph';
import { useState, useEffect } from 'react'

function play(xIsNext, currentMove){
    const g = new Graph;

    function gamePlay(){
        const [currentMove, setCurrentMove] = useState(0);
        const [squares, setSquares] = useState(null)
        const xIsNext = currentMove % 2 === 0;

        function handleClick(){
            setCurrentMove(currentMove + 1);
            //Later we will use this function to differentiate between X and O entangled pairs
            if (xIsNext){
               let answer = prompt("X, What squares do you want to connect?");
            }else{
               let answer = prompt("O, What squares do you want to connect?");
            }
            
        }

        const numArray = squares.split("");
        g.addEdge(numArray[0], numArray[1])



    }

    return g.printGraph();
}

export default play;
