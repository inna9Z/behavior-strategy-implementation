
/* eslint-disable*/
/* eslint-disable prefer-template */
// #todo

'use strict';

/**
 * reverses a string
 * @param {string} [toReverse=''] - the string to reverse
 * @returns {string} the reversed argument
 */

// -------- your solutions --------
 function mySolution(toRevers = '') {
   if (typeof toRevers !== 'string') {
     throw new TypeError();
   }
 
   return toRevers.split('').reverse().join('');
 }
 
// eslint-disable-next-line no-restricted-syntax
for (const solution of [secretSolution, mySolution]) {
  // the main test suite for the function
  // eslint-disable-next-line no-loop-func
  describe(solution.name + ': reverses a string', () => {
    it('default parameter is an empty string -> ""', () => {
      expect(solution()).toEqual('');
    });
    it('an empty string -> ""', () => {
      expect(solution('')).toEqual('');
    });
    it('a string with all capital letters', () => {
      expect(solution('ASDF')).toEqual('FDSA');
    });
    it('a string with one capital letter', () => {
    expect(solution('Hello')).toEqual('olleH');
    });
    it('should throw Error when user enter number', () => {
      expect(() => solution(1)).toThrow(Error);
    });
    it('a string with two capital letter', () => {
      expect(solution('HEllo')).toEqual('ollEH')
    });
    
    
    // write at least 5 more tests ...
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a = '') { if ("string" != typeof a) throw new TypeError("toReverse is not a string"); return a.split("").reverse().join("") }
