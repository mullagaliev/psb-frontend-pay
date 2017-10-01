import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.sass';
import LoginMain from './screens/LoginMain';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainMenu from './screens/MainMenu';
import Invoice from './screens/Invoice';
import { AddTerminal, TerminalsList } from './screens/Terminals';
import { Settings } from './screens/Settings';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { AnimatedRoute } from 'react-router-transition';

class App extends Component {
  render() {
    return (
      <div className="App">
          <Router basename="/">
            <div>
              <AnimatedRoute
                path="/login"
                component={SignIn}
                atEnter={{ offset: 320 }}
                atLeave={{ offset: -320 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              />
              {/*<AnimatedRoute*/}
                {/*path="/"*/}
                {/*component={LoginMain}*/}
                {/*atEnter={{ offset: 320 }}*/}
                {/*atLeave={{ offset: -320 }}*/}
                {/*atActive={{ offset: 0 }}*/}
                {/*mapStyles={(styles) => ({*/}
                  {/*transform: `translateX(${styles.offset}%)`,*/}
                {/*})}*/}
              {/*/>*/}
              {/*<Route exact path='/' component={LoginMain} />*/}
              <Route path='/welcome' component={LoginMain} />
              {/*<Route path='/login' component={SignIn} />*/}
              <AnimatedRoute
                path="/reg"
                component={SignUp}
                atEnter={{ offset: -320 }}
                atLeave={{ offset: 320 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              />
              {/*<Route path='/reg' component={SignUp} />*/}
              <AnimatedRoute
                path="/terminals/create"
                component={AddTerminal}
                atEnter={{ offset: -320 }}
                atLeave={{ offset: 320 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              />
              {/*<Route path='/terminals/create' component={AddTerminal} />*/}
              <Route path='/terminals/manager' component={TerminalsList} />
              <Route path='/invoice/create' component={Invoice} />
              {/*<Route path='/main' component={MainMenu} />*/}
              <AnimatedRoute
                path="/main"
                component={MainMenu}
                atEnter={{ offset: 320 }}
                atLeave={{ offset: -320 }}
                atActive={{ offset: 0 }}
                mapStyles={(styles) => ({
                  transform: `translateX(${styles.offset}%)`,
                })}
              />
              <Route path='/settings' component={Settings} />
            </div>
          </Router>
      </div>
    );
  }
}

export default App;
