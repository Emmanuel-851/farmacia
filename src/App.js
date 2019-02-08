import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Info from './components/info'
import Home from './components/home'
import Products from './components/products'
import Contact from './components/Contact'

class App extends Component {
  render() {
    return (
      <div>
        <nav className='barra'>
      <ul className='lista'>
        <li>Home</li>
        <li>Products</li>
        <li>info</li>
      </ul>
      </nav>
      <Home />
      <Info />
      <Products />
      <Contact />

      </div>
    );
  }
}

export default App;
