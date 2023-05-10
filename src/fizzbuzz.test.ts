import { fizzBuzz } from "./fizzbuzz";

describe("Given fizzBuzz class", () => {
  describe("When we get 2 and 15", () => {
    test("should return [2, 'Fizz', 4, 'Buzz', 'Fizz', 7, 8, 'Fizz', 'Buzz', 11, 'Fizz', 13, 14, 'FizzBuzz']", () => {
      const startNumber = 2;
      const finalNumber = 15;

      const expectResult = [
        2,
        "Fizz",
        4,
        "Buzz",
        "Fizz",
        7,
        8,
        "Fizz",
        "Buzz",
        11,
        "Fizz",
        13,
        14,
        "FizzBuzz",
      ];
      const fizzBuzzTest = fizzBuzz(startNumber, finalNumber);

      expect(fizzBuzzTest).toStrictEqual(expectResult);
    });
  });
});
