import axios from 'axios';
import config from '../../config/env.json';

export default class QuizService {
  async getQuestion () {
    const question = await axios.get(config.apiUrl);
    return question.data[0];
  }
}
