import QuizService from './quizService.js';

const quizService = new QuizService();

describe('test quiz', () => {
  it('It should return a string', () => {
    const testString = '';

    expect(typeof testString).toBe('string');
  });
});
