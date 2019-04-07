import { Component } from 'react';
import template from './quizView';
import QuizService from './quizService';

const MAX_ROUNDS = 5;

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
      score: 0,
      isPlaying: true,
      highScore: 0,
      reward: 0
    };
  }

  answerIsIncorrect () {
    this.setState({
      isPlaying: false,
      question: 'Game over'
    });
  }

  getClickButton (answer) {
    if (this.state.isPlaying) this.submitAnswer(answer);
    else this.reset();
  }

  getHighScore () {
    if (!this.state.highScore && this.state.round == 0) return 0;
    else {
      return this.state.score >= this.state.highScore ?
      this.state.score + this.state.reward : this.state.highScore;
    }
  }

  async getQuestion () {
    if (this.state.round >= MAX_ROUNDS) {
      this.setState({
        isPlaying: false,
        question: 'You won!',
        score: this.state.score + this.state.reward,
        highScore: this.getHighScore()

      });
    } else {
      let question;
      do {
        question = await this.quizService.getQuestion();
      } while (question.id in this.questionsReceived);
      this.questionsReceived[question.id] = question.id;
      console.log(question.answer);
      this.setState({
        highScore: this.getHighScore(),
        reward: Math.pow(2, this.state.round),
        round: this.state.round + 1,
        question: question.question,
        questionCategory: question.category,
        questionAnswer: question.answer,
        score: this.state.round == 0 ? 0 : this.state.score + this.state.reward
      });
    }
  }

  async reset () {
    await this.setState({
      isPlaying: true,
      score: 0,
      round: 0
    });
    this.getQuestion();
  }

  submitAnswer (answer) {
    if (answer == this.state.questionAnswer) {
      this.getQuestion();
    } else {
      this.answerIsIncorrect();
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
