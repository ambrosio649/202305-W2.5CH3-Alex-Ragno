export const fizzBuzz = (startNumber: number, finalNumber: number) => {
  const list: (string | number)[] = [];
  for (let index = startNumber; index < finalNumber + 1; index++) {
    if (index % 5 === 0 && index % 3 === 0) {
      list.push("FizzBuzz");
    } else if (index % 3 === 0) {
      list.push("Fizz");
    } else if (index % 5 === 0) {
      list.push("Buzz");
    } else if (index % 5 !== 0 && index % 3 !== 0) {
      list.push(index);
    }
  }

  return list;
};
