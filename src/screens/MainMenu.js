import React, { Component } from 'react';
import './Screen.sass';
import { Segment, Button, Divider, Icon, Grid } from 'semantic-ui-react';
import Screen from './Screen';

class MainMenu extends Component {
  render() {
    return <Screen
      active={ this.props.active }
      content={<div className="main-menu">
        <Grid>
          <Grid.Row>
            <Grid.Column mobile={8} tablet={8} computer={8}>
              <Segment>
                <div className="main-menu-item">
                  <div className="main-menu-item__icon">
                    <Icon.Group size='large'>
                      <Icon name='tablet' size='large' color="orange" />
                      <Icon corner name='add' color="blue"/>
                    </Icon.Group>
                  </div>
                  <div className="main-menu-item__title">
                    Добавить терминал
                  </div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={8} computer={8}>
              <Segment>
                <div className="main-menu-item">
                  <div className="main-menu-item__icon">
                    <Icon.Group size='large'>
                      <Icon name='archive' size='large' color="blue" />
                      <Icon corner name='history' color="orange"/>
                    </Icon.Group>
                  </div>
                  <div className="main-menu-item__title">
                    История транзакций
                  </div>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
          <Grid.Row>
            <Grid.Column mobile={8} tablet={8} computer={8}>
              <Segment>
                <div className="main-menu-item">
                  <div className="main-menu-item__icon">
                    <Icon.Group size='large'>
                      <Icon name='money' size='large' color="orange" />
                      <Icon corner name='add' />
                    </Icon.Group>
                  </div>
                  <div className="main-menu-item__title">
                    Счет на оплату
                  </div>
                </div>
              </Segment>
            </Grid.Column>
            <Grid.Column mobile={8} tablet={8} computer={8}>
              <Segment>
                <div className="main-menu-item">
                  <div className="main-menu-item__icon">
                    <Icon.Group size='large'>
                      <Icon name='archive' size='large' color="blue" />
                      <Icon corner name='history' />
                    </Icon.Group>
                  </div>
                  <div className="main-menu-item__title">
                    История транзакций терминала
                  </div>
                </div>
              </Segment>
            </Grid.Column>
          </Grid.Row>
        </Grid>
      </div>}
    />;
  }
}

export default MainMenu;