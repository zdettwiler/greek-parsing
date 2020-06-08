import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Word from './Word';
import VerseSelector from './VerseSelector';
import { getBookData, bookOptions } from './dataProcessing.js';

import './App.css';


function App() {
  let [book, setBook] = useState('Matthieu');
  let [chapter, setChapter] = useState(1);
  let [verse, setVerse] = useState(1);
  let [words, setWords] = useState(null);
  let [bookData, setBookData] = useState([])
  let [verseNumbers, setVerseNumbers] = useState({})
  

  async function getWords(newBook, newChapter, newVerse) {
    // get data
    if (newBook !== book || !bookData.length) {
      let data = await getBookData(newBook); // TODO return object?
      setBook(newBook);
      setBookData(data[0]); 
      setVerseNumbers(data[1]);
      setNewReference(data, 1, 1);
    } else {
      setNewReference([bookData, verseNumbers], newChapter, newVerse);
    }    
  }

  function setNewReference(data, newChapter, newVerse) {
    // set chapter
    let checkedChapter = Object.keys(data[1]).includes(String(newChapter)) ? newChapter : 1;
    setChapter(checkedChapter);

    // set verse
    let checkedVerse = data[1][checkedChapter] && data[1][checkedChapter].includes(newVerse) ? newVerse : 1;
    setVerse(checkedVerse);
    
    // set verse words
    setWords(data[0].filter(word => word.chapter === checkedChapter && word.verse === checkedVerse));
  }

  useEffect(() => {
    if (words === null) {
      getWords(book, chapter, verse);
    }
  });

  return Object.keys(verseNumbers).length && verseNumbers[chapter]
    ? (
      <Container className='App'>
        <VerseSelector
          book={book}
          bookOptions={bookOptions}
          chapter={chapter}
          chapterOptions={Object.keys(verseNumbers).map(c => ({ text: parseInt(c), value: parseInt(c) }))}
          verse={verse}
          verseOptions={verseNumbers[chapter].map(v => ({ text: v, value: v }))}
          getVerse={getWords}
        ></VerseSelector>

        <h1>{book} {chapter}:{verse}</h1>

        { words && words.map(word => (
          <Word
            word={word}
          ></Word>
        )) }
      </Container>
    )
    : null;
}

export default App;
