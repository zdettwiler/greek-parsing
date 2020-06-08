import React, { useState, useEffect } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import Word from './Word';
import VerseSelector from './VerseSelector';
import { getBookData, bookOptions } from './dataProcessing.js';

import './App.css';

const chapterOptions = [
  { text: 1, value: 1 },
  { text: 2, value: 2 },
]

function App() {
  let [book, setBook] = useState('Jean');
  let [bookData, setBookData] = useState(null);
  let [chapter, setChapter] = useState(1);
  let [verse, setVerse] = useState(1);
  let [words, setWords] = useState(null);
  

  async function getWords(book, chapter, verse) {
    // if (bookData === null) {
    //   getWords(book, chapter, verse);
    // }words 
    let words = await getBookData(book);
    setBook(book);
    setChapter(chapter);
    setVerse(verse);
    setWords(words.filter(word => word.chapter === chapter && word.verse === verse));
  }
  useEffect(() => {
    if (words === null) {
      getWords(book, chapter, verse);
    }
  });

  return (
    <Container className='App'>
      <VerseSelector
        book={book}
        bookOptions={bookOptions}
        chapter={chapter}
        chapterOptions={chapterOptions}
        verse={verse}
        verseOptions={chapterOptions}
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
