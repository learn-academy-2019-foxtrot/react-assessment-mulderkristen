// ASSESSMENT 4: REACT ASSESSMENT
// Coding practical questions

// NOTE: In this assessment you will NOT be running a react file structure

// 1. Write a React component that prints "I am a component!" Be sure to include all necessary imports, exports, etc.
// import Component from react
// Write a class that returns "I am a component!"
// export the class

import React, {Component} from 'react';
import './App.css';

class App extends Component {
  render(){
      return (
          <div>
          I am a component!
          </div>
      )
  }
}

export default App;



// 2. Refactor this vanilla javascript loop to a map function. The output should remain the same.
// Map through an array called names
// At each value, console log the length at that value

var names = ["Ford Prefect", "Arthur Dent", "Trillian", "Zaphod", "Vogon", "Marvin, the Paranoid Android"]

// for(let i=0; i<names.length; i++){
//   console.log(`${names[i]} is ${names[i].length} characters long.`)
// }

names.map(value => {
  console.log(`${value} is ${value.length} characters long.`)
})

// 3. Destructure the following variables out of state.

this.state = {
  name: "Dracula",
  home: "Transylvania",
  dislikes: ["mirrors", "garlic", "wooden stakes"]
}

const {name, home, dislikes} = this.state
console.log(name, home, dislikes)

// 4. Write a React method that would add one and update the state of the count each time the method is called.

this.state = {
  count: 0
}

counterMethod = () => {
  let newCount = this.state.count + 1
  this.setState({count: newCount})
}



// 5. There are four mistakes in this code that would cause it to break our application. Find the mistakes and fix them:

import React, {Component} from 'react';

class Recipes extends Component {
    constructor(props){
    super(props)
    this.state = {
      recipes:['Meatballs','Mac & Cheese']
    }
  }

  render() {
      const {recipes} = this.state
      let recipe = recipes.map(item => {
          return(
              <li key={item}>{item}</li>
          )
      })
    return(
      <ul>{recipe}</ul>
    )
  }
}

export default Recipes;

// 1. Updated recipes syntax in line 74
// 2. Moved the map into render
// 3. Added destructuring on line 79
// 4. Updated line 82 so that the item was displayed
