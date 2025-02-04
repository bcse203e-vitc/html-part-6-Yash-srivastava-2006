function countVowelsAndConsonants(str) {
    
    str = str.toLowerCase();
    const vowels = 'aeiou';
    let vowelCount = 0;
    let consonantCount = 0;
    
    for (let char of str) {
        if (vowels.includes(char)) {
            vowelCount++;
        } else if (char >= 'a' && char <= 'z') {
            consonantCount++;
        }
    }

    return {
        vowels: vowelCount,
        consonants: consonantCount
    };
}
