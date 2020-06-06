export default [
  { 
    value: 'A-',
    text: 'adjective',
    parsing: {
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],      
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ],
      degree: [
        { value: '-', text: '-' },
        { value: 'C', text: 'comparative' },
        { value: 'S', text: 'superlative' }
      ]
    } 
  },
  {
    value: 'N-',
    text: 'noun',
    parsing: {
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
      ],
      number: [
        { value: 'S', text: 'sg' },
        { value: 'P', text: 'pl' }
      ]
    }
  },
  {
    value: 'RA',
    text: 'definite article',
    parsing: {
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
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
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
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
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
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
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
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
      case: [
        { value: 'N', text: 'N' },
        { value: 'A', text: 'A' },
        { value: 'G', text: 'G' },
        { value: 'D', text: 'D' },
      ],
      gender: [
        { value: 'M', text: 'm' },
        { value: 'F', text: 'f' },
        { value: 'N', text: 'n' }
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
      voice: [
        { value: 'A', text: 'active' },
        { value: 'M', text: 'middle' },
        { value: 'P', text: 'passive' }
      ],
      mood: [
        {
          value: 'I',
          text: 'indicative',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              { value: 'I', text: 'imperfect' },
              { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              { value: 'X', text: 'perfect' },
              { value: 'Y', text: 'pluperfect' }
            ],
            person: [
              { value: '1', text: '1st' },
              { value: '2', text: '2nd' },
              { value: '3', text: '3rd' }
            ],
            number: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'D',
          text: 'imperative',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              { value: 'I', text: 'imperfect' },
              { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              { value: 'X', text: 'perfect' },
              { value: 'Y', text: 'pluperfect' }
            ],
            person: [
              // { value: '1', text: '1st' },
              { value: '2', text: '2nd' },
              // { value: '3', text: '3rd' }
            ],
            number: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'S',
          text: 'subjunctive',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              { value: 'I', text: 'imperfect' },
              { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              { value: 'X', text: 'perfect' },
              { value: 'Y', text: 'pluperfect' }
            ],
            person: [
              { value: '1', text: '1st' },
              { value: '2', text: '2nd' },
              { value: '3', text: '3rd' }
            ],
            number: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'O',
          text: 'optative',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              { value: 'I', text: 'imperfect' },
              { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              { value: 'X', text: 'perfect' },
              { value: 'Y', text: 'pluperfect' }
            ],
            person: [
              { value: '1', text: '1st' },
              { value: '2', text: '2nd' },
              { value: '3', text: '3rd' }
            ],
            number: [
              { value: 'S', text: 'sg' },
              { value: 'P', text: 'pl' }
            ]
          }
        },
        {
          value: 'N',
          text: 'infinitive',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              // { value: 'I', text: 'imperfect' },
              // { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              // { value: 'X', text: 'perfect' },
              // { value: 'Y', text: 'pluperfect' }
            ],
            // person: [
            //   { value: '1', text: '1st' },
            //   { value: '2', text: '2nd' },
            //   { value: '3', text: '3rd' }
            // ],
            // number: [
            //   { value: 'S', text: 'sg' },
            //   { value: 'P', text: 'pl' }
            // ]
          }
        },
        {
          value: 'P',
          text: 'participle',
          parsing: {
            tense: [
              { value: 'P', text: 'present' },
              // { value: 'I', text: 'imperfect' },
              // { value: 'F', text: 'future' },
              { value: 'A', text: 'aorist' },
              // { value: 'X', text: 'perfect' },
              // { value: 'Y', text: 'pluperfect' }
            ],
            // person: [
            //   { value: '1', text: '1st' },
            //   { value: '2', text: '2nd' },
            //   { value: '3', text: '3rd' }
            // ],
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
            gender: [
              { value: 'M', text: 'm' },
              { value: 'F', text: 'f' },
              { value: 'N', text: 'n' }
            ],
          }
        }
      ]
    }
  },
  { value: 'P-', text: 'preposition' },
  { value: 'X-', text: 'particle' },
  { value: 'C-', text: 'conjunction' },
  { value: 'D-', text: 'adverb' },
  { value: 'I-', text: 'interjection' }
];