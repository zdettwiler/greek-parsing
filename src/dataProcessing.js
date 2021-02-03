import { findAllByTestId } from '@testing-library/react';
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
          'personne',
          'temps',
          'voix',
          'mode',
          'cas',
          'nombre',
          'genre',
          'degré'
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

function getVerseLevel(verse) {
  if (!verse) return;

  let chapter = 0;

  for (let word of verse) {
    console.log(word.parsing)

    // NOUN: Chap. 2
    if (word.parsing.nature === 'N-') {
      chapter = Math.max(chapter, 2);
    }

    // ADJECTIVE: Chap. 5
    else if (word.parsing.nature === 'A-') {
      chapter = Math.max(chapter, 5);
    }

    // VERB
    else if (word.parsing.nature === 'V-') {

      // PRESENT ACTIVE INDICATIVE: Chap. 1
      if (checkParsing(word.parsing, { nature: 'V-', voix: 'A', mode: 'I', temps: 'P' })) {
        chapter = Math.max(chapter, 1);
      }

      // FUTURE/IMPERFECT/AORIST ACTIVE INDICATIVE: Chap. 6
      else if (checkParsing(word.parsing, { nature: 'V-', voix: 'A', mode: 'I', temps: ['F', 'I', 'A'] })) {
        chapter = Math.max(chapter, 6);
      }
    
      // PRESENT/FUTURE/IMPERFECT/AORIST ACTIVE IMPERATIVE/INFINITIVE: Chap. 7
      else if (checkParsing(word.parsing, { nature: 'V-', voix: 'A', mode: ['I', 'D'], temps: ['P', 'F', 'I', 'A'] })) {
        chapter = Math.max(chapter, 7);
      }
    
      // PRESENT/AORIST ACTIVE PARTICIPLE: Chap. 7
      else if (checkParsing(word.parsing, { nature: 'V-', voix: 'A', mode: 'P', temps: ['P', 'A'] })) {
        chapter = Math.max(chapter, 7);
      }
    
      // 2ND AORIST: Chap. 11
      
    
      // FUTURE/IMPERFECT ACTIVE PARTICIPLE: Chap. 14
      else if (checkParsing(word.parsing, { nature: 'V-', voix: 'A', mode: 'P', temps: ['F', 'I'] })) {
        chapter = Math.max(chapter, 14);
      }
    
      // PRESENT/FUTURE/IMPERFECT/AORIST PASSIVE INDICATIVE/IMPERATIVE/INFINITIVE/PARTICIPLE: Chap. 15
      else if (checkParsing(word.parsing, { nature: 'V-', voix: 'P', mode: ['I', 'D', 'N', 'P'], temps: ['P', 'F', 'I', 'A'] })) {
        chapter = Math.max(chapter, 15);
      }
    
      // PERFECT: Chap. 16
      else if (checkParsing(word.parsing, { nature: 'V-', temps: ['X', 'Y'] })) {
        chapter = Math.max(chapter, 16);
      }

      // SUBJUNCTIVE: Chap. 17
      else if (checkParsing(word.parsing, { nature: 'V-', mode: 'S' })) {
        chapter = Math.max(chapter, 17);
      }
    }
  }

  console.log(chapter)
}

function checkParsing(parsing, checkParsing) {
  for (let parse of Object.keys(checkParsing)) {
    let check = Array.isArray(checkParsing[parse])
      ? checkParsing[parse]
      : [checkParsing[parse]];

    if (!parsing[parse] || !check.includes(parsing[parse])) return false;
  }

  return true;
}

export {
  bookOptions,
  getBookData,
  getVerseLevel,
  checkParsing
};