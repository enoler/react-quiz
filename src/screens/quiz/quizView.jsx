import React from 'react';
import Form from '../../components/form';
import NavBar from '../../components/navBar';

import './quizStyles.css';

export default (controller) => (
  <div className='Quiz-Container'>
    <NavBar />
    <div className='Quiz-Content'>
      <div className='Quiz-Form'>
        <Form
          onChange={(answer) => controller.log(answer)} />
      </div>
    </div>
  </div>

);
