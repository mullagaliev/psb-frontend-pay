import React from 'react';
import './Screen.sass';
import logo from '../logo-psb.svg';
import logoWhite from '../logo-psb-white.png';
import { Menu, Button, Icon } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

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
            <Link to={`/welcome`}>
              <img src={logoWhite} />
            </Link>
          </div>
        )}
      </div>
      <div className="b-content">
        { this.props.content }
      </div>
      <div className="footer" >
        {this.props.footer !== null ? ( !this.props.footer ? <div>
          <Link to={`/welcome`}>
            <Button circular icon='arrow left' />
          </Link>
        </div> : (
          <div className="menu-bottom">
            <Menu compact widths={4}>
              <Menu.Item className="active">
                <Link to={`/main`}>
                  <Icon name='block layout' size="large" color={'orange'}/>
                  <span>Главная</span>
                </Link>
              </Menu.Item>
              <Menu.Item>
                {/*<Link to={`/main`}>*/}
                  <Icon name='history' size="large"/>
                  <span>История</span>
                {/*</Link>*/}
              </Menu.Item>
              <Menu.Item >
                {/*<Link to={`/main`}>*/}
                  <Icon name='comments' size="large"/>
                  <span>Помощь</span>
                {/*</Link>*/}
              </Menu.Item>
              <Menu.Item>
                <Link to={`/settings`}>
                  <Icon name='setting' size="large"/>
                  <span>Настройки</span>
                </Link>
              </Menu.Item>
            </Menu>
          </div>)) : null
        }
      </div>
    </div>;
  }
}

export { Screen };