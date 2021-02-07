import React, { useState, useEffect } from 'react';
import { Container, Loader, Dropdown } from 'semantic-ui-react';
import {
  useParams,
  useHistory
} from "react-router-dom";
import Word from './Word';
import VerseSelector from './VerseSelector';
import { bookOptions, getBookData } from './dataProcessing.js';

import './App.css';


function App() {
  let params = useParams();
  let history = useHistory();

  let [isLoading, setIsLoading] = useState(false);
  let [book, setBook] = useState(params.book || 'Jean');
  let [chapter, setChapter] = useState(parseInt(params.chapter) || 1);
  let [verse, setVerse] = useState(parseInt(params.verse) || 1);
  let [words, setWords] = useState(null);
  let [bookData, setBookData] = useState([])
  

  async function getWords(newBook, newChapter, newVerse) {
    // console.log('getting new Words', newBook, newChapter, newVerse)
    setIsLoading(true);
    // get data
    if (newBook !== book || !bookData.length) {
      let data = await getBookData(newBook); // TODO return object?
      setBook(newBook);
      setBookData(data); 
      setNewReference(data, newBook, newChapter, newVerse);

    } else {
      setNewReference(bookData, newBook, newChapter, newVerse);
    }
  }

  function setNewReference(data, newBook, newChapter, newVerse) {
    // set chapter number
    let checkedChapter = data[newChapter] ? newChapter : 1;
    setChapter(checkedChapter);

    // set verse number
    let checkedVerse = data[checkedChapter][newVerse] ? newVerse : 1;
    setVerse(checkedVerse);
    
    // set verse words
    setWords(data[checkedChapter][checkedVerse].words);
    history.push(`/${newBook}/${checkedChapter}/${checkedVerse}`);
    setIsLoading(false);
  }

  useEffect(() => {
    if (words === null && !isLoading) {
      getWords(book, chapter, verse);
    }
  });


  return Object.keys(bookData).length && bookData[chapter] && !isLoading
    ? (
      <div className='App'>
        <div className='DifficultySelector'>
          <Dropdown
            // className='book'
            selection
            value={bookData[chapter][verse].duff}
            options={[...Array(20).keys()].map((_, i) => ({ text: `Duff Chapitre ${i+1}`, value: i+1 }))}
            onChange={(e, {value}) => {
              //history.push(`/${value}/${chapter}/${verse}`);
              //getVerse(value, chapter, verse);
            }}
          ></Dropdown>
        </div>
        <VerseSelector
          book={book}
          bookOptions={bookOptions}
          chapter={chapter}
          chapterOptions={Object.keys(bookData).map(c => ({ text: c, value: parseInt(c) }))}
          verse={verse}
          verseOptions={Object.keys(bookData[chapter]).map(v => ({ text: v, value: parseInt(v) }))}
          getVerse={getWords}
        ></VerseSelector>
        
        <Container>
          <h1>{book} {chapter}:{verse}</h1>

          <div className='Words'>
            { words && words.map((word, id) => (
              <Word
                word={word}
                key={`${word}-${id}`}
              ></Word>
            )) }
          </div>
        </Container>
      </div>
    )
    : <Loader active size='large'>Chargement</Loader>;
}

export default App;
