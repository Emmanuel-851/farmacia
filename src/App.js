import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/Info'
import Home from './components/Home'
import Products from './components/Products'
import Contact from './components/Contact'
import Patient from './components/Patient'
import Nabvar from './components/Nabvar'
import Footer from './components/Footer'
import {Route, Switch, NavLink} from 'react-router-dom'

class App extends Component {
  render() {
    return (
      <div className='fffj'>
       
       <Nabvar /> 

      <Switch>
        <Route exact path='/' component={Home} />                                                                             
        <Route exact path='/info' component={Info} />
        <Route exact path='/products' component={Products} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/patient' component={Patient} />
      </Switch>

      <Footer />     

      </div>
    );
  }
}

export default App;
