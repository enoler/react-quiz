import React, { Component } from 'react';
import {
  Form,
  Badge,
  Button
} from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor (args) {
    super(args);
    this.state = {
      answer: null
    };
  }

  onChange (event) {
    this.setState({ answer: event.currentTarget.value.toUpperCase() });
  }

  render () {
    return (
      <Form>
        <h1>Quiz</h1>
        <Form.Group controlId='formInputInteger'>
          <Form.Label className='Quiz-Element'>{this.props.question}</Form.Label>
          <Badge
            style={{ marginRight: 20 }}
            variant='secondary'
            className='Quiz-Element'>
            {this.props.category}
          </Badge>
          <Badge
            variant='info'
            className='Quiz-Element'>{
            this.props.reward} {this.props.reward === 1 ? 'point' : 'points'}
          </Badge>
          <Form.Control
            className='Quiz-Element'
            size='lg'
            type='text'
            placeholder='Answer'
            onChange={(event) => this.onChange(event)} />
        </Form.Group>
        <Button variant='primary'
          onClick={() => this.props.onClick(this.state.answer)}>Submit</Button>
      </Form>
    );
  }
}
