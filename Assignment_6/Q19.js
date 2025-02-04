
function findLongestWord(sentence) {
 
  let words = sentence.split(" ");
  
 
  let longestWord = "";
  for (let word of words) {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  }
  
  return longestWord;
}


let sentence = "My name is yash srivastava";
let longestWord = findLongestWord(sentence);
console.log("Longest word in the sentence:", longestWord); 
