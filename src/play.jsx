import Graph from './graph';
import { useState, useEffect } from 'react'

export default class gameBoard{

    constructor(){
        this.g = new Graph;
    }

    handleClick(a, b){
        this.g.addEdge(a, b)
        return this.g.printGraph();
    }
}


function Board({xIsNext, squares, onPlay}){

    
}



