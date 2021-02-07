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
  let [duff, setDuff] = useState(20);
  let [bookData, setBookData] = useState([])
  

  async function getWords(newBook, newChapter, newVerse, duffChapter = 20) {
    // console.log('getting new Words', newBook, newChapter, newVerse)
    setIsLoading(true);
    // get data
    if (newBook !== book || !bookData.length) {
      let data = await getBookData(newBook); 
      console.log(duffChapter, filterByChapter(data, duffChapter))
      setBook(newBook);
      setDuff(duffChapter)
      setBookData(filterByChapter(data, duffChapter)); 
      setNewReference(data, newBook, newChapter, newVerse);

    } else {
      setNewReference(filterByChapter(bookData, duffChapter), newBook, newChapter, newVerse);
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

  function filterByChapter(bookData, duffChapter) {
    let filteredData = {};
    for (let chapter of Object.keys(bookData)) {
      for (let verse of Object.keys(bookData[chapter])) {

        if (bookData[chapter][verse].duff <= duffChapter) {
          if (filteredData[chapter]) {
            filteredData[chapter][verse] = bookData[chapter][verse]
          } else {
            filteredData[chapter] = {
              [verse]: bookData[chapter][verse]
            }
          }
        }

      }
    }
    return filteredData
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
          Difficulté max.: <Dropdown
            // className='book'
            selection
            value={duff}
            options={[...Array(20).keys()].map((_, i) => ({ text: `Duff Chapitre ${i+1}`, value: i+1 }))}
            onChange={(e, {value}) => {
              console.log('change duff chapter')
              getWords(book, chapter, verse, value);
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
          <h1>{book} {chapter}:{verse}<span style={{fontSize: 15+'px'}}>Duff Chapitre {bookData[chapter][verse].duff}</span></h1>

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
