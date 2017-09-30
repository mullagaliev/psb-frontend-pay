import React, { Component } from 'react';
import 'semantic-ui-css/semantic.min.css';
import './App.sass';
import LoginMain from './screens/LoginMain';
import SignIn from './screens/SignIn';
import SignUp from './screens/SignUp';
import MainMenu from './screens/MainMenu';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<LoginMain/>*/}
        {/*<SignIn />*/}
        {/*<SignUp />*/}
        <MainMenu/>
      </div>
    );
  }
}

export default App;
