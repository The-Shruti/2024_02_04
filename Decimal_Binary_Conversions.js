
/*function getSimpleTwosComplement(number, numLength) {
    // Check if the number is positive or negative
    let sign = number >= 0 ? 0 : 1;
  
    // Convert the number to its absolute value
    number = Math.abs(number);
  
    // Convert the number to binary representation with numLength bits
    let binary = number.toString(2).padStart(numLength, "0");
  
    // Calculate the two's complement
    let twoComplement = binary
      .split("")
      .map((bit) => (bit === "0" ? "1" : "0"))
      .join("");
    twoComplement = (parseInt(twoComplement, 2) + 1)
      .toString(2)
      .padStart(numLength, "0");
  
    // Construct the result array
    let result = [sign];
  
    twoComplement = twoComplement.padStart(numLength, "0");
  
    for (let i = 0; i < twoComplement.length; i++) {
      result.push(parseInt(twoComplement[i]));
    }
  
    // Return the result
    return result;
  }
  
  // Example usage:
  let number = 1;
  let numLength = 11;
  console.log(getSimpleTwosComplement(number, numLength));  
  */ 

  /*function twosComplementToDecimal(binaryArray) {
    // Check if the array length is exactly 64 bits
    if (binaryArray.length !== 64) {
       return "Error: Array length should be exactly 64 bits.";
    }

    // Extracting the sign, exponent, and magnitude bits
    const signBit = binaryArray[0];
    const exponentBits = binaryArray.slice(1, 12);
    const magnitudeBits = binaryArray.slice(12);

    // Convert binary to decimal for exponent
    let exponent = 0;
    for (let i = 0; i < exponentBits.length; i++) {
        exponent += exponentBits[i] * Math.pow(2, exponentBits.length - 1 - i);
    }

    // Convert binary to decimal for magnitude
    let magnitude = 0;
    for (let i = 0; i < magnitudeBits.length; i++) {
        magnitude += magnitudeBits[i] * Math.pow(2, magnitudeBits.length - 1 - i);
    }

    // Apply the exponent
    let decimalValue = Math.pow(-1, signBit) * Math.pow(2, exponent - 1023) * (1 + magnitude / Math.pow(2, 52));

    return decimalValue;
}

// Example usage with a 64-bit representation
const sixtyFourBitRepresentation = [0, 1, 0, 1, 0, 1, 0, 0, 0, 0, 1, 1, 1, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1];

const result = twosComplementToDecimal(sixtyFourBitRepresentation);
console.log(result); */ 

/*Function to convert the decimal representation into binary (2's complement) and 
* return its exponent,msb bits and mantessa part as a output ,length should be 64*/ 

/*function decimalToBinary(num) {
  // Converting decimal number to binary string
  let binary = (num >>> 0).toString(2).padStart(64, '0');
  return binary;
}

function twosComplement(binary) {
  // Finding 2's complement
  let complement = binary.split('').map(bit => bit === '0' ? '1' : '0').join('');
  complement = (parseInt(complement, 2) + 1).toString(2).padStart(64, '0');
  return complement;
}

function extractParts(binary) {
  // Extracting MSB, exponent, and mantissa parts
  let msb = binary[0];
  let exponent = binary.slice(1, 12);
  let mantissa = binary.slice(12);
  return { msb, exponent, mantissa };
}

function convertDecimal(num) {
  let binary = decimalToBinary(num);
  let positiveComplement = twosComplement(binary);
  let negativeComplement = twosComplement(decimalToBinary(-num));
  
  let positiveParts = extractParts(positiveComplement);
  let negativeParts = extractParts(negativeComplement);
  
  return { positiveParts, negativeParts };
}

// Example usage:
let decimalNumber = 5;  // Example decimal number
let { positiveParts, negativeParts } = convertDecimal(decimalNumber);
console.log("Positive parts (2's complement):", positiveParts);
console.log("Negative parts (2's complement):", negativeParts); */ 


function decimalToBinary(num) { 
  let binary = (num >>> 0).toString(2).padStart(64,'0'); 
} 
function twoComplement(binary) { 
  let complement = binary.split('').map(bit => bit === '0' ? '1' : '0').join(''); 
  return (BigInt('0b' + complement) + BigInt(1)).toString(2).padStart(64,'0'); 
} 


//Testing Function  
function Test(){ 
  console.log(twoComplement(8));
}  
Test();








