import React, { Component } from 'react';  //37E-1
import { Route } from 'react-router'
import {Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import About from './components/about/about'
import Landing from './components/Landing/Landing';

class App extends Component {
  render() {
    return (
      <div className="App">
        <nav id="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
        </nav>
        <Route exact path='/' component={Landing}/>
        <Route path='/About' component={About}/>
        
        
      </div>
    );
  }
}

export default App;
