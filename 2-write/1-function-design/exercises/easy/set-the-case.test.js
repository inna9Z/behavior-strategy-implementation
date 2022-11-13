/* eslint-disable*/
// #todo

'use strict';

/**
 * sets all the characters in a string to upper or lower case
 * @param {string} [text=''] - the text to casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the text in all lower or upper case
 */

// -------- your solutions --------
const characters = (text = '', lowerCase = true) => {
  if (typeof text !== 'string') {
    throw new TypeError('text not a string');
  }
 
  if (lowerCase) {
    return text.toLowerCase();
  } else {
    return text.toUpperCase();
  }
 
  
  // if (lowerCase) {
  //   return  text.toLowerCase();
  // } else {
  //   return text.toUpperCase();
  // }
}

for (const solution of [secretSolution, characters]) {
  describe(solution.name + ': sets a text to lower or upper case', () => {
    describe("the function's default parameters", () => {
      it('second parameter defaults to true', () => {
        expect(solution('asdf')).toEqual('asdf');
      });
      it('first parameter defaults to an empty string', () => {
        expect(solution()).toEqual('');
      });
    });
    // write the tests indicated by the comments
    describe('when set to lower case', () => {
      // when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('', true)).toEqual('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('Hello', true)).toEqual('hello');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('Hello', true)).toEqual('hello');
      });
      // when the text is mixed upper and lower case
      it('when the text is mixed upper and lower case', () => {
        expect(solution('Hello', true)).toEqual('hello');
      });
      // when the text contains punctuation
      it('when the text contains punctuation', () => {
        expect(solution('He,llo')).toEqual('he,llo');
      });
      // when the text contains numbers
      it('when the text contain numbers', () => {
        expect(solution('Hello1')).toEqual(('hello1'));
      });
    });
    describe('when set to upper case', () => {
      // when the text is an empty string
      it('when the text is an empty string', () => {
        expect(solution('', false)).toEqual('');
      });
      // when the text is all upper case
      it('when the text is all upper case', () => {
        expect(solution('hello', true)).toEqual('hello');
      });
      // when the text is all lower case
      it('when the text is all lower case', () => {
        expect(solution('hello', true)).toEqual('hello');
      });
      // when the text is mixed upper and lower case
      // when the text contains punctuation
      // when the text contains numbers
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = "", b = !0) { if ("string" != typeof a) { throw new TypeError("text is not a string"); } if ("boolean" != typeof b) { throw new TypeError("lowerCase is not a boolean"); } let c = ""; return c = b ? a.toLowerCase() : a.toUpperCase(), c }
