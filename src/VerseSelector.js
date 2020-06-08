import React from 'react';
import { Dropdown } from 'semantic-ui-react';

import './VerseSelector.css';


function VerseSelector({ getVerse, book, bookOptions, chapter, chapterOptions, verse, verseOptions }) {
  
  return (
    <div className='VerseSelector'>
      <Dropdown
        className='book'
        selection
        compact
        value={book}
        options={bookOptions}
        onChange={(e, {value}) => getVerse(value, chapter, verse)}
      ></Dropdown>
      {' '}
      <Dropdown
        className='chapter'
        selection
        compact
        value={chapter}
        options={chapterOptions}
        onChange={(e, {value}) => getVerse(book, value, verse)}
      ></Dropdown>
      {':'}
      <Dropdown
        className='verse'
        selection
        compact
        value={verse}
        options={verseOptions}
        onChange={(e, {value}) => getVerse(book, chapter, value)}
      ></Dropdown>
    </div>
  );
}

export default VerseSelector;
