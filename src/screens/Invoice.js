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
  ERROR: 'error',
};

class Invoice extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: STEPS.BEGIN,
      total: '',
      clientInfo: {
        cardNumber: '0000 0000 0000 0000',
        dateEnd: '30.09.2017',
        cardType: 'Master Card',
        pay: false
      }
    };
  }
  onEditTotal(e){
    this.setState({total: e.target.value});
    e.preventDefault();
  }
  wait(){
    if(Number(this.state.total) > 0 ){
      this.setState({ step: STEPS.LOADING},() => {
        setTimeout(() => {
          this.setState({ step: STEPS.WAIT});
          setTimeout(() => {
             this.onNfcReading(); // TODO remove it
          }, 2000);
        }, 2000);
      });
    }
    else{
      alert('Ошибка ввода суммы');
    }
  }
  onNfcReading(cardNumber = '0000 0000 0000 0000', dateEnd = '30.09.2017', cardType='Master card'){
    $.post({
      type: "POST",
      url: '/api/transfer',
      data: {
        "from": "5321 3002 8165 7160",
        "to": "5321 3002 4046 2957",
        "cvv": "182",
        "cardDate": "07/22",
        "sum": "10"
      },
      dataType: "json",
      statusCode:{
        200: function(){
          console.log(1)
        }
      }
    });
    let clientInfo = {
      cardNumber: cardNumber,
      dateEnd: dateEnd,
      cardType: cardType,
      pay: true
    };
    // TODO здесь должно быть ображение к api Стаса
    if( true ){ // TODO придумать условие
      this.setState({ step: STEPS.LOADING},() => {
        setTimeout(() => {
          this.setState({ step: STEPS.SUCCESS, clientInfo: clientInfo });
        }, 2000);
      });
    }
    else{
      this.setState({ step: STEPS.ERROR });
    }
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
                <Loader content='Загрузка' size='massive' />
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
              <Divider horizontal>Оплата успешно завершена!</Divider>
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
