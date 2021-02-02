import React from 'react';
import { Dropdown } from 'semantic-ui-react';
import { useHistory } from "react-router-dom";

import './VerseSelector.css';


function VerseSelector({ getVerse, book, bookOptions, chapter, chapterOptions, verse, verseOptions }) {
  let history = useHistory();

  return (
    <div className='VerseSelector'>
      <Dropdown
        className='book'
        selection
        value={book}
        options={bookOptions}
        onChange={(e, {value}) => {
          history.push(`/${value}/${chapter}/${verse}`);
          getVerse(value, chapter, verse);
        }}
      ></Dropdown>
      {' '}
      <Dropdown
        className='chapter'
        selection
        compact
        value={chapter}
        options={chapterOptions}
        onChange={(e, {value}) => {
          history.push(`/${book}/${value}/${verse}`);
          getVerse(book, value, verse);
        }}
      ></Dropdown>
      {':'}
      <Dropdown
        className='verse'
        selection
        compact
        value={verse}
        options={verseOptions}
        onChange={(e, {value}) => {
          history.push(`/${book}/${chapter}/${value}`);
          getVerse(book, chapter, value);
        }}
      ></Dropdown>
    </div>
  );
}

export default VerseSelector;
