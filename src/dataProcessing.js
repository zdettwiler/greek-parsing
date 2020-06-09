import axios from 'axios';

const bookFiles = {
  'Matthieu': '61-Mt-morphgnt.txt',
  'Marc': '62-Mk-morphgnt.txt',
  'Luc': '63-Lk-morphgnt.txt',
  'Jean': '64-Jn-morphgnt.txt',
  'Actes': '65-Ac-morphgnt.txt',
  'Romains': '66-Ro-morphgnt.txt',
  '1 Corinthiens': '67-1Co-morphgnt.txt',
  '2 Corinthiens': '68-2Co-morphgnt.txt',
  'Galates': '69-Ga-morphgnt.txt',
  'Éphésiens': '70-Eph-morphgnt.txt',
  'Philippiens': '71-Php-morphgnt.txt',
  'Colossiens': '72-Col-morphgnt.txt',
  '1 Thessaloniciens': '73-1Th-morphgnt.txt',
  '2 Thessaloniciens': '74-2Th-morphgnt.txt',
  '1 Timothée': '75-1Ti-morphgnt.txt',
  '2 Timothée': '76-2Ti-morphgnt.txt',
  'Tite': '77-Tit-morphgnt.txt',
  'Philémon': '78-Phm-morphgnt.txt',
  'Hébreux': '79-Heb-morphgnt.txt',
  'Jacques': '80-Jas-morphgnt.txt',
  '1 Pierre': '81-1Pe-morphgnt.txt',
  '2 Pierre': '82-2Pe-morphgnt.txt',
  '1 Jean': '83-1Jn-morphgnt.txt',
  '2 Jean': '84-2Jn-morphgnt.txt',
  '3 Jean': '85-3Jn-morphgnt.txt',
  'Jude': '86-Jud-morphgnt.txt',
  'Apocalypse': '87-Re-morphgnt.txt'
}

const bookOptions = [
  { text: 'Matthieu', value: 'Matthieu' },
  { text: 'Marc', value: 'Marc' },
  { text: 'Luc', value: 'Luc' },
  { text: 'Jean', value: 'Jean' },
  { text: 'Actes', value: 'Actes' },
  { text: 'Romains', value: 'Romains' },
  { text: '1 Corinthiens', value: '1 Corinthiens' },
  { text: '2 Corinthiens', value: '2 Corinthiens' },
  { text: 'Galates', value: 'Galates' },
  { text: 'Éphésiens', value: 'Éphésiens' },
  { text: 'Philippiens', value: 'Philippiens' },
  { text: 'Colossiens', value: 'Colossiens' },
  { text: '1 Thessaloniciens', value: '1 Thessaloniciens' },
  { text: '2 Thessaloniciens', value: '2 Thessaloniciens' },
  { text: '1 Timothée', value: '1 Timothée' },
  { text: '2 Timothée', value: '2 Timothée' },
  { text: 'Tite', value: 'Tite' },
  { text: 'Philémon', value: 'Philémon' },
  { text: 'Hébreux', value: 'Hébreux' },
  { text: 'Jacques', value: 'Jacques' },
  { text: '1 Pierre', value: '1 Pierre' },
  { text: '2 Pierre', value: '2 Pierre' },
  { text: '1 Jean', value: '1 Jean' },
  { text: '2 Jean', value: '2 Jean' },
  { text: '3 Jean', value: '3 Jean' },
  { text: 'Jude', value: 'Jude' },
  { text: 'Apocalypse', value: 'Apocalypse' }
]

async function getBookData(book = 'Jean') {
  let data = await axios.get(`https://raw.githubusercontent.com/morphgnt/sblgnt/master/${bookFiles[book]}`);
  let verseNumbers = {};
  let bookData = data.data.trim().split('\n').map(item => {
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

        parsing[code[id]] = part === '-' ? '' : part
        parsing.nature = row[1]
        return parsing
      }, {});

    let reference = row[0].match(/(\d{2})(\d{2})(\d{2})/);

    if (!verseNumbers[parseInt(reference[2])]) {
      verseNumbers[parseInt(reference[2])] = [];
    } else if (!verseNumbers[ parseInt(reference[2]) ].includes(parseInt(reference[3]))) {
      verseNumbers[ parseInt(reference[2]) ].push(parseInt(reference[3]));
    }
    

    return {
      reference,
      book: book,
      chapter: parseInt(reference[2]),
      verse: parseInt(reference[3]),
      greek: row[3],
      rawParsing: row[2],
      parsing
    };
  });

  return [ bookData, verseNumbers ]
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


// function compileNT() {

// }
  

export {
  getBookData,
  bookOptions
};