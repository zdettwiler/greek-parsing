import axios from 'axios';

// const partOfSpeech = {
//   'A-': 'adjective',
//   'C-': 'conjunction',
//   'D-': 'adverb',
//   'I-': 'interjection',
//   'N-': 'noun',
//   'P-': 'preposition',
//   'RA': 'definite article',
//   'RD': 'demonstrative pronoun',
//   'RI': 'interrogative/indefinite pronoun',
//   'RP': 'personal pronoun',
//   'RR': 'relative pronoun',
//   'V-': 'verb',
//   'X-': 'particle'
// }

// const parse = {
//   'person': {'1': '1st', '2': '2nd', '3': '3rd'},
//   'tense': {'P': 'present', 'I': 'imperfect', 'F': 'future', 'A': 'aorist', 'X': 'perfect', 'Y': 'pluperfect'},
//   'voice': {'A': 'active', 'M': 'middle', 'P': 'passive'},
//   'mood': {'I': 'indicative', 'D': 'imperative', 'S': 'subjunctive', 'O': 'optative', 'N': 'infinitive', 'P': 'participle'},
//   'case': {'N': 'nominative', 'G': 'genitive', 'D': 'dative', 'A': 'accusative'},
//   'number': {'S': 'singular', 'P': 'plural'},
//   'gender': {'M': 'masculine', 'F': 'feminine', 'N': 'neuter'},
//   'degree': {'C': 'comparative', 'S': 'superlative'}
// };

async function getVerse() {
  let data = await axios.get('https://raw.githubusercontent.com/morphgnt/sblgnt/master/66-Ro-morphgnt.txt');
  data = data.data.split('\n');
  // console.log(data) // the header row
  // data.splice(0, 54);
  data = data.map(item => {
    let row = item.split(' ');
    let parsing = !row[2]
      ? row[2]
      : row[2].split('').reduce((parsing, part, id) => {
        const code = [
          'person',
          'tense',
          'voice',
          'mood',
          'case',
          'number',
          'gender',
          'degree'
        ]

        parsing[code[id]] = part === '-' ? '' : part // parse[code[id]][part];
        parsing.nature = row[1] // partOfSpeech[row[1]];
        return parsing
      }, {});
    // parsing.split('')
    return {
      ref: row[0], // regex \d{2}_([A-Za-z]{3}).(\d{3}).(\d{3})
      greek: row[3],
      rawParsing: row[2],
      parsing
    };
  });


// Parsing Code
  // // just Matthew 1:1
  return data.filter(word => word.ref === '060101');
}

// function process(words) {
//   if (!words.length) {return}
  
//   console.log(words.reduce((morph, word) => {
//     if (!word.parsing) { return morph; }
//     if (!morph[word.parsing.nature]) {
//       morph[word.parsing.nature] = {
//         case: new Set(),
//         degree: new Set(),
//         gender: new Set(),
//         mood: new Set(),
//         number: new Set(),
//         person: new Set(),
//         tense: new Set(),
//         voice: new Set(),
//       };
//     }

//     morph[word.parsing.nature] = {
//       case: morph[word.parsing.nature].case.add(word.parsing.case),
//       degree: morph[word.parsing.nature].degree.add(word.parsing.degree),
//       gender: morph[word.parsing.nature].gender.add(word.parsing.gender),
//       mood: morph[word.parsing.nature].mood.add(word.parsing.mood),
//       number: morph[word.parsing.nature].number.add(word.parsing.number),
//       person: morph[word.parsing.nature].person.add(word.parsing.person),
//       tense: morph[word.parsing.nature].tense.add(word.parsing.tense),
//       voice: morph[word.parsing.nature].voice.add(word.parsing.voice)
//     }

//     return morph
//   }, {}))
// }

export {
  getVerse
};