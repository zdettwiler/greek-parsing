import React, { useState } from 'react';
import Morphology from './Morphology';

import './Word.css'

const Word = ({word}) => {
  let [isCorrect, setIsCorrect] = useState(false);

  const checkAnswer = answer => {
    for (const field in answer) {
      if (answer[field] !== word.parsing[field]) {
        setIsCorrect(false);
        return;
      }
    }
    setIsCorrect(true);
  }

  return word
    ? (
      <div className="Word">
        <div
          className={"greek" + (isCorrect ? ' correct' : '')}
        >{word.greek}</div>
        <Morphology
          key={word.greek}
          checkAnswer={ checkAnswer }
        ></Morphology>
        
      </div>
    )
    : '';
};

export default Word;