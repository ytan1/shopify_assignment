import React, { Component } from 'react';
import Header from './Header/Header'
import './App.css';
import Search from './Search/Search'
import Favorites from './Favorites/Favorites'
class App extends Component {
  render() {
    return (
      <div className="App">
        <Header/>
        <div className="container ">
        <div className="wrap">
          <Search />
          <Favorites/>
        </div>
        </div>
      </div>
    );
  }
}

export default App;
