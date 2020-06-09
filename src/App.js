import React, { useState, useEffect } from 'react';
import { Container, Loader } from 'semantic-ui-react';
import { useParams } from "react-router-dom";
import Word from './Word';
import VerseSelector from './VerseSelector';
import { getBookData, bookOptions } from './dataProcessing.js';

import './App.css';


function App() {
  let params = useParams();
  console.log(params) 
  let [isLoading, setIsLoading] = useState(true);
  let [book, setBook] = useState(params.book);
  let [chapter, setChapter] = useState(parseInt(params.chapter));
  let [verse, setVerse] = useState(parseInt(params.verse));
  let [words, setWords] = useState(null);
  let [bookData, setBookData] = useState([])
  let [verseNumbers, setVerseNumbers] = useState({})
  

  async function getWords(newBook, newChapter, newVerse) {
    console.log('getting new Words', newBook, newChapter, newVerse)
    setIsLoading(true);
    // get data
    if (newBook !== book || !bookData.length) {
      let data = await getBookData(newBook); // TODO return object?
      console.log('data', data);
      setBook(newBook);
      setBookData(data[0]); 
      setVerseNumbers(data[1]);
      setNewReference(data, newChapter, newVerse);
    } else {
      setNewReference([bookData, verseNumbers], newChapter, newVerse);
    }    
  }

  function setNewReference(data, newChapter, newVerse) {
    console.log('setNewRefermence', data[1], newChapter, newVerse)
    // set chapter
    let checkedChapter = Object.keys(data[1]).includes(String(newChapter)) ? newChapter : 1;
    console.log('checkedChapter', checkedChapter)
    setChapter(checkedChapter);

    // set verse
    let checkedVerse = data[1][checkedChapter] && data[1][checkedChapter].includes(newVerse) ? newVerse : 1;
    setVerse(checkedVerse);
    
    // set verse words
    setWords(data[0].filter(word => word.chapter === checkedChapter && word.verse === checkedVerse));

    setIsLoading(false);
  }

  useEffect(() => {
    if (words === null) {
      getWords(book, chapter, verse);
    }
  });

  return Object.keys(verseNumbers).length && verseNumbers[chapter] && !isLoading
    ? (
      <div className='App'>
        <VerseSelector
          book={book}
          bookOptions={bookOptions}
          chapter={chapter}
          chapterOptions={Object.keys(verseNumbers).map(c => ({ text: parseInt(c), value: parseInt(c) }))}
          verse={verse}
          verseOptions={verseNumbers[chapter].map(v => ({ text: v, value: v }))}
          getVerse={getWords}
        ></VerseSelector>
        
        <Container>
          <h1>{book} {chapter}:{verse}</h1>

          <div className='Words'>
            { words && words.map(word => (
              <Word
                word={word}
              ></Word>
            )) }
          </div>
        </Container>
      </div>
    )
    : <Loader active size='large'>Chargement</Loader>;
}

export default App;
