
function convertToBinary(num) {
  return num.toString(2);
}


function convertToDecimal(binaryStr) { 
  return parseInt(binaryStr, 2);
}

/
let decimalValue = 10;
let binaryResult = convertToBinary(decimalValue);
console.log("Decimal to Binary:");
console.log(`${decimalValue} in decimal is ${binaryResult} in binary.`);

let binaryValue = "1010";
let decimalResult = convertToDecimal(binaryValue);
console.log("Binary to Decimal:");
console.log(`${binaryValue} in binary is ${decimalResult} in decimal.`);
