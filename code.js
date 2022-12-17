// задача 1
const num1 = +prompt();
const num2 = +prompt();

function getSumm(num1, num2) {
    return num1+num2
}
alert (getSumm(num1,num2))


// задача 2 
//если дано одно слово
//вариант 1 
palindrome('strong');
palindrome('level');
function palindrome(str) {
    str = str.toLowerCase(); // не учитывается регистр
    return (str === str.split('').reverse().join('')) ? console.log("палиндом") : console.log("не палиндром ")
}
// вариант 2 
function checkPoly(str) {
    let reverStr = ''
    for (let i = str.length - 1; i >= 0; i--){
        reverStr += str[i]
    }
    return reverStr.toLowerCase() === str.toLowerCase()   
}
//вариант 3
const checkPoly = (str) => str.toLowerCase() === str.split('').reverse().join('')
console.log(checkPoly('level'))



