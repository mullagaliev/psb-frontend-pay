import React, { Component } from 'react';
import './Screen.sass';
import { Segment, Button, Divider } from 'semantic-ui-react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

class LoginMain extends Component {
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-login">
        <Segment padded>
          <Link to={`/login`}>
            <Button fluid color={'orange'}>Вход</Button>
          </Link>
          <Divider horizontal>или</Divider>
          <Link to={`/reg`}>
            <Button fluid color={'blue'}>Заявка на эквайринг</Button>
          </Link>
        </Segment>
      </div>}
    />;
  }
}

export default LoginMain;
