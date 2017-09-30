import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Dropdown, Divider } from 'semantic-ui-react';
import Screen from './Screen';

// TODO добавить переход по шагам
class Step1 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <Form onSubmit={()=>this.props.onNext(2)}>
      <Segment stacked>
        <Divider horizontal className="orange-color">Организация</Divider>
        <Form.Field>
          <label>ИНН</label>
          <input placeholder='0000000000'
                 name={'itn'}
                 value={this.props.itn}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Divider horizontal className="orange-color">Контакты</Divider>
        <Form.Field>
          <label>Имя</label>
          <input placeholder='Иван'
                 name={'name'}
                 value={this.props.name}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Form.Field>
          <label>Фамилия</label>
          <input placeholder='Иванов'
                 name={'surname'}
                 value={this.props.surname}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input placeholder='Email'
                 name={'contactEmail'}
                 value={this.props.contactEmail}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Form.Field>
          <label>Телефон</label>
          <input placeholder='+7(999)999-99-99'
                 name={'contactPhone'}
                 value={this.props.contactPhone}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Button type="submit" fluid color={'blue'}>Далее</Button>
      </Segment>
    </Form>;
  }
}

class Step2 extends Component{
  constructor(props){
    super(props);
  }
  render() {
    return <Form onSubmit={()=>this.props.onNext(3)}>
        <Segment stacked>
        <Divider horizontal className="orange-color">Аккаунт</Divider>
        <Form.Field>
          <label>Логин</label>
          <input placeholder='User'
            name={'login'}
            value={this.props.login}
            onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Form.Field>
          <label>Пароль</label>
          <input placeholder='*******'
                 type="password"
                 name={'password'}
                 value={this.props.password}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Form.Field>
          <label>Пароль еще раз</label>
          <input placeholder='*******'
                 type="password"
                 name={'password2'}
                 value={this.props.password2}
                 onChange={(e)=>{this.props.onUpdateField(e)} }
          />
        </Form.Field>
        <Button type="submit" fluid color={'blue'}>Далее</Button>
      </Segment>
    </Form>;
  }
}

const methodConcludingOptions = [
  { key: 1, text: 'В офисе', value: 1 },
  { key: 2, text: 'Курьером', value: 2 },
];

const AddressOptions = [
  { key: 1, text: 'г. Самара, ул Молодогвардейская, 198', value: 1 },
  { key: 2, text: 'г. Самара, ул Ново-Садовая/Первомайская, 3/27', value: 2 },
  { key: 3, text: 'г. Самара, ул Победы, 92', value: 3 },
  { key: 4, text: 'г. Самара, ул Сергея Лазо, 17', value: 4 },
];

class Step3 extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return <Form onSubmit={()=>this.props.onNext(3)}>
        <Segment stacked>
        <Divider horizontal className="orange-color">Договор</Divider>
        <Form.Field>
          <label>Способ заключения договора</label>
          <Dropdown
            selection
            options={methodConcludingOptions}
            name={'methodConcluding'}
            value={this.props.methodConcluding}
            onChange={(e, {value})=>{
              console.log(value);
              let fake_e = {
                target: {
                  name: 'methodConcluding',
                  value: value
                }
              };
              this.props.onUpdateField(fake_e);
            } }
            placeholder='Выберите способ заключения договора'
          />
        </Form.Field>
        { this.props.methodConcluding === 1 ? (
          <Form.Field>
            <label>Адрес офиса</label>
            <Dropdown
              selection
              options={AddressOptions}
              name={'officeId'}
              value={this.props.officeId}
              onChange={(e, {value})=>{
                console.log(value);
                let fake_e = {
                  target: {
                    name: 'officeId',
                    value: value
                  }
                };
                this.props.onUpdateField(fake_e);
              } }
              placeholder='Выберите адрес'
            />
          </Form.Field>
        ) : null }
        <Button type="submit" fluid color={'orange'}>Отправить заявку</Button>
      </Segment>
    </Form>;
  }
}

class SignUp extends Component {
  constructor(props){
    super(props);
    this.state = {
      step: 1,
      // First step
      itn: '',
      name: '',
      surname: '',
      contactEmail: '',
      contactPhone: '',
      // Two step
      login: '',
      password: '',
      password2: '',
      // Three step
      methodConcluding: 1,
      officeId: null
    };
  }
  onSubmit(e){
    //TODO send request
    console.log('send request');
    // $.ajax({
    //   url: this.props.url,
    //   dataType: 'json',
    //   cache: false,
    //   success: function(data) {
    //     this.setState({data: data});
    //   }.bind(this),
    //   error: function(xhr, status, err) {
    //     console.error(this.props.url, status, err.toString());
    //   }.bind(this)
    // });
    console.log(e);
    console.log(this.state);

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
  // inputChangeHandler(event) {
  //   var stateObject = function() {
  //     returnObj = {};
  //     returnObj[this.target.id] = this.target.value;
  //     return returnObj;
  //   }.bind(event)();
  //
  //   this.setState( stateObject );
  // }
  renderStep(newStep, prevStep='step1'){
    switch (newStep) {
      case 1:
        return <Step1
          itn = {this.state.itn}
          name = {this.state.name}
          surname = {this.state.surname}
          contactEmail = {this.state.contactEmail}
          contactPhone = {this.state.contactPhone}
          onNext = {this.Next.bind(this)}
          onUpdateField = {this.UpdateField.bind(this)}
        />;
      case 2:
        return <Step2
          login = {this.state.login}
          password = {this.state.password}
          password2 = {this.state.password2}
          onNext = {this.Next.bind(this)}
          onUpdateField = {this.UpdateField.bind(this)}
        />;
      case 3:
        return <Step3
          methodConcluding = {this.state.methodConcluding}
          officeId = {this.state.officeId}
          onUpdateField = {this.UpdateField.bind(this)}
          onNext = {this.onSubmit.bind(this)}
        />;
      default:
        return null;
    }
  }
  Next(step){
    this.setState({step: step});
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-sign-up">
        {this.renderStep(this.state.step)}
      </div>}
      footer={<div></div>}
    />;
  }
}

export default SignUp;
