import React from 'react';
import './Screen.sass';
import logo from '../logo-psb.svg';
import logoWhite from '../logo-psb-white.png';

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
        {/*{this.props.footer ? (this.props.footer) : (*/}
            {/*<div className="copyright">*/}
              {/*<span className="copyright__icon">*/}
                {/*©*/}
              {/*</span>*/}
              {/*<span className="copyright__team">*/}
                {/*InnovationTM*/}
              {/*</span>*/}
              {/*<span className="copyright__year">*/}
                {/*2017*/}
              {/*</span>*/}
            {/*</div>*/}
        {/*) }*/}
      </div>
    </div>;
  }
}

export { Screen };