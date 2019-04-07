import { Component } from 'react';
import template from './quizView';
import QuizService from './quizService';

class QuizController extends Component {
  constructor (args) {
    super(args);
    this.quizService = new QuizService();
    this.questionsReceived = {};
    this.state = {
      question: '',
      questionCategory: '',
      questionAnswer: '',
      round: 0,
      score: 0
    };
  }

  answerIsCorrect () {
    this.incrementScore();
    this.getQuestion();
  }

  async getQuestion () {
    let question;
    do {
      question = await this.quizService.getQuestion();
    } while (question.id in this.questionsReceived);
    this.questionsReceived[question.id] = question.id;
    console.log(question.answer);
    this.setState({
      reward: Math.pow(2, this.state.round),
      round: this.state.round + 1,
      question: question.question,
      questionCategory: question.category,
      questionAnswer: question.answer
    });
  }

  incrementScore () {
    this.setState({
      score: this.state.score + this.state.reward
    });
  }

  submitAnswer (answer) {
    if (answer == this.state.questionAnswer) {
      this.answerIsCorrect();
    }
  }

  componentDidMount () {
    this.getQuestion();
  }

  render () {
    return template(this);
  }
}

export default QuizController;
