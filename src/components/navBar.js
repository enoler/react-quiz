import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class NavBarComponent extends Component {
  render () {
    return (
      <Navbar bg='primary' variant='light'>
        <Navbar.Brand href='#home'>
          <img
            alt=''
            src='../assets/logo.svg'
            width='30'
            height='30'
            className='d-inline-block align-top' />
          {'React Quiz'}
        </Navbar.Brand>
        <Navbar.Collapse className='justify-content-end'>
          <Navbar.Text className='Nav-Item'>
            Time: {this.props.time}
          </Navbar.Text>
          <Navbar.Text className='Nav-Item'>
            High Score: {this.props.highScore}
          </Navbar.Text>
          <Navbar.Text className='Nav-Item'>
            Round: {this.props.round}
          </Navbar.Text>
          <Navbar.Text>
            Score: {this.props.score}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
