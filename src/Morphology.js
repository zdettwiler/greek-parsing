import React, { useState } from 'react';
import { Dropdown } from 'semantic-ui-react';

import './Morphology.css'

const morph = [
  { 
    value: 'A-',
    text: 'adjective',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ],
      degree: [
        { value: 'C', text: 'comparative' },
        { value: 'S', text: 'superlative' }
      ]
    } 
  },
  { value: 'C-', text: 'conjunction' },
  { value: 'D-', text: 'adverb' },
  { value: 'I-', text: 'interjection' },
  {
    value: 'N-',
    text: 'noun',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  { value: 'P-', text: 'preposition' },
  {
    value: 'RA',
    text: 'definite article',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RD',
    text: 'demonstrative pronoun',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RI',
    text: 'interrogative/indefinite pronoun',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RP',
    text: 'personal pronoun',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RR',
    text: 'relative pronoun',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'V-',
    text: 'verb',
    parsing: {
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' }
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ],
      person: [
        { value: '1', text: '1st' },
        { value: '2', text: '2nd' },
        { value: '3', text: '3rd' }
      ],
      tense: [
        { value: 'P', text: 'present' },
        { value: 'I', text: 'imperfect' },
        { value: 'F', text: 'future' },
        { value: 'A', text: 'aorist' },
        { value: 'X', text: 'perfect' },
        { value: 'Y', text: 'pluperfect' }
      ],
      voice: [
        { value: 'A', text: 'active' },
        { value: 'M', text: 'middle' },
        { value: 'P', text: 'passive' }
      ],
      mood: [
        { value: 'I', text: 'indicative' },
        { value: 'D', text: 'imperative' },
        { value: 'S', text: 'subjunctive' },
        { value: 'O', text: 'optative' },
        { value: 'N', text: 'infinitive' },
        { value: 'P', text: 'participle' }
      ]
    }
  },
  { value: 'X-', text: 'particle' },
];

const Morphology = (answer) => {
  let [nature, setNature] = useState('');

  const handleChange = (e, { value }) => {
    console.log(value);
    setNature(value);
    // buildParsingDropdowns(morph.find(nature => nature.value === value).parsing);
  }

  const buildParsingDropdowns = () => {
    // console.log(morph.find(nat => nat.value === nature).parsing)
    let parsingFields = morph.find(nat => nat.value === nature);
    if (!parsingFields || !parsingFields.parsing) {
      return;
    }

    return Object.entries(parsingFields.parsing).map(([field, values]) => {
      return (
        <Dropdown
          placeholder={field}
          selection
          options={values}
        ></Dropdown>
      );
    });
  }

  return (
    <div className="Morphology">
      <Dropdown
        placeholder="nature"
        selection
        value={nature}
        options={morph}
        onChange={handleChange}
      ></Dropdown>
      { buildParsingDropdowns() }
    </div>
  )
};

export default Morphology;