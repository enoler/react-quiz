import React from 'react';
import Form from '../../components/form';

import './quizStyles.css';

export default (controller) => (
  <div className='App-header'>
    <div className='Content'>
      <Form
        onChange={(answer) => controller.log(answer)} />
    </div>
  </div>

);
