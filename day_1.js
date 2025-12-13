const city = "Dhaka";
console.log(city);

const City = "Chittagong";
console.log(City);

const father = "4.55544";        
const fatherNumber = parseFloat(father);   
// toFixed use by Decimal value 1,2,3, etc, any Decimal value you want. Then use toFixed............
const fatherValue = fatherNumber.toFixed(2)
console.log(typeof(fatherValue));

const first = 12.13568;
const second = 31.22564;
const total = first + second;
// jodi toFixed use kori then number string a convert hoya jabe .........
const totalValue = total.toFixed(2);
// string ka number a convert korche.
const convertNumber = parseFloat(totalValue)
console.log(convertNumber,totalValue)


// Practice:

// 1. number jog kora.........
 const number = "20";
 const secondNumber = 10;
 const convertNumberIn = parseInt(number);
 const sum = convertNumberIn + secondNumber;
 console.log(sum);


//  2 fraction number ka Whole number to convert,
const fraction = '3.14159';
const convertWholeNumber = parseInt(fraction);
console.log(convertWholeNumber);

// 3 string ka convert number. And what is Output?
const x = "premikBoy";
const X = parseInt(x);
console.log(X)
console.log(typeof(X));

// 4. two fraction number ka jog kora fraction ar pora 2gor nita hobe
const first1 = 3.456;
const second2 = 2.789;
const sum2 = first1 + second2;
// console.log(sum2)
const splitNumber = parseFloat(sum2.toFixed(2));
console.log(splitNumber)


// 5 two string fraction jog korta hobe
const fraction1 = "56.78";
const fraction2 = "12.34";
const sumFraction = parseFloat(fraction1) + parseFloat(fraction2);
console.log(sumFraction);

// 6 two fraction number jog kore  fraction ar pora 1 gor nobo,
const firstFraction = "10.5678";
const secondFraction = "5.4321";
const totalFraction = parseFloat(firstFraction) + parseFloat(secondFraction);
const result = totalFraction.toFixed(1);
// result jodi 16.0 as a number. Because in JavaScript numbers don’t keep formatting — 16, 16.0, 16.00 are all the same value (16).
console.log(result);

// 7. fraction number fraction ar pore 3 gor nita hobe,
const fraction3 = "42.45689754"
const result1 = parseFloat(fraction3).toFixed(3);
console.log(parseFloat(result1))
