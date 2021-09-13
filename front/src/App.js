import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import styled from 'styled-components';
import Store from './store';
import { getAllData } from './store';
import Main from "./pages/Main";
import Write from "./pages/Write";
import Create from "./pages/Create";
import List from "./pages/List";
import Menu from "./pages/Menu"
import Posts from "./pages/Posts";
import BlackHole from "./pages/BlackHole";
import Statistics from "./pages/Statistics";
import WriteComplete from './pages/WriteComplete';
import MoreDetail from './pages/MoreDetail';
import ModifyProfile from './pages/ModifyProfile';
import Setting from './pages/Setting';
import Notice from './pages/Notice';
import FAQ from './pages/FAQ';
import Search from './pages/Search';
import MoreFriends from './pages/MoreFriends';
import ReminderAlarm from  './pages/ReminderAlarm';
import PasswordChange from './pages/PasswordChange';
import LeaveTheGroup from './pages/LeaveTheGroup';
import ChangeTheFontSize from './pages/ChangeTheFontSize';
import TermsAndConditions from './pages/TermsAndConditions';

class App extends Component {
  state = {
    state: "",
  };

  async componentDidMount() {
    const data = await getAllData()
    this.setState({
      state: { ...data }
    });
    console.log(this.state);
  }


  render() {

    return (
      <Store.Provider value = {this.state}>
        <Router>
          <Wrap>
            <Route exact path="/" component={Main} />
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
            <Route path="/setting" component={Setting}/>
            <Route path="/notice" component={Notice}/>
            <Route path="/frequentlyAskedQuestion" component={FAQ}/>
            <Route path="/search" component={Search}/>
            <Route path="/morefriends" component={MoreFriends}/>
            <Route path="/reminderAlarm" component={ReminderAlarm}/>
            <Route path="/passwordchange" component={PasswordChange}/>
            <Route path="/leavethegroup" component={LeaveTheGroup}/>
            <Route path="/changethefontsize" component={ChangeTheFontSize}/>
            <Route path="/termsandconditions" component={TermsAndConditions}/>
          </Wrap>
        </Router>
      </Store.Provider>
    );
  }
}

export default App;

const Wrap = styled.div`
  width: 375px;
  height: 812px;
  margin: 0 auto;
  box-shadow: 0 1px 10px rgb(0 0 0 / 20%);
  overflow: hidden;
`;
