
function countCharacter(str) {

  let charFrequency = {};
  
  for (let char of str) {

    charFrequency[char] = (charFrequency[char] || 0) + 1;
  }
  
  return charFrequency;
}


let inputStr = "srivastava";
let occurrences = countCharacter(inputStr);
console.log("Character occurrences:", occurrences); 
