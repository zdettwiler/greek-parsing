export default {
  'A-': {
    name: 'adjective',
    person: {'1': '1st', '2': '2nd', '3': '3rd'},
    case: {'N': 'nominative', 'G': 'genitive', 'D': 'dative', 'A': 'accusative'},
    number: {'S': 'singular', 'P': 'plural'},
    gender: {'M': 'masculine', 'F': 'feminine', 'N': 'neuter'},
  },
  'A-': 'adjective',
  'C-': 'conjunction',
  'D-': 'adverb',
  'I-': 'interjection',
  'N-': 'noun',
  'P-': 'preposition',
  'RA': 'definite article',
  'RD': 'demonstrative pronoun',
  'RI': 'interrogative/indefinite pronoun',
  'RP': 'personal pronoun',
  'RR': 'relative pronoun',
  'V-': 'verb',
  'X-': 'particle'
};

const parse = {
  person: {'1': '1st', '2': '2nd', '3': '3rd'},
  tense: {'P': 'present', 'I': 'imperfect', 'F': 'future', 'A': 'aorist', 'X': 'perfect', 'Y': 'pluperfect'},
  voice: {'A': 'active', 'M': 'middle', 'P': 'passive'},
  mood: {'I': 'indicative', 'D': 'imperative', 'S': 'subjunctive', 'O': 'optative', 'N': 'infinitive', 'P': 'participle'},
  case: {'N': 'nominative', 'G': 'genitive', 'D': 'dative', 'A': 'accusative'},
  number: {'S': 'singular', 'P': 'plural'},
  gender: {'M': 'masculine', 'F': 'feminine', 'N': 'neuter'},
  degree: {'C': 'comparative', 'S': 'superlative'}
};

values = [
  { 
    value: 'A-',
    name: 'adjective',
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
  { value: 'C-', text: 'conjunction' },
  { value: 'D-', text: 'adverb' },
  { value: 'I-', text: 'interjection' },
  { value: 'N-', text: 'noun' },
  { value: 'P-', text: 'preposition' },
  { value: 'RA', text: 'definite article' },
  { value: 'RD', text: 'demonstrative pronoun' },
  { value: 'RI', text: 'interrogative/indefinite pronoun' },
  { value: 'RP', text: 'personal pronoun' },
  { value: 'RR', text: 'relative pronoun' },
  { value: 'V-', text: 'verb' },
  { value: 'X-', text: 'particle' },
];