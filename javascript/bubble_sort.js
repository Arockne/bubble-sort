
//i
  //array
//o
  //same array sorted
function bubbleSort(arr, callback) {
  let swapped = true;
  while(swapped) {
    swapped = false;
    for (let i = 0; i <= arr.length; i += 1) {
      if (arr[i] > arr[i+1]) {
        [arr[i], arr[i+1]] = [arr[i+1], arr[i]]
        swapped = true;
      }
    } 
  }
  return arr;
}

if (require.main === module) {
  // add your own tests in here
  console.log("Expecting: [1, 2, 3, 4]");
  console.log("=>", bubbleSort([3, 2, 1, 4]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([1, 2, 3]));

  console.log("");

  console.log("Expecting: []");
  console.log("=>", bubbleSort([]));

  console.log("");

  console.log("Expecting: [1, 2, 3]");
  console.log("=>", bubbleSort([2, 3, 1]));

  console.log("Expecting: [1, 2, 3]");

}

module.exports = bubbleSort;

// Please add your pseudocode to this file
// And a written explanation of your solution
