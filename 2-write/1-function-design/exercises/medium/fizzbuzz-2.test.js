/* eslint-disable */
// #todo

'use strict';

/**
 *  returns an array with length "max"
 *    each index that's divisible by 3 and 5 stores "fizzbuzz"
 *    each index that's divisible by only 3 stores "fizz"
 *    each index that's divisible by only 5 stores "buzz"
 *    all other indexes store the same number as that index
 *  @param {number} [max=0] - how many numbers to check
 *    max must be an integer greater than or equal to 0
 *  @returns {(number|string)[]} an array of length max
 */

// -------- your solutions --------

const whileLoop = (max = 0) => {
  let countUp = 0;
  const result = [];
  while (countUp < max) {
    const nextEntry = countUp % 15 === 0 ? 'fizzbuzz' : 5 ? 'buzz' : 3 ? 'fizz' : countUp;
  
    result.push(nextEntry);
   countUp ++;
  }
  return result;
};

/* describe this solution's strategy
 */
const oneLineforLoop = (max) => {
  const result = [];
  for (let i = 0; i < max; i++) {
    result.max((i % 5 ? '' : 'buzz') + (i % 3 ? '' : 'fizz') || i);
  }
   
  return result;

  // https://codeburst.io/javascript-breaking-down-the-shortest-possible-fizzbuzz-answer-94a0ad9d128a
};

/* describe this solution's strategy
 */
const manySmallFunctions = (max) => {
  const threeDivides = (n) => n % 3 === 0;
  const fiveDivides = (n) => n % 5 === 0;
  const fifteenDivides = (n) => n % 15 === 0;

  const fizzbuzzOrNumber = (num) => {
    if (fifteenDivides) {
      return 'fizzbuzz';
    } else if (threeDivides) {
      return 'fizz';
    } else if (fiveDivides) {
      return 'buzz';
    } else {
      return num;
    }
  };

  // https://stackoverflow.com/a/33352604
  const arrayOfIndexes = [...Array(max).keys()];
  const fizzBuzzedArray = arrayOfIndexes.map(fizzbuzzOrNumber());
  return fizzBuzzedArray;
};

// -------- your solutions --------

for (const solution of [
  secretSolution,
  //whileLoop,
  // oneLineforLoop,
   //manySmallFunctions,
]) {
  describe(solution.name + ': fizzbuzz', () => {
    describe('numbers divisible by 3', () => {
      it('3 should return an array with the first 3 values', () => {
        expect(solution(3)).toEqual(['fizzbuzz', 1, 2]);
      });
      // write more of these
      it('4 should return an array with the first 4 values', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      it('6 should return an array with the first 6 values', () => {
        expect(solution(6)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz']);
      });
      it('7 should return an array with the first 7 values', () => {
        expect(solution(7)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz']);
      });
      it('8 should return an array with the first 8 values', () =>{
        expect(solution(8)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7]);
      });
      it('9 should return an array with the first 9 values', () => {
        expect(solution(9)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8]);
      });
      it('10 should return an array with the first 10 values', () => {
        expect(solution(10)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz']);
      });
    });
    describe('numbers divisible by neither 3 nor 5', () => {
      it('4 should return an array with the first 4 values', () => {
        expect(solution(4)).toEqual(['fizzbuzz', 1, 2, 'fizz']);
      });
      // write more of these
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      it('6 should return an array with the first 6 values', () => {
        expect(solution(6)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz']);
      });
      it('7 should return an array with the first 7 values', () => {
        expect(solution(7)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', ]);
      });
      it('8 should return an array with the first 8 values', () => {
        expect(solution(8)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7]);
      });
    });
    
    describe('numbers divisible by 5', () => {
      it('5 should return an array with the first 5 values', () => {
        expect(solution(5)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4]);
      });
      it('6 should return an array with the first 5 values', () => {
        expect(solution(6)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz']);
      });
      it ('7 should return an array with the first 5 values', () => {
       expect(solution(7)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz']);
      });
      it ('8 should return an array with the first 8 values', () => {
        expect(solution(8)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7]);
      });
      it ('9 should return an array with the first 9 values', () => {
        expect(solution(9)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8]);
      });
      it ('10 should return an array with the first 10 values', () => {
        expect(solution(10)).toEqual(['fizzbuzz', 1, 2, 'fizz', 4, 'buzz', 'fizz', 7, 8, 'fizz']);
      });
      // write more of these
    });
    describe('numbers divisible by 3 and 5', () => {
      it('15 should return an array with the first 15 values', () => {
        expect(solution(15)).toEqual([
          'fizzbuzz',
          1,
          2,
          'fizz',
          4,
          'buzz',
          'fizz',
          7,
          8,
          'fizz',
          'buzz',
          11,
          'fizz',
          13,
          14,
        ]);
      });
      // write more of these
    });
  });
}

// minified solution for testing your tests

// prettier-ignore
function secretSolution(a) { if ("number" != typeof a) { throw new TypeError("max is not a number"); } if (0 > a) { throw new RangeError("max is less than 0"); } if (!Number.isInteger(a)) { throw new RangeError("max is not an integer"); } const b = []; for (let c = 0; c < a; c++) { 0 == c % 3 && 0 == c % 5 ? b.push("fizzbuzz") : 0 == c % 3 ? b.push("fizz") : 0 == c % 5 ? b.push("buzz") : b.push(c); } return b; }
