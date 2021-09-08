import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';

import Main from "./pages/Main";
import Write from "./pages/Write";
import Create from "./pages/Create";
import List from "./pages/List";
import Menu from "./pages/Menu"
import Posts from "./pages/Posts";
import BlackHole from "./pages/BlackHole";
import Statistics from "./pages/Statistics";
import WriteComplete from './pages/WriteComplete';
import MoreDetail from './pages/MoreDetail'
import ModifyProfile from './pages/ModifyProfile'

class App extends Component {
  render() {
    return (
      <Router>
          <Wrap>
            <Route exact path="/main" component={Main} />
            <Route path="/write" component={Write} />
            <Route path="/create" component={Create} />
            <Route path="/list" component={List} />
            <Route path="/menu" component={Menu} />
            <Route path="/post" component={Posts} />
            <Route path="/blackHole" component={BlackHole} />
            <Route path="/statistics" component={Statistics} />
            <Route path="/writecomplete" component={WriteComplete} />
            <Route path="/moreDetail" component={MoreDetail} />
            <Route path="/modifyProfile" component={ModifyProfile}/>
          </Wrap>
      </Router>
    );
  }
}

export default App;

const Wrap = styled.div`
  width: 375px;
  height: 812px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
`;
