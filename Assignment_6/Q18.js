
function findFirstNonRepeating(str) {

  let charCount = {};

  for (let char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let char of str) {
    if (charCount[char] === 1) {
      return char;
    }
  }
  
  return null; 
}

let inputString = "programming";
let result = findFirstNonRepeating(inputString);
console.log("First non-repeating character:", result); 
