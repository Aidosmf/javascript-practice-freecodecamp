// Return the remaining elements of an array after chopping off n elements 
// from the head.

// The head means the beginning of the array, or the zeroth index.


// slasher([1, 2, 3], 2) should return [3].
// slasher([1, 2, 3], 0) should return [1, 2, 3].
// slasher([1, 2, 3], 9) should return [].
// slasher([1, 2, 3], 4) should return [].
// slasher(["burgers", "fries", "shake"], 1) should return ["fries", "shake"].

function slasher(arr, howMany) {
  // it doesn't always pay to be first
  arr.splice(0, howMany);
  return arr;

  // return arr.slice(howMany);
}

slasher([1, 2, 3], 4);
