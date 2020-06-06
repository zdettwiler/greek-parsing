import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import morphologyOptions from './morphologyOptions'
import './Morphology.css'
import Word from './Word';



const Morphology = ({ checkAnswer }) => {
  // let [isCorrect, setIsCorrect] = useState(false);
  let [parsing, setParsing] = useState({
    case: '',
    degree: '',
    gender: '',
    mood: '',
    nature: '',
    person: '',
    tense: '',
    voice: '',
    number: ''
   });

  const handleChange = (field, value) => {
    setParsing({
      ...parsing,
      [field]: value
    });
    // console.log(parsing, answer)
    checkAnswer({
      ...parsing,
      [field]: value
    });
  }

  // const checkAnswer = x => {
  //   console.log('check', x, answer)
  //   for (const field in x) {
  //     console.log('check', field, x[field], answer[field])
  //     if (x[field] !== answer[field]) {
  //       setIsCorrect(false);
  //       return;
  //     }
  //   }
  //   setIsCorrect(true);
  // }

  const buildParsingDropdowns = () => {
    // console.log(morph.find(nat => nat.value === nature).parsing)
    let parsingFields = morphologyOptions.find(nat => nat.value === parsing.nature);
    if (!parsingFields || !parsingFields.parsing) {
      return;
    }

    return Object.entries(parsingFields.parsing).map(([field, values]) => {
      return (
        <Dropdown
          key={field}
          placeholder={field}
          selection
          options={values}
          onChange={(e, {value}) => handleChange(field, value)}
        ></Dropdown>
      );
    });
  }

  return (
    <div className="Morphology">
      <Dropdown
        key="nature"
        placeholder="nature"
        selection
        value={parsing.nature}
        options={morphologyOptions}
        onChange={(e, {value}) => handleChange('nature', value)}
      ></Dropdown>
      { buildParsingDropdowns() }
    </div>
  )
};

export default Morphology;