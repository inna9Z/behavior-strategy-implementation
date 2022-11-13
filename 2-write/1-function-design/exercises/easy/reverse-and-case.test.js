/* eslint-disable no-restricted-syntax */
/* eslint-disable indent */
/* eslint-disable no-return-assign */
/* eslint-disable padded-blocks */
/* eslint-disable no-unreachable */
/* eslint-disable for-direction */
/* eslint-disable spellcheck/spell-checker */
/* eslint-disable prefer-template */
/* eslint-disable no-loop-func */
// #todo

/** .........
 * Reverses a string and sets all the characters to upper or lower case
 *
 * @param {string} [text=''] - the text to reverse and casify
 * @param {boolean} [lowerCase=true] - lower case or upper case
 *  true: set the string to lower case
 *  false: set the string to upper case
 * @returns {string} the reversed text in all lower or upper case
 */

// -------- your solutions --------
/**
 * @param text
 * @param lowerCase
 */
const reverse = (text = '', lowerCase = true) => {
  if (typeof text !== 'string') {
    throw new TypeError();
  }
  //  if (typeof lowerCase !== 'boolean') {
  //    throw new TypeError();
  //  }

   if (lowerCase) {
     return text.toLowerCase().split('').reverse().join('');

   // eslint-disable-next-line no-else-return
   } else {
     return text.toUpperCase().split('').reverse().join('');
   }

//   let result = '';
//   for (let i = text.length - 1; i >= 0; i--) {
//     result += text.charAt(i);

//   }
//   if (result.charAt(result.length - 1) === result.charAt(result.length - 1).toUpperCase()) {
//     return result;
//   }
// return result;

};
// eslint-disable-next-line no-restricted-syntax
// eslint-disable-next-line no-use-before-define
for (const solution of [secretSolution, reverse]) {
  describe(
    solution.name + ': reverses a string then sets to lower or upper case',
    () => {
      describe("the function's default parameters", () => {
        it('second parameter defaults to true', () => {
          expect(solution('asdf')).toEqual('fdsa');
        });
        it('first parameter defaults to an empty string', () => {
          expect(solution()).toEqual('');
        });
      });
      // write the tests indicated by the comments
      describe('when set to lower case', () => {
        // when the text is an empty string
        it('it should be un empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('HELLO', true)).toEqual('olleh');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('hello', true)).toEqual('olleh');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('Hello', true)).toEqual('olleh');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('he,llo', true)).toEqual('oll,eh');
        });
        // when the text contains numbers
        it('when the text contain numbers', () => {
          expect(solution('hello1')).toEqual('1olleh');
        });
      });
      describe('when set to upper case', () => {
        // when the text is an empty string
        it('when the text is an empty string', () => {
          expect(solution('', true)).toEqual('');
        });
        // when the text is all upper case
        it('when the text is all upper case', () => {
          expect(solution('HELLO', false)).toEqual('OLLEH');
        });
        // when the text is all lower case
        it('when the text is all lower case', () => {
          expect(solution('HELLO', false)).toEqual('OLLEH');
        });
        // when the text is mixed upper and lower case
        it('when the text is mixed upper and lower case', () => {
          expect(solution('Hello', false)).toEqual('OLLEH');
        });
        // when the text contains punctuation
        it('when the text contains punctuation', () => {
          expect(solution('he,llo', false)).toEqual('OLL,EH');
        });
        // when the text contains numbers
        it('when the text contain numbers', () => {
          expect(solution('1hello', false)).toEqual('OLLEH1');
        });
      });
    },
  );
}

// minified solution for testing your tests
// prettier-ignore
/**
 * @param a
 * @param b
 */
// eslint-disable-next-line no-sequences
function secretSolution(a = "", b = !0) { if (typeof a !== "string") { throw new TypeError("text is not a string"); } if (typeof b !== "boolean") { throw new TypeError("lowerCase is not a boolean"); } let c = ""; for (let d = a.length - 1; d >= 0; d--)c += a[d]; let d = ""; return d = b ? c.toLowerCase() : c.toUpperCase(), d; };
