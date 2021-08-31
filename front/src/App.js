import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import './App.css';

import Main from "./pages/Main";
import Write from "./pages/Write";
import Create from "./pages/Create";
import List from "./pages/List";
import BlackHole from "./pages/BlackHole";

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path="/main" component={Main} />
            <Route path="/write" component={Write} />
            <Route path="/create" component={Create} />
            <Route path="/list" component={List} />
            <Route path="/blackHole" component={BlackHole} />
          </div>
        </Router>
    );
  }
}

export default App;