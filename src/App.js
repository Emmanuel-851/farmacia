import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import Patient from './components/Patient'
import {Route, Switch, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div>
        
      <ul className='lista'>
      <NavLink to='/' className='linksito'><li>Home</li></NavLink>
      <NavLink to='/info' className='linksito'><li>Info</li></NavLink> 
      <NavLink to='/products' className='linksito'><li>Products</li></NavLink>  
      <NavLink to='/contact' className='linksito'><li>Contact</li></NavLink> 
      <NavLink to='/patient' className='linksito'><li>Patient</li></NavLink>
      </ul>
      
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/info' component={Info} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/patient' component={Patient} />
      </Switch>
     

      </div>
    );
  }
}

export default App;
