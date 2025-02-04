function isEvenOrOdd(number) {
    if (number % 2 === 0) {
        return 'Even';
    } else {
        return 'Odd';
    }
}


console.log(isEvenOrOdd(4)); 
console.log(isEvenOrOdd(7));



function sepEvenAndOdd(numbers) {
    let evenNumbers = [];
    let oddNumbers = [];

    numbers.forEach(number => {
        if (number % 2 === 0) {
            evenNumbers.push(number);
        } else {
            oddNumbers.push(number);
        }
    });

    return {
        even: evenNumbers,
        odd: oddNumbers
    };
}

const numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sepNumbers = sepEvenAndOdd(numbersArray);
console.log(separatedNumbers);
