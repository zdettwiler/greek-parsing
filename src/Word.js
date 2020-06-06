import React from 'react';
import Morphology from './Morphology';

import './Word.css'

const Word = ({word}) => {
  console.log(word);

  return word
  ? (
    <div className="Word">
      <div className="greek">{ word.greek }</div>
      <Morphology
        answer={ word.parsing }
      ></Morphology>
    </div>
  )
  : '';
};

export default Word;