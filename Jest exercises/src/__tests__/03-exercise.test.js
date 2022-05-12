import { multiplyNums, sanitizeUserData } from "../utils/matchers";

/**
 * Write the assertions using the .toEqual() matcher
 */
describe("03-exercises", () => {
  test("multiplyNums multiplies each number in the array by 2", () => {
    const numbers = [1, 2, 3, 4, 5];
    const expected = [2, 4, 6, 8, 10];

    expect.assertions(1);

    /**
     * Make an assertion that the result of executing the multiplyNums function
     * with the `numbers` array as an argument, is equal to the `expected` array
     */

    // Write the assertion
    const result = multiplyNums(numbers);
    expect(result).toEqual(expected);
  });
});
