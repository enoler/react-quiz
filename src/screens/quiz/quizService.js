import axios from 'axios';
import config from '../../config/env.json';

export default class QuizService {
  async getQuestion () {
    const question = await axios.get(config.apiUrl);
    return {
      id: question.data[0].id,
      question: question.data[0].question,
      category: question.data[0].category.title,
      answer: question.data[0].answer
    };
  }
}
