import React, { Component } from 'react';
import {
  Form,
  Badge
} from 'react-bootstrap';

export default class NavBarComponent extends Component {
  render () {
    return (
      <Form>
        <h1>Quiz</h1>
        <Form.Group controlId='formInputInteger'>
          <Form.Label className='Quiz-Element'>{this.props.question}</Form.Label>
          <Badge variant='primary' className='Quiz-Element'>{this.props.category}</Badge>
          <Form.Control
            className='Quiz-Element'
            size='lg'
            type='text'
            placeholder='Answer'
            onChange={(event) => this.onChange(event)} />
        </Form.Group>
      </Form>
    );
  }
}
