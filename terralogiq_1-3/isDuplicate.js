const isDuplicate = (array) => {
  // DULICATE ITEMS
  let duplicateItems = [];

  //   LOOPING ARRAY
  for (let i = 0; i < array.length; i++) {
    // SUB LOOPING ARRAY
    for (let j = i + 1; j < array.length; j++) {
      // CONDITIONAL STATEMENT
      if (array[i] === array[j] && !duplicateItems.includes(array[i])) {
        // IF EQUALS (DUPLICATE)
        duplicateItems.push(array[i]);
        break;
      }
    }
  }

  return `${duplicateItems.length} data duplicate`;
};

// INITIAL ARRAY
let array1 = [1, 2, 3, 2, 5, 4, 4, 5, 9, 8];
let array2 = [1, 2, 3, 2, 5, 4, 4, 5, 9, 8, 2, 2, 2, 2, 2, 2, 5, 5, 5, 5];
let array3 = ["a", "b", "c", "a", "b", "a", "a", "b", "d"];

// CALLING FUNCTION
const result = isDuplicate(array1);

console.log(result);
