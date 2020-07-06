import React, { Component } from 'react';

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

import './App.css';

class App extends Component {
  constructor() {
    super();

    this.state = {
      heroes: [],
      searchFeild: ''
    }
  }

  componentDidMount() {
    fetch('https://randomuser.me/api/?results=10')
      .then(response =>  response.json())
      .then(users => this.setState({ heroes : users.results }));
  }

  handleChange = (e) => {
    this.setState({ searchFeild: e.target.value}, () => console.log(this.state))
  }

  render() {
    const { heroes, searchFeild  } = this.state;
    const filteredHeroes = heroes.filter(hero => 
      hero.name.first.toLowerCase().includes(searchFeild.toLowerCase()) || hero.name.last.toLowerCase().includes(searchFeild.toLowerCase())
    );

    return (
      <div className="App">
      <h1>Heroes Rolodex</h1>
        <SearchBox 
          placeholder='Search Heroes'
          handleChange = {this.handleChange}
        />
        <CardList heroes = { filteredHeroes } />
      </div>
    );
  }
}

export default App;
