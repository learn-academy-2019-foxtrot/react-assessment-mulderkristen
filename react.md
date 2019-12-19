# ASSESSMENT 4: REACT ASSESSMENT
## Interview Practice Questions

Answer the following questions. First, without external resources. Challenge yourself to answer from memory. Then, research the question to expand on your answer. Even if you feel you have answered the question completely on your own, there is always something more to learn.  

1. Correctable True/False: Mark the following TRUE or FALSE. If FALSE, correct the statement to be TRUE.

- React is a modern, efficient answer to complex UI applications (true)
- React will only render on the server using Node.js (false) React will only render on the server with create-react-app filename, cd filename, yarn start. 
- React is a full stack framework for modern web applications (true)
- React is a flexible library that plays the role of V in an MVC framework (true) I found some conflicting information about this online, it seems like this topic is up for debate? https://medium.com/javascript-inside/what-if-react-was-really-only-the-v-in-mvc-5854fd6f601c
- You should always update a component's state directly using this.state (false) You should always update a component's state directly using this.setState
- React is made up of encapsulated components that manage their own state (true)
- React components render HTML (true)


2. What are "smart" and "dumb" components? Explain the difference and also add why we bother to make the distinction between them.

  Your answer: The smart component is the component that sets state and holds the methods of the application while the dumb component just holds the smart component. 

  Researched answer: Smart component is often responsible for maintaining several pieces of state for the entire app and needs to pass down additional functions to its child components so that the state can be updated when a user interacts with the site. Dumb components are also called ‘presentational’ components because their only responsibility is to present something to the DOM. 



3. When we use "yarn add ..." in the terminal - what is yarn doing? And what file will always be automatically updated after we add a package with yarn?

  Your answer: Yarn add helps to add a package to your file so you can access that package, an example would be jest

  Researched answer: When you want to use another package, you first need to add it with yarn add [package-name] to install it into your project. This will also update your package.json and your yarn.lock so that other developers working on the project will get the same dependencies as you when they run yarn or yarn install.



4. What is the difference between component state and props? Your answer should include a short explanation of both.

  Your answer: Component state holds the state of your objects within your class and gives your user the ability to update the state with the setState function. Props allow the child component to inherit the state of your properties from their parent component. 

  Researched answer: State is owned locally and updated by the component itself. Props are owned by a parent component and are read-only. Props can only be updated if a callback function is passed to the child to trigger an upstream change.



5. How would you explain state to a friend who doesn't know code?

  Your answer: When you're using a product online and you're interacting with their site, often times you're clicking buttons or adding information that changes the way the product interacts with you. When you do this, you're often updating the state of what you're interacting with. An example could be clicking a button, which could then change what you're seeing. 
