import { Component } from 'react';
import template from './quizView';
import QuizService from './quizService';

class QuizController extends Component {
  constructor (args) {
    super(args);
    this.quizService = new QuizService();
    this.state = {
      question: '',
      questionCategory: '',
      questionAnswer: '',
      round: 0
    };
  }

  componentDidMount () {
    this.getQuestion();
  }

  async getQuestion () {
    const question = await this.quizService.getQuestion();
    this.setState({
      round: this.state.round + 1,
      question: question.question,
      questionCategory: question.category,
      questionAnswer: question.answer
    });
  }

  submitAnswer (answer) {
    console.log(answer, this.state.questionAnswer);
  }

  render () {
    return template(this);
  }
}

export default QuizController;
