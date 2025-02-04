function isPangram(sentence) {
  
  const cleanedSentence = sentence.toLowerCase().replace(/[^a-z]/g, '');
  
  const uniqueLetters = new Set(cleanedSentence);
  
  
  if (uniqueLetters.size === 26) {
    return "✅ It is a pangram.";
  } else {
    return "❌ It is not a pangram.";
  }
}


const result = isPangram("The quick brown fox jumps over the lazy dog");
console.log(result);
