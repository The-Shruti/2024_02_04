/**
 * Perform subtraction of two numbers represented as arrays.
 * @param {number[]} arr1 - The array representing the first number.
 * @param {number[]} arr2 - The array representing the second number.
 * @returns {string} - The result of the subtraction.
 */

function subtraction(arr1, arr2) {
  // Check for invalid input
  if (
    arr1.length === 0 ||
    arr2.length === 0 ||
    arr1.some(num => num < 0) ||
    arr2.some(num => num < 0)
  ) {
    throw new Error(
      'Invalid input. Arrays must not be empty and must contain only non-negative numbers.'
    );
  }
  // Pad the smaller array with zeros to make both arrays of equal length
  const maxLength = Math.max(arr1.length, arr2.length);
  if (arr1.length < maxLength) {
    arr1.unshift(...Array(maxLength - arr1.length).fill(0));
  } else if (arr2.length < maxLength) {
    arr2.unshift(...Array(maxLength - arr2.length).fill(0));
  }

  // Compare the arrays digit by digit to determine the sign of the result
  let comparison = arr1.join('') > arr2.join('') ? 1 : -1;

  // If arr1 is smaller, swap arr1 and arr2
  if (comparison === -1) {
    [arr1, arr2] = [arr2, arr1]; // Swap arrays using destructuring assignment
  }

  // Resultant array
  let res = [];
  let m = arr1.length - 1;
  let n = arr2.length - 1;
  let borrow = 0;

  // Iterate through the arrays and subtract corresponding digits
  while (m >= 0 || n >= 0) {
    let diff = (arr1[m] || 0) - (arr2[n] || 0) - borrow;
    if (diff < 0) {
      diff += 10;
      borrow = 1;
    } else {
      borrow = 0;
    }
    res.push(diff);

    m--;
    n--;
  }

  // Convert the result array to a string
  let resultString = res.reverse().join('');

  // Add negative sign if necessary
  if (comparison === -1) {
    resultString = '-' + resultString;
  }

  // Remove leading zeros
  while (resultString.charAt(0) === '0' && resultString.length > 1) {
    resultString = resultString.substr(1);
  }

  // Return the result
  return resultString || '0';
} 

// Testing Function
function Test() {

  console.log(subtraction([4, 6, 2], [1, 7, 4, 2]));
}

Test();