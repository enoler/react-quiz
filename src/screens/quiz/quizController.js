import { Component } from 'react';
import template from './quizView';
import QuizService from './quizService';

const MAX_ROUNDS = 30;
const TIME_LIMIT = 30;

class QuizController extends Component {
  constructor (args) {
    super(args);
    this.quizService = new QuizService();
    this.questionsReceived = {};
    this.chronometerId = 0;
    this.state = {
      question: '',
      questionCategory: '',
      questionAnswer: '',
      round: 0,
      score: 0,
      isPlaying: true,
      highScore: 0,
      reward: 0,
      time: TIME_LIMIT
    };
  }

  answerIsCorrect () {
    clearInterval(this.chronometerId);
    this.getQuestion();
    this.startChronometer();
  }

  answerIsIncorrect () {
    clearInterval(this.chronometerId);
    this.setState({
      isPlaying: false,
      question: 'Game over'
    });
  }

  async changeSecond () {
    if (this.state.time != 0) this.setState({time: this.state.time - 1});
    else this.answerIsIncorrect();
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
      } while (question.id in this.questionsReceived || !question.question);
      this.questionsReceived[question.id] = question.id;
      console.log(question.answer);
      this.setState({
        highScore: this.getHighScore(),
        reward: Math.pow(2, this.state.round),
        round: this.state.round + 1,
        question: question.question,
        questionCategory: question.category,
        questionAnswer: question.answer,
        score: this.state.round === 0 ? 0 : this.state.score + this.state.reward
      });
    }
  }

  async reset () {
    await this.setState({
      isPlaying: true,
      score: 0,
      round: 0,
      time: TIME_LIMIT
    });
    this.getQuestion();
    this.startChronometer();
  }

  submitAnswer (answer) {
    if (answer === this.state.questionAnswer) {
      this.answerIsCorrect();
    } else {
      this.answerIsIncorrect();
    }
  }

  async startChronometer () {
    this.setState({time: 30});
    this.chronometerId = setInterval(() => this.changeSecond(), 1000);
  }

  componentDidMount () {
    this.getQuestion();
    this.startChronometer();
  }

  render () {
    return template(this);
  }
}

export default QuizController;
