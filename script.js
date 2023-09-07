//your JS code here. If required.
function secondHighest(arr) {
  if (arr.length <= 1) {
    return -Infinity;
  }
  
  // Remove duplicates from the array
  const uniqueArr = [...new Set(arr)];
  
  // Sort the array in descending order
  uniqueArr.sort((a, b) => b - a);
  
  if (uniqueArr.length <= 1) {
    return -Infinity;
  }
  
  return uniqueArr[1];
}

// Test the function with an example array
const arr = [5, 10, 3, 8, 5, 2];
const secondHighestElement = secondHighest(arr);
console.log(`The second-highest element is: ${secondHighestElement}`);
			