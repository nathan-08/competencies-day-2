import React, { Component } from 'react';  //37E-1
import { Route } from 'react-router'
import {Link, Switch} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import About from './components/about/about'
import Landing from './components/Landing/Landing';
import Red from './components/red/red';
import Green from './components/green/green';
import Blue from './components/blue/blue';

class App extends Component {
  constructor(props){
    super(props)
    this.state={

    }
  }
  
  render() {
    return (
      <div className="App">
        <nav id="nav">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/red">red</Link>
                <Link to="/green">green</Link>
                <Link to="/blue">blue</Link>
        </nav>
        <Switch>
          <Route exact path='/' component={Landing}/>
          <Route path='/About/:number' component={About}/>
          <Route path='/About' component={About}/>
          <Route path='/Red' component={Red}/>
          <Route path='/Green' component={Green}/>
          <Route path='/blue' component={Blue}/>
          
        </Switch>
        
      </div>
    );
  }
}

export default App;
