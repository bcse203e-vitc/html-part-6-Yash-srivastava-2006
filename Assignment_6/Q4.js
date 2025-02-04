function reverseNumber(num) {
 
    let numStr = num.toString();
    let reversedStr = numStr.split('').reverse().join('');
    let reversedNum = parseInt(reversedStr, 10);
    let isPalindromic = (num === reversedNum);
    
    return {
        reversedNumber: reversedNum,
        isPalindromic: isPalindromic
    };
}
