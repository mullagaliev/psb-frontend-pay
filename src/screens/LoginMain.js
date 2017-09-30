import React, { Component } from 'react';
import './Screen.sass';
import { Segment, Button, Divider } from 'semantic-ui-react';
import Screen from './Screen';

class LoginMain extends Component {
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-login">
        <Segment padded>
          <Button primary fluid>Вход</Button>
          <Divider horizontal>или</Divider>
          <Button secondary fluid>Создать аккаунт</Button>
        </Segment>
      </div>}
      footer={<div></div>}
    />;
  }
}

export default LoginMain;
