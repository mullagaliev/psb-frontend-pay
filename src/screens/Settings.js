import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Divider } from 'semantic-ui-react';
import Screen from './Screen';

class Settings extends Component {
  constructor(props){
    super(props);
  }
  onExit(e){
    e.preventDefault();
    console.log(e);
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-settings">
        <br/>
        <Divider horizontal inverted>Настройки</Divider>
        <br/>
        <Button type="button"
                fluid
                color={'blue'}
                onClick={()=>alert('Пока мы в разработке')}
        >Редактровать профиль</Button>
        <br/>
        <Button type="button"
                fluid
                color={'blue'}
                onClick={()=>alert('Пока мы в разработке')}
        >Смена пароля</Button>
        <br/>
        <Button type="button"
                fluid
                color={'red'}
                onClick={this.onExit.bind(this)}
        >Выход</Button>
      </div>}
    />;
  }
}

export { Settings };
