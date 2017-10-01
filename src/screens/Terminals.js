import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Divider, Loader, Dimmer, Icon, Grid, Input, Label } from 'semantic-ui-react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

const STEPS = {
  BEGIN: 'begin',
  LOADING: 'loading',
  SUCCESS: 'success',
  ERROR: 'error',
};

class AddTerminal extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: '',
      password: '',
      step: STEPS.LOADING
    };
  }
  onSubmit(e){
    e.preventDefault();
    console.log(e);
    this.setState({ step: STEPS.LOADING}, () => {
      // params
      let data = new FormData();
      fetch("http://192.168.43.88:8080/api/terminal/add", {method: "POST", body: data})
        .then((res) => {
          console.log(res);
          if (res.status === 200) {
            this.setState({step: STEPS.SUCCESS});
          }
          else {
            this.setState({step: STEPS.ERROR});
          }
        })
        .catch((message) => {
          console.log(message);
          this.setState({step: STEPS.SUCCESS_FAKE});
        });
    });
  }
  UpdateField(e){
    let name = e.target.name;
    let val = e.target.value;
    console.log(name, val);
    console.log(this.state);
    try{
      this.setState({[`${name}`]: val});
    }
    catch(e){
      console.log(e);
    }
  }
  render() {
    return <Screen
      active={ this.state.step === STEPS.SUCCESS  }
      content={<div className="terminals">
          <div>
            <br/>
            {
              this.state.step  !== STEPS.SUCCESS ? (<div>
                {/*<Divider horizontal inverted>Создать терминал</Divider>*/}
                <Segment stacked>
                  <Form onSubmit={this.onSubmit.bind(this)}>
                    <Form.Field>
                      <label>
                        <Icon name='mobile' color='orange'/>
                        Логин для терминала
                      </label>
                      <input placeholder='Логин терминала'
                             value={this.state.login}
                             name="login"
                             onChange={this.UpdateField.bind(this)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <label >
                        <Icon name='asterisk' color='orange'/>
                        Пароль для терминала
                      </label>
                      <input placeholder='*****'
                             value={this.state.password}
                             name="password"
                             type="password"
                             onChange={this.UpdateField.bind(this)}
                      />
                    </Form.Field>
                    <Form.Field>
                      <Button type="submit"
                              color={'orange'}
                              fluid
                      >
                        Создать учетную запись
                      </Button>
                    </Form.Field>
                  </Form>
                </Segment>
              </div>) : (<div>
                  <Segment stacked>
                    <Form className='formmmm'>
                      <Form.Field>
                        <label >Учетная запись созадана</label>
                        <Link to="/terminals/manager">
                          <Button type="button"
                                  color={'orange'}
                                  fluid
                          >
                            Перейти к списку терминалов
                          </Button>
                        </Link>
                      </Form.Field>
                    </Form>
                  </Segment>
                </div>
              )
            }
          </div>
      </div>}
      footer={true}
    />;
  }
}

class TerminalsList extends Component {
  constructor(props){
    super(props);
    this.state = {
      terminals: []
    };
    this.loadTerminals();
  }
  loadTerminals(){
    fetch("http://192.168.43.88:8080/api/terminal", {method: "GET"})
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          this.setState({terminals: [
            {
              "id": "1",
              "status": "active",
              "address": "г. Самара, ул. Ново-Садовая, д.3"
            }
          ]});
        }
        else {
          // this.setState({step: STEPS.ERROR});
          alert('Ошибка загурзки терминалов');
        }
      })
      .catch((message) => {
        console.log(message);
        alert(message);
        // this.setState({step: STEPS.SUCCESS_FAKE});
      });
  }
  render(){
    let terminalsList = (() => {
      return <div className="terminal-list">
        {this.state.terminals.map((val)=>{
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
      footer={true}
    />;
  }
}

export { TerminalsList, AddTerminal};
