import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class NavBarComponent extends Component {
  render () {
    return (
      <Form>
        <h1>Quiz</h1>
        <Form.Group controlId='formInputInteger'>
          <Form.Label>Please, answer the question:</Form.Label>
          <Form.Control
            size='lg'
            type='text'
            placeholder='Answer'
            onChange={(event) => this.onChange(event)} />
        </Form.Group>
      </Form>
    );
  }
}
