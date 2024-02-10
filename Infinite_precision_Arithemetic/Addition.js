 /** Function to add two arrays representing numbers.
* @param {number[]} arr1 - The first array representing a number.
* @param {number[]} arr2 - The second array representing a number.
* @returns {number} - The sum of the two numbers represented by the arrays.
*/
function Addition(arr1, arr2){  
  const res = []; // Initialize result array
  let carry = 0; // Initialize carry to 0 

  //Check for invalid input
  if (arr1.length === 0 || arr2.length === 0 || arr1.some(num => num < 0) || arr2.some(num => num < 0)) {
    throw new Error('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
}

  // Find the maximum length from both arrays
  const maxLength = Math.max(arr1.length, arr2.length); 
   
  // Pad the shorter array with zeros on the left and concatenate
  const paddedArr1 = Array(maxLength - arr1.length).fill(0).concat(arr1);  
  const paddedArr2 = Array(maxLength - arr2.length).fill(0).concat(arr2);  

  // After having the same length, add both arrays and store in res, handle the carry also
  for(let i = maxLength - 1; i >= 0; i--){ 
      const sum = paddedArr1[i] + paddedArr2[i] + carry;   
      res[i] = sum % 10; 
      carry = Math.floor(sum / 10);
   } 

  // Check if carry is greater than 0, then add it to the result at the beginning
  if (carry > 0){  
      res.unshift(carry);
  }  

  // Finally, return result after joining
  return Number(res.join(''));  
}

// Testing Function
function Test() {  
  console.log(Addition([9,9],[1,1,1]));  
  console.log(Addition([5,5,5,5],[9,9,9])); 
  console.log(Addition([1,2,3],[7,8,9]));   
  console.log(Addition([1,0,0,0],[9,9,9]));  
  console.log(Addition([1,5,6],[]));    
  console.log(Addition([1,5,6],[-8,3,-2])); 
  

} 
Test();




    





