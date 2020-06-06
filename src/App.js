import React, { useState, useEffect } from 'react';
import { Container } from 'semantic-ui-react';
import Word from './Word';
import { getVerse } from './dataProcessing.js';

import './App.css';


function App() {
  let [words, setWords] = useState([]);

  async function getWords() {
    let words = await getVerse();
    setWords(words);
  }
  useEffect(() => {
    if (!words.length) {
      getWords();
    }
  });


  console.log(words)
  return (
    <Container>
      <h1>Matthew 1:1</h1>
      { words.map(word => (
        <Word
          word={word}
        ></Word>
      )) }
    </Container>
  );
}

export default App;
