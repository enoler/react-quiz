import React, { Component } from 'react';
import { Navbar } from 'react-bootstrap';

export default class NavBarComponent extends Component {
  onChange (event) {
    const inputAnswer = parseInt(event.currentTarget.value);
    console.log(inputAnswer);
  }

  render () {
    return (
      <Navbar bg='dark' variant='dark'>
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
          <Navbar.Text>
            Round: <a href='#login'>0</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
