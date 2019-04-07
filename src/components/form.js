import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor (args) {
    super(args);
    this.state = {
      result: null
    };
  }

  onChange (event) {
    const inputAnswer = parseInt(event.currentTarget.value);
    console.log(inputAnswer);
  }

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
