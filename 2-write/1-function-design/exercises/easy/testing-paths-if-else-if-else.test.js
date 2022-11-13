// #todo
/* eslint-disable*/

'use strict';

/**
 * returns a description of how similar two values are
 *  if they are strictly equal -> 'strictly equal'
 *  if they have the same type -> 'same type'
 *  else -> 'totally different'
 * @param {any} val1
 * @param {any} val2
 * @returns {string} the values' solution
 */

// -------- your solutions --------
const mySolution = (val1, val2) => {
  if (val1 === val2) {
    return "stricly equal";
  } if (typeof val1 ==  typeof val2) {
    return "same type";
  } else {
    return "totally different";
  }
}

for (const solution of [secretSolution, mySolution]) {
  describe(solution.name + ': determines how similar two values are', () => {
    describe('when values are strictly equal', () => {
      it('two identical strings -> "strictly equal"', () => {
        expect(solution('hi', 'hi')).toEqual("strictly equal");
      });
      it('two identical numbers -> "strictly equal"', () => {
        expect(solution(1, 1.0)).toBe("strictly equal");
        // 1, 1.0
      });
      it('two identical booleans -> "strictly equal"', () => {
        expect(solution(true, true)).toBe("strictly equal");
      });
    });
    describe('when values have the same type', () => {
      it('two different strings -> "same type"', () => {
        expect('a', 'bn').toBe("same type");
      });
      it('two different numbers -> "same type"', () => {
        expect(solution(2, 3)).toBe("same type");
      });
      it('two different booleans -> "same type"', () => {
        expect(solution(true, false)).toEqual("same type");
      });
    });
    describe('when values are nothing alike', () => {
      it('values that are obviously different', () => {
        expect(solution(null, 4)).toBe("totally different");
      });
      it('values that can be confusing', () => {
        expect(solution("4", 4)).toBe("totally different");
        // "4" and 4
      });
    });
  });
}

// minified solution for testing your tests
// prettier-ignore
function secretSolution(a, b) { let c = ""; return c = a === b ? "strictly equal" : typeof a == typeof b ? "same type" : "totally different", c }
