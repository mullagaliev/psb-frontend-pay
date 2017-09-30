import React, { Component } from 'react';
import './Screen.sass';
import { Form, Segment, Button, Dropdown, Divider } from 'semantic-ui-react';
import Screen from './Screen';

// TODO добавить переход по шагам
function Step1() {
  return <Segment stacked>
    <Divider horizontal className="orange-color">Организация</Divider>
    <Form.Field>
      <label>ИНН</label>
      <input placeholder='0000000000'
        // value={this.state.login}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Divider horizontal className="orange-color">Контакты</Divider>
    <Form.Field>
      <label>Имя</label>
      <input placeholder='Иван'
        // value={this.state.name}
        // onChange={this.onChangeLogin.bind(this)}
        // contactPhone: '',
      />
    </Form.Field>
    <Form.Field>
      <label>Фамилия</label>
      <input placeholder='Иванов'
        // value={this.state.surname}
        // onChange={this.onChangeLogin.bind(this)}
        // contactPhone: '',
      />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input placeholder='Email'
        // value={this.state.contactEmail}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Form.Field>
      <label>Телефон</label>
      <input placeholder='+7(999)999-99-99'
        // value={this.state.contactPhone}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Button type="submit" fluid color={'blue'}>Далее</Button>
  </Segment>;
}

function Step2() {
  return <Segment stacked>
    <Divider horizontal className="orange-color">Аккаунт</Divider>
    <Form.Field>
      <label>Логин</label>
      <input placeholder='User'
        // value={this.state.login}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Form.Field>
      <label>Пароль</label>
      <input placeholder='*******'
        // value={this.state.password}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Form.Field>
      <label>Пароль еще раз</label>
      <input placeholder='*******'
        // value={this.state.password2}
        // onChange={this.onChangeLogin.bind(this)}
      />
    </Form.Field>
    <Button type="submit" fluid color={'blue'}>Далее</Button>
  </Segment>;
}

const methodConcludingOptions = [
  { key: 1, text: 'В офисе', value: 1 },
  { key: 2, text: 'Курьером', value: 2 },
  { key: 3, text: 'Почтой', value: 3 },
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
    return <Segment stacked>
      <Divider horizontal className="orange-color">Договор</Divider>
      <Form.Field>
        <label>Способ заключения договора</label>
        <Dropdown
          selection
          options={methodConcludingOptions}
          placeholder='Выберите способ заключения договора'
        />

      </Form.Field>
      { this.props.methodConcluding === 1 ? (
        <Form.Field>
          <label>Адрес офиса</label>
          <Dropdown
            selection
            options={AddressOptions}
            placeholder='Выберите адрес'
          />
        </Form.Field>
      ) : null }
      <Button type="submit" fluid color={'orange'}>Отправить заявку</Button>
    </Segment>;
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
      methodConcluding: 1
    };
  }
  // renderStep(prev, current){
  //   switch (prev) {
  //     case 'step1':
  //       return <Step1 navigator={nav} />;
  //     case 'step2':
  //       return <Step2 navigator={nav} />;
  //     case 'step3':
  //       return <PostsPage navigator={nav} filter={route.filter} />;
  //     default:
  //       return <EditPage route={route} navigator={nav} />;
  //   }
  // }
  Next(){
    this.setState({step: this.state.step+1});
  }
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="form-login">
        <Form onSubmit={this.Next.bind(this)}>
          <Step1
            itn = {this.state.itn}
            name = {this.state.name}
            surname = {this.state.surname}
            contactEmail = {this.state.contactEmail}
            contactPhone = {this.state.contactPhone}
          />
          <Step2
            login = {this.state.login}
            password = {this.state.password}
            password2 = {this.state.password2}
          />
          <Step3
            methodConcluding = {this.state.methodConcluding}
          />
        </Form>
      </div>}
    />;
  }
}

export default SignUp;
