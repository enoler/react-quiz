import React, { Component } from 'react';
import {
  Form,
  Badge,
  Button
} from 'react-bootstrap';

export default class FormComponent extends Component {
  constructor (args) {
    super(args);
    this.inputRef = React.createRef();
    this.state = { answer: null };
  }

  getQuestionContent () {
    return (
      <div>
        <div>
          <Badge
            style={{ marginRight: 20 }}
            variant='secondary'
            className='Quiz-Element'>
            { this.props.category }
          </Badge>
          <Badge
            variant='info'
            className='Quiz-Element'>
            { this.props.reward} {this.props.reward === 1 ? 'point' : 'points' }
          </Badge>
        </div>
        <Form.Control
          className='Quiz-Element'
          size='lg'
          type='text'
          ref={this.inputRef}
          placeholder='Answer'
          onChange={(event) => this.onChange(event)} />
      </div>
    );
  }

  onChange (event) {
    this.setState({ answer: event.currentTarget.value.toUpperCase() });
  }

  onClick () {
    this.props.onClick(this.state.answer);
    if (this.props.isPlaying) this.inputRef.current.value = '';
  }

  render () {
    return (
      <Form>
        <Form.Group controlId='formInputInteger'>
          <Form.Label className='Quiz-Element'>{ this.props.question }</Form.Label>
          {this.props.isPlaying ? this.getQuestionContent() : <div />}
        </Form.Group>
        <Button variant='primary'
          onClick={() => this.onClick()}>{ this.props.buttonText }</Button>
      </Form>
    );
  }
}
