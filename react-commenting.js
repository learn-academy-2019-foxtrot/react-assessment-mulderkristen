// ASSESSMENT 4: REACT ASSESSMENT
// As a developer, you are tasked with commenting this code.
// There are 13 sections that need comments.
// Each section is marked with // Here: for JavaScript code and {/* Here: */} for JSX code.
// Comments will describe the code on the line below the comment marks.

import React, { Component } from 'react'
import './App.css';

class App extends Component{
  render(){
    return(
      <div>
        {/* 1) Here: This code is wrapping a Div around the Board class. This is how the dumb component, App, will display Board.  */}
        <Board />
      </div>
    )
  }
}

class Board extends Component{
  constructor(){
    super()
    // 2) Here: The constructor and super allow for Board to inherit from Component. The state is also being initialized for gameBoard, currentplayer, and winner. 
    this.state = {
      gameBoard: Array(9).fill(null),
      currentPlayer: "🦄",
      winner: null,
    }
  }

  gamePlay = (index) => {
    // 3) Here: gamePlay is a method that's being created withing Board and is using object destructuring to call gameBoard, currentPlayer, and winner
    const { gameBoard, currentPlayer, winner } = this.state
    // 4) Here: An if statement in gamePlay that looks at the value of the current index and decides if it's null, if it is, it'll update that value to the currentPlayer and update the state of gameboard, currentPlayer (with a ternary operator)
    if(gameBoard[index] === null && winner === null){
      gameBoard[index] = currentPlayer
      this.setState({
        gameBoard: gameBoard,
        currentPlayer: currentPlayer === "🦄" ? "🦆" : "🦄",
      })
    }
    if(winner === null){
      // 5) Here:  An if statement in gamePlay that checks if winner is strictly equal to null, if it is, it'll then run the winning method. 
      this.winning()
    }
  }

  winning = () => {
    const { currentPlayer, gameBoard } = this.state
    let winningConditions = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ]
    winningConditions.map(value => {
      const [a, b, c] = value
      if(gameBoard[a] && gameBoard[a] === gameBoard[b] && gameBoard[a] === gameBoard[c]){
        // 6) Here: This method maps through the the winningConditions. First, it use destructuring and then compares the values at each index to see if any of the values are equal to a winning array. If they are, it'll update the state of the winner to the currentPlayer.  
        this.setState({
          winner: currentPlayer
        })
      }
    })
  }

  render(){
    const { gameBoard, currentPlayer, winner } = this.state
    // 7) Here: This uses destructuring and runs the gameBoard through a map to return the Square board. 
    let mappedGameBoard = gameBoard.map((value, index) => {
      return(
        <Square
          value={ value }
          index={ index }
          key={ index }
          {/* 8) Here: This accesses the Square board and displays the value, index, and key at their current state */}
          gamePlay={ this.gamePlay }
        />
      )
    })
    return(
      <div>
        <h1>Tic Tac Toe</h1>

          <div className="statusDiv">
            {/* 9) Here: This is the return statement where all the information will be displayed. In this div, the current player is displayed. */}
            The Current Player is: { currentPlayer }
          </div>

          <div className="statusDiv">
            {/* 10) Here: In this div, the state of the winner is displayed which will change when it's not null (line 67 will update this)*/}
            The Winner is: { winner }
          </div>

          <div id="outcomeBoard">
            {/* 11) Here: In this div, the state of the mappedGameBoard is displayed which is what the current Square looks like from line 78*/}
            { mappedGameBoard }
          </div>

      </div>
    )
  }
}

class Square extends Component{

  handleSquareClick = () => {
    // 12) Here: This is a method in Square that calls the method of gamePlay from Board at its current index. 
    this.props.gamePlay(this.props.index)
  }

  render(){
    return(
      <div id="square" onClick={ this.handleSquareClick }>
        {/* 13) Here: In this div, this handles the click method so that when a square is clicked, the handleSquareClick method will run and display the state of the value*/}
        { this.props.value }
      </div>
    )
  }
}

export default App
