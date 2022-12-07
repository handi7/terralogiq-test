const fizzBuzz = (array) => {
  // LOOPING ARRAY
  for (let i = 0; i < array.length; i++) {
    // CONDITIONAL STATEMENT
    if (array[i] % 3 === 0) {
      // IF ITEM OF ARRAY CAN BE DEVIDED BY 3
      array[i] = "fizz";
      continue;
    }

    if (array[i] % 5 === 0) array[i] = "buzz"; // IF ITEM OF ARRAY CAN BE DEVIDED BY 5
  }

  return array;
};

// INITIAL ARRAY
let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// CALLING FUNCTION
const result = fizzBuzz(array);

console.log(result);
