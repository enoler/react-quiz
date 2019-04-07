import { Component } from 'react';
import template from './quizView';
import QuizService from './quizService';

class QuizController extends Component {
  constructor (args) {
    super(args);
    this.quizService = new QuizService();
  }

  render () {
    return template(this);
  }
}

export default QuizController;
