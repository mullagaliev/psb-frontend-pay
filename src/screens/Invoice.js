import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Divider, Loader, Dimmer, Icon, Grid, Input, Label } from 'semantic-ui-react';
import Screen from './Screen';
import { Link } from 'react-router-dom';

const STEPS = {
  BEGIN: 'begin',
  LOADING: 'loading',
  WAIT: 'wait',
  SUCCESS: 'success',
  SUCCESS_FAKE: 'success_fake',
  ERROR: 'error',
};

class Invoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: STEPS.BEGIN,
      total: '',
      payload: {
        sum: '1000',
        to: "5321 3002 4046 2957",
        token: "7081879F6C0200019F62060000000700009F630600000078F0009F640104563442353434333331393530303835303936395E202F5E323030363232313030303030303030303030303030303030303030303030309F650200E09F66020F1E9F6701049F6B135443319500850969D20062210000000000000F9F690F9F6A049F7E019F02065F2A029F1A029000"
      }
    };
  }
  onEditTotal(e){
    this.setState({total: e.target.value});
    e.preventDefault();
  }
  wait(){
    if(Number(this.state.total) > 0 ){
      // this.setState({ step: STEPS.LOADING},() => {
      //   setTimeout(() => {
          this.setState({ step: STEPS.WAIT});
          setTimeout(() => {
            let payload = {
              "to": "4276 6600 1590 4980",
              "sum": this.state.total,
              "token": "7081879F6C0200019F62060000000700009F630600000078F0009F640104563442353434333331393530303835303936395E202F5E323030363232313030303030303030303030303030303030303030303030309F650200E09F66020F1E9F6701049F6B135443319500850969D20062210000000000000F9F690F9F6A049F7E019F02065F2A029F1A029000"
            };
            this.onNfcReading(payload); // TODO remove it
          }, 2000);
      //   }, 2000);
      // });
    }
    else{
      alert('Ошибка ввода суммы');
    }
  }
  onNfcReading(payload){
    this.setState({ step: STEPS.LOADING},() => {
      // params
      let data = new FormData();
      Object.keys(payload).map(function(objectKey, index) {
        let value = payload[objectKey];
        console.log(value);
        data.append([`${objectKey}`], value );
      });
      // fetch("http://192.168.43.88:8080/api/ok",
      fetch("http://192.168.43.88:8080/api/transfer",
      {
        method: "POST",
        body: data,
      })
      .then((res) => {
        console.log(res);
        if (res.status === 200){
          this.setState({ step: STEPS.SUCCESS, payload: payload });
        }
        else{
          this.setState({ step: STEPS.ERROR, payload: payload });
        }
      })
      .catch((message)=>{
        console.log(message);
        this.setState({ step: STEPS.SUCCESS_FAKE, payload: payload });
      });
    });
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="add-invoice align-center-wh">
        {
          this.state.step === STEPS.BEGIN ? (
            <Form onSubmit={this.wait.bind(this)} >
              <Segment stacked>
                <Form.Field>
                  <label>Сумма на оплату</label>
                  <Input labelPosition='right' type='text' placeholder='100.000'>
                    <input type="number" value={this.state.total} onChange={this.onEditTotal.bind(this)} />
                    <Label>руб.</Label>
                  </Input>
                </Form.Field>
                <Button type="submit" fluid color={'orange'}>Создать счёт</Button>
              </Segment>
            </Form>
          ) : null
        }
        {
          this.state.step === STEPS.LOADING ? (
            <div stacked className={'screen-loading'}>
              <Dimmer active>
                <Loader content='Оплачиваю...' size='massive' />
              </Dimmer>
            </div>
          ) : null
        }
        {
          this.state.step === STEPS.WAIT ? (
            <Segment stacked className={'center aligned'}>
              <Icon name='mobile' size='massive' className='pulse'/>
              <Form.Field>
                <label>Поднесите устройство для оплаты </label>
              </Form.Field>
              <Divider horizontal className="orange-color"> { this.state.total } ₽</Divider>
            </Segment>
          ) : null
        }
        {
          this.state.step === STEPS.SUCCESS ? (
            <Segment stacked className={'center aligned'}>
              <Divider horizontal>Оплата успешно завершена</Divider>
              <Form.Field>
                <Link to={`/main`}>
                  <Button fluid color={'orange'}>На главную</Button>
                </Link>
              </Form.Field>
            </Segment>
          ) : null
        }
        {
          this.state.step === STEPS.SUCCESS_FAKE ? (
            <Segment stacked className={'center aligned'}>
              <Divider horizontal>Оплата успешно завершена!!!</Divider>
              <Form.Field>
                <Link to={`/main`}>
                  <Button fluid color={'orange'}>На главную</Button>
                </Link>
              </Form.Field>
            </Segment>
          ) : null
        }
        {
          this.state.step === STEPS.ERROR ? (
            <Segment stacked className={'center aligned'}>
              <Form.Field>
                <label>Ошибка оплаты!</label>
              </Form.Field>
            </Segment>
          ) : null
        }
      </div>}
      footer={true}
    />;
  }
}

export default Invoice;
