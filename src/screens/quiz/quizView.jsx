import React from 'react';
import Form from '../../components/form';
import NavBar from '../../components/navBar';

import './quizStyles.css';

export default (controller) => (
  <div className='Quiz-Container'>
    <NavBar
      round={controller.state.round}
      score={controller.state.score}
      highScore={controller.state.highScore} />
    <div className='Quiz-Content'>
      <div className='Quiz-Form'>
        <Form
          question={controller.state.question}
          category={controller.state.questionCategory}
          reward={controller.state.reward}
          buttonText={controller.state.buttonText}
          isPlaying={controller.state.isPlaying}
          onClick={(answer) => controller.getClickButton(answer)} />
      </div>
    </div>
  </div>

);
