import React from 'react';
import Form from '../../components/form';
import NavBar from '../../components/navBar';

import './quizStyles.css';

export default (controller) => (
  <div className='Quiz-Container'>
    <NavBar
      round={controller.state.round} />
    <div className='Quiz-Content'>
      <div className='Quiz-Form'>
        <Form
          question={controller.state.question}
          category={controller.state.questionCategory}
          onClick={(answer) => controller.submitAnswer(answer)} />
      </div>
    </div>
  </div>

);
