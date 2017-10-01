import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Divider, Loader, Dimmer, Icon, Grid, Input, Label } from 'semantic-ui-react';
import Screen from './Screen';
import { Link } from 'react-router-dom';


class AddTerminal extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="terminals">
        {
          <div>
            <br/>
            <Divider horizontal inverted>Создать терминал</Divider>
            <Segment stacked>
              <Form>
                <Form.Field>
                  <label>
                    <Icon name='mobile' color='orange'/>
                    Логин терминала
                  </label>
                  <input placeholder='Логин терминала'
                    // value={this.state.password}
                    // onChange={this.onChangePassword.bind(this)}
                  />
                </Form.Field>
                <Form.Field>
                  <label >
                    <Icon name='asterisk' color='orange'/>
                    Пароль для терминала
                  </label>
                  <input placeholder='*****'
                    // value={this.state.password}
                    // onChange={this.onChangePassword.bind(this)}
                  />
                </Form.Field>
                <Form.Field>
                  <Button type="button"
                          color={'orange'}
                          fluid
                    // onClick={()=>this.props.onNext(1)}
                  >
                    Создать терминал
                  </Button>
                </Form.Field>
              </Form>
            </Segment>
          </div>
        }
      </div>}
    />;
  }
}

class TerminalsList extends Component {
  constructor(props){
    super(props);
    this.state = {
    };
  }
  render() {
    let terminals = [
      {
        id: 'Terminal1',
        status: 'active',
        address: 'ул. Ново-Садовая, 3, Самара'
      },
      // {
      //   id: 'Terminal2',
      //   status: 'deactivated',
      //   address: 'ул. Ново-Садовая, 3, Самара'
      // },
      // {
      //   id: 'Terminal3',
      //   status: 'deactivated',
      //   address: 'ул. Ново-Садовая, 3, Самара'
      // }
    ];
    let terminalsList = (() => {
      return <div className="terminal-list">
        {terminals.map((val)=>{
          return <Segment stacked key={val.id}>
            <Form>
              <Form.Field>
                <Label fluid className={'fluid'}>
                  <Icon name='mobile' color='orange'/>
                  Терминал:
                  <Label.Detail>{val.id}</Label.Detail>
                </Label>
              </Form.Field>
              <Form.Field>
                <Label className={'fluid'}>
                  <Icon name='marker' color='blue'/>
                  Адрес:
                  <Label.Detail>{val.address}</Label.Detail>
                </Label>
              </Form.Field>
              <Form.Field>
                <Label className={'fluid'}>
                  { val.status === 'active' ?
                    <Icon name='circle' className={'pulse'} color={'green'}/> :
                    <Icon name='circle' className={'pulse'} color={'red'}/>
                  }
                  Статус:
                  <Label.Detail>{ val.status === 'active' ? 'Активен' : 'Неактивен'}</Label.Detail>
                </Label>
              </Form.Field>
            </Form>
          </Segment>;
        })}
      </div>
    })();
    return <Screen
      active={ this.props.active }
      content={<div className="terminals">
        {
          <div>
            <br/>
            <Divider horizontal inverted>Список терминалов</Divider>
            {terminalsList}
            <br/>
            <div>
              <Link to={`/terminals/create`}>
                <Button type="button"
                        color={'orange'}
                        fluid
                  // onClick={()=>this.props.onNext(1)}
                >
                  <Icon name="plus square outline"/>Добавить терминал
                </Button>
              </Link>
            </div>
          </div>
        }
      </div>}
    />;
  }
}

export { TerminalsList, AddTerminal};
