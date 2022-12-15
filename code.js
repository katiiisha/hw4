// задача 1
let numbaer1 = prompt()
let number2 = prompt()
function addition(numbaer1, number2) { 
    return numbaer1 + number2
}

// задача 2 
//если дано одно слово
palindrome('strong');
palindrome('level');
function palindrome(str) {
    str = str.toLowerCase(); // не учитывается регистр
    if (str === str.split('').reverse().join('')) {
        console.log('palindrome')
    } else { 
        console.log('ne palindrome')
    }
    // return str === str.split('').reverse().join('');
}




