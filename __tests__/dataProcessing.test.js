import {
  getBookData,
  getVerseLevel,
  checkParsing
} from '../dataProcessing.js';

describe('checkParsing', () => {
  const parsing = {
    cas: "",
    degré: "",    
    genre: "",    
    mode: "I",    
    nature: "V-",    
    nombre: "S",    
    personne: "3",    
    temps: "I",    
    voix: "A"
  }

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