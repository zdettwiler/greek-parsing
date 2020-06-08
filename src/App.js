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
  let [verseNumbers, setVerseNumbers] = useState({})
  

  async function getWords(newBook, newChapter, newVerse) {
    // TODO: check if we've already downloaded the book data before doing it again!

    let [words, numbers] = await getBookData(book);
    setVerseNumbers(numbers);
    setBook(newBook);
    setChapter(newBook !== book ? 1 : newChapter);
    setVerse(newChapter !== chapter ? 1 : newVerse);
    setWords(words.filter(word => word.chapter === newChapter && word.verse === newVerse));

    console.log(Object.keys(verseNumbers))
  }
  useEffect(() => {
    if (words === null) {
      getWords(book, chapter, verse);
    }
  });

  return Object.keys(verseNumbers).length && verseNumbers[chapter] && (
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
  );
}

export default App;
