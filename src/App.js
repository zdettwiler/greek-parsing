import React, { useState, useEffect } from 'react';
import { Container, Dropdown } from 'semantic-ui-react';
import Word from './Word';
import { getVerse } from './dataProcessing.js';

import './App.css';


function App() {
  let [words, setWords] = useState(null);

  async function getWords() {
    let words = await getVerse();
    setWords(words);
  }
  useEffect(() => {
    if (words === null) {
      getWords();
    }
  });

  return (
    <Container className='App'>
      {/* <VerseSelector></VerseSelector> */}
      <h1>Jean 1:1</h1>
      { words && words.map(word => (
        <Word
          word={word}
        ></Word>
      )) }
    </Container>
  );
}

export default App;
