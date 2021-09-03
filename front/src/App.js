import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Create from './pages/Create'

class App extends Component {
  render() {
    return (
      <Create/>
    );
  }
}

export default App;
