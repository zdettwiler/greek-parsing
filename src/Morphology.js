import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import morphologyOptions from './morphologyOptions'
import './Morphology.css'



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

  const buildParsingDropdowns = (options, value) => {
    let parsingFields = options.find(field => field.value === value);
    if (!parsingFields || !parsingFields.parsing) {
      return;
    }
    
    return Object.entries(parsingFields.parsing).reduce((dropdowns, [field, values]) => {
      dropdowns.push((
        <Dropdown
          key={field}
          placeholder={field}
          selection
          compact
          options={values}
          onChange={(e, {value}) => handleChange(field, value)}
        ></Dropdown>
      ));

      if (parsingFields.parsing[field] && parsing[field] !== '') {
        dropdowns.push(buildParsingDropdowns(parsingFields.parsing[field], parsing[field]))
      }
      return dropdowns
    }, []);
  }

  return (
    <div className="Morphology">
      <Dropdown
        key="nature"
        placeholder="nature"
        selection
        compact
        value={parsing.nature}
        options={morphologyOptions}
        onChange={(e, {value}) => handleChange('nature', value)}
      ></Dropdown>
      { buildParsingDropdowns(morphologyOptions, parsing.nature) }
    </div>
  )
};

export default Morphology;