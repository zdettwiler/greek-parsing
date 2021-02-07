import {
  getBookData,
  getDuffChapter,
  checkParsing
} from '../dataProcessing.js';

import axios from 'axios';
jest.mock('axios');


describe('checkParsing', () => {
  test('is a function', () => {
    expect(checkParsing).toBeInstanceOf(Function);
  });

  test('returns false if empty parsing', () => {
    expect(checkParsing({}, { a: 1, b: 2 })).toBe(false);
  });

  test('returns true if check is empty', () => {
    expect(checkParsing({ a: 1, b: 2 }, {})).toBe(true);
  });

  test('returns false if not same parsing value', () => {
    expect(checkParsing({ a: 1, b: 2 }, { a: 1, b: 1 })).toBe(false);
  });

  test('returns false if not same parsing parse', () => {
    expect(checkParsing({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  test('returns false if not same parsing parse', () => {
    expect(checkParsing({ a: 1 }, { a: 1, b: 2 })).toBe(false);
  });

  test('checks for several options', () => {
    expect(checkParsing({ a: 1, b: 2 }, { a: 1, b: [1, 2] })).toBe(true);
    expect(checkParsing({ a: 1, b: 1 }, { a: 1, b: [1, 2] })).toBe(true);
    expect(checkParsing({ a: 1, b: 1 }, { a: 1, b: [2, 3] })).toBe(false);
  });
});

describe('getBookData', () => {
  axios.get.mockResolvedValue({ data: `040101 P- -------- greek Ἐν ἐν ἐν
040101 N- ----DSF- ἀρχῇ ἀρχῇ ἀρχῇ ἀρχή
040202 C- -------- Καὶ Καὶ καί καί` });


  test('is a function', () => {
    expect(getBookData).toBeInstanceOf(Function);
  });

  test('gets data for John by default', async () => {
    await getBookData();
    expect(axios.get).toHaveBeenCalledWith('https://raw.githubusercontent.com/morphgnt/sblgnt/master/64-Jn-morphgnt.txt');
  });

  test('gets provided book data', async () => {
    await getBookData('Matthieu');
    expect(axios.get).toHaveBeenCalledWith('https://raw.githubusercontent.com/morphgnt/sblgnt/master/61-Mt-morphgnt.txt');
  });

  test('returns correct hierarchy', async () => {
    let bookData = await getBookData()
    expect(bookData).toMatchObject({
      1: {
        1: { words: expect.any(Array) }
      },
      2: {
        2: { words: expect.any(Array) }
      }
    });
  });

  test('returns all word objects', async () => {
    let bookData = await getBookData()
    expect(bookData[1][1].words.length).toBe(2);
    expect(bookData[2][2].words.length).toBe(1);
  });

  test('returns correct word objects', async () => {
    let bookData = await getBookData()
    expect(bookData[1][1].words[0]).toMatchObject({
      book: 'Jean',
      chapter: 1,
      verse: 1,
      greek: 'greek',
      rawParsing: '--------',
      parsing: expect.any(Object)
    });
    expect(bookData[2][2].words[0]).toMatchObject({
      book: 'Jean',
      chapter: 2,
      verse: 2,
      greek: 'Καὶ',
      rawParsing: '--------',
      parsing: expect.any(Object)
    });
  });

  test('adds Duff chapter number for each verse', async () => {
    let bookData = await getBookData();
    expect(bookData[1][1].duff).toEqual(expect.any(Number));
    expect(bookData[2][2].duff).toEqual(expect.any(Number));
  });

  // test('calls getDuffChapter', async () => {
  //   let bookData = await getBookData();
  //   expect(bookData[1][1].duff).toEqual(expect.any(Number));
  //   expect(bookData[2][2].duff).toEqual(expect.any(Number));
  // });
});
