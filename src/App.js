import React, { Component } from 'react';
import './App.css';
import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component'
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: ''
    }
    this.handleChange =  this.handleChange.bind(this);
  }
 
componentDidMount() {
  fetch('https://jsonplaceholder.typicode.com/users')
  .then(response => response.json())
  .then(users => this.setState({monsters: users}))
}
// Needs to be binded in the constructor 
// with: this.handleChange =  this.handleChange.bind(this);
// handleChange(e) {.. 
// Alternative: ES6 ARROW FUNCTION
// Use arrow functions on any class methods you define and aren't part of React (i.e. render(), componentDidMount()). 
handleChange = (e) => {
  this.setState({searchField: e.target.value}, () => console.log(this.state))
}


// setState is async
render() {
  // destructure
  const { monsters, searchField } = this.state;
  const filteredMonsters = monsters.filter(monster => 
    monster.name.toLowerCase().includes(searchField.toLowerCase()))
  return(
    <div className="App">
      <SearchBox
        handleChange={this.handleChange} 
        placeholder='Search Monster' 
        />
      <CardList monsters={filteredMonsters}/>     
    </div>

  );
}
}
  

export default App;
