import './App.css';
import React, { Component } from 'react';
import { CardList } from './components/card-list/CardList';
import SearchBox from './components/search-box/SearchBox';


class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: '' 
    };
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));

  }

  onSeachChange = (e) => {
    this.setState({ searchField: e.target.value });
  };
   
  render() {
    // filtering the search input for the monsters with the same letters present in the search
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(monster => 
      monster.name.toLowerCase().includes(searchField.toLowerCase()));

    return (
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox
         placeholder="search monsters" onSeachChange={this.onSeachChange} 
        />
        <CardList monsters={ filteredMonsters }/>
      </div>
    );
  }
}
 
export default App;

  