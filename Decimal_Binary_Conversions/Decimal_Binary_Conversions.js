/**
 * Convert a decimal number to its binary representation and return the two's complement.
 * @param {Number} number Decimal number.
 * @param {Number} numLength Length of the binary representation.
 * @returns {Number[]} Two's complement as an array of 0's and 1's.
 */
function getSimpleTwosComplement(number, numLength) {
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
  let result = [];

  twoComplement = twoComplement.padStart(numLength, "0");

  for (let i = 0; i < twoComplement.length; i++) {
      result.push(parseInt(twoComplement[i]));
  }

  // Insert the sign bit at the beginning
  result.unshift(sign);

  // Return the result
  return result;
}

// Example usage:
let number = -5;
let numLength = 8;
console.log(getSimpleTwosComplement(number, numLength));

/**
 * Convert a two's complement binary representation to a decimal number.
 * @param {Number[]} binaryArray Array of 0's and 1's representing the two's complement binary.
 * @returns {Number} Decimal representation of the two's complement binary.
 */
function getSimpleDecimalFromTwosComplement(binaryArray) {
  // Check if the number is negative by checking the sign bit
  if (binaryArray[0] === 1) {
      // If negative, perform two's complement
      for (let i = 1; i < binaryArray.length; i++) {
          binaryArray[i] = binaryArray[i] === 0 ? 1 : 0;
      }
      // Convert the binary array back to decimal
      let decimalValue = 0;
      for (let i = binaryArray.length - 1; i >= 0; i--) {
          decimalValue += binaryArray[i] * Math.pow(2, binaryArray.length - 1 - i);
      }
      // Make the result negative
      return -decimalValue;
  } else {
      // If positive, convert the binary array back to decimal directly
      let decimalValue = 0;
      for (let i = binaryArray.length - 1; i >= 0; i--) {
          decimalValue += binaryArray[i] * Math.pow(2, binaryArray.length - 1 - i);
      }
      return decimalValue;
  }
}

// Example usage:
let binaryArray = [0,0,1,1,1,1,1]; // Example two's complement binary array
let decimalValue = getSimpleDecimalFromTwosComplement(binaryArray);
console.log(decimalValue); 


/**
 * Convert a decimal number to its JavaScript representation.
 * @param {Number} inputDecimalNumber Decimal number to convert.
 * @returns {Number[]} Array representing the JavaScript representation of the decimal number.
 */
function getJSNumberRepresentation(inputDecimalNumber) {
  // Check if the number is negative and store the sign bit
  let signBit = inputDecimalNumber < 0 ? 1 : 0;

  // Take the absolute value of the input number
  let absoluteNumber = Math.abs(inputDecimalNumber);

  // Convert the absolute value to its binary representation
  let binaryString = (absoluteNumber >>> 0).toString(2);

  // Split the binary string into integer and fractional parts
  let integerPart = Math.floor(absoluteNumber);
  let fractionalPart = absoluteNumber - integerPart;

  // Convert the integer part to binary
  let integerBinary = (integerPart >>> 0).toString(2);

  // Convert the fractional part to binary
  let fractionalBinary = '';
  let maxIterations = 52 - integerBinary.length; // Max iterations to ensure a 52-bit mantissa
  for (let i = 0; i < maxIterations; i++) {
      fractionalPart *= 2;
      fractionalBinary += Math.floor(fractionalPart);
      if (fractionalPart >= 1) {
          fractionalPart -= 1;
      }
  }

  // Combine the integer and fractional parts
  let combinedBinary = integerBinary + fractionalBinary;

  // Calculate the exponent
  let exponent = integerBinary.length - 1;

  // Construct the JavaScript representation array
  let jsRepresentation = [signBit];
  let exponentBits = (exponent + 1023).toString(2).padStart(11, '0');
  jsRepresentation.push(...exponentBits.split('').map(Number)); // Exponent bits
  jsRepresentation.push(...combinedBinary.slice(1).split('').map(Number)); // Mantissa bits

  // Pad with zeros if needed to ensure a 64-bit representation
  while (jsRepresentation.length < 64) {
      jsRepresentation.push(0);
  }

  return jsRepresentation;
}

// Example usage:
let decimalNumber = -4.69;
let jsRepresentation = getJSNumberRepresentation(decimalNumber);
console.log(jsRepresentation); 

/**
 * Convert JavaScript representation of a number to its decimal equivalent.
 * @param {Number[]} jsRepresentations Array representing the JavaScript representation of the number.
 * @returns {Number} Decimal equivalent of the JavaScript representation.
 */
function getDecimalFromJSRepresentation(jsRepresentation) {
  // Extract the sign bit, exponent, and mantissa from the array
  let signBit = jsRepresentation[0];
  let exponentBits = jsRepresentation.slice(1, 12);
  let mantissaBits = jsRepresentation.slice(12);

  // Convert binary exponent to decimal
  let exponent = parseInt(exponentBits.join(''), 2) - 1023;

  // Convert mantissa to decimal
  let mantissa = 1;
  for (let i = 0; i < mantissaBits.length; i++) {
      mantissa += mantissaBits[i] * Math.pow(2, -i - 1);
  }

  // Combine sign, exponent, and mantissa to get the decimal value
  let decimalValues = signBit === 0 ? mantissa * Math.pow(2, exponent) : -mantissa * Math.pow(2, exponent);

  return decimalValues;
}

// Example usage:
let jsRepresentations = [1, 0, 1, 0, 1, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 0, 1, 0, 0, 1, 1, 0, 1, 1, 0, 0, 1, 0, 1, 1, 0, 1, 0, 1, 0, 1, 0, 1, 0, 1, 1, 0, 1, 1, 1, 0, 1, 0, 1, 1, 0, 1, 0, 1, 1, 1, 0, 1, 0, 1, 0, 1];
let decimalValues = getDecimalFromJSRepresentation(jsRepresentation);
console.log(decimalValue); 











