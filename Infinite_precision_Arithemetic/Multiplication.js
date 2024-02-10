/**
 * Perform multiplication of two numbers represented as arrays.
 * @param {number[]} arr1 - The array representing the first number.
 * @param {number[]} arr2 - The array representing the second number.
 * @returns {string} - The result of the multiplication.
 */
function multiplication(arr1, arr2) {
    const result = Array(arr1.length + arr2.length).fill(0); // Initialize result array with zeros 

    //Check for invalid input
    if (arr1.length === 0 || arr2.length === 0 || arr1.some(num => num < 0) || arr2.some(num => num < 0)) {
        throw new Error('Invalid input. Arrays must not be empty and must contain only non-negative numbers.');
    }
    
    for (let i = arr1.length - 1; i >= 0; i--) {
        for (let j = arr2.length - 1; j >= 0; j--) {
            const product = arr1[i] * arr2[j]; // Calculate product of current digits
            
            // Distribute the product over result array
            const sum = product + result[i + j + 1];
            result[i + j] += Math.floor(sum / 10);
            result[i + j + 1] = sum % 10;
        }
    }
    
    // Remove leading zeros
    while (result[0] === 0 && result.length > 1) {     
        result.shift();
    }

    // Convert result array to string
    let resultString = result.join('');

    // If the result is an empty string (i.e., all zeros), set it to '0'
    if (resultString === '') {
        resultString = '0';
    }
    
    return resultString;
}

// Testing Function
function Test() {  
    console.log(multiplication([3],[1,2]));  
    console.log(multiplication([2,5,9],[1,9,4,0])); 
    console.log(multiplication([0,0,0],[0,0]));   
    console.log(multiplication([7,5,9],[1,8,5]));  
    console.log(multiplication([3,7,5,9,2,1,6,2,3],[6,8,0,2,5,3]))  
    console.log(multiplication([56,891],[761,34,8]));
    console.log(multiplication([-3,7,1],[]));
} 
Test();


