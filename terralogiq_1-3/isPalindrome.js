const isPalindrome = (array) => {
  // LOOPING ARRAY
  for (let i = 0; i < array.length; i++) {
    // REVERSED ITEM OF ARRAY
    let word = "";

    // LOOPING & REVERSE ITEM OF ARRAY
    for (let j = array[i].length - 1; j >= 0; j--) {
      word += array[i][j];
    }

    // COMPARISON
    if (word.toLowerCase() === array[i].toLowerCase()) {
      // IF EQUALS
      array[i] = true;
      continue;
    }
    // IF NOT EQUALS
    array[i] = false;
  }
  return array;
};

// INITIAL ARRAY
let array = ["kodok", "kadal", "radar", "lincah"];

// CALLING FUNCTION
const result = isPalindrome(array);

console.log(result);
