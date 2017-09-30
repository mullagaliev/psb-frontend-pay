import React from 'react';
import './Screen.sass';
import logo from '../logo-psb.svg';
import logoWhite from '../logo-psb-white.png';
import { Menu, Button, Icon } from 'semantic-ui-react';

export default class Screen extends React.Component {
  static defaultProps = {
    header: null,
    content: null,
    footer: null,
    blurBg: false
  };
  constructor() {
    super();
  }
  render() {
    return <div className={'screen' + (this.props.active ? ' Screen--active' : '') }>
      <div className={ 'bg-image ' + (this.props.blurBg ? 'bg-image--blur' : '') }>
      </div>
      <div className="header">
        {this.props.header ? this.props.header : (
          <div className="header__logo">
            <a href="https://www.psbank.ru/" target="_blank">
              <img src={logoWhite} />
            </a>
          </div>
        )}
      </div>
      <div className="content">
        { this.props.content }
      </div>
      <div className="footer" >
        {this.props.footer ? (this.props.footer) : (
          <div className="menu-bottom">
            <Menu compact widths={4}>
              <Menu.Item as='a' className="active">
                <Icon name='block layout' size="large" color={'orange'}/>
                <span>Главная</span>
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='history' size="large"/>
                <span>История</span>
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='comments' size="large"/>
                <span>Помощь</span>
              </Menu.Item>
              <Menu.Item as='a'>
                <Icon name='setting' size="large"/>
                <span>Настройки</span>
              </Menu.Item>
            </Menu>
          </div>
        ) }
      </div>
    </div>;
  }
}

export { Screen };