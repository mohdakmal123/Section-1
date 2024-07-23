// WAP to print all prime numbers in a range
function isPrime(num) {
  if (num <= 1) return false;
  if (num <= 3) return true;

  // Check for divisibility by 2 and 3
  if (num % 2 === 0 || num % 3 === 0) return false;

  // Check for divisibility by numbers greater than 3
  for (let i = 5; i * i <= num; i += 6) {
    if (num % i === 0 || num % (i + 2) === 0) return false;
  }

  return true;
}

function printPrimesInRange(start, end) {
  for (let i = start; i <= end; i++) {
    if (isPrime(i)) console.log(i);
  }
}

// Example usage
printPrimesInRange(10, 30);


// WAP to print all perfect squares in a range
function printPerfectSquaresInRange(start, end) {
  for (let i = Math.ceil(Math.sqrt(start)); i <= Math.floor(Math.sqrt(end)); i++) {
      console.log(i * i);
  }
}

printPerfectSquaresInRange(10, 100);  // Example range


// WAP to print all Fibonacci numbers below 100
function printFibonacciNumbers(limit) {
    let a = 0, b = 1;
    while (a < limit) {
        console.log(a);
        let next = a + b;
        a = b;
        b = next;
    }
}

printFibonacciNumbers(100);


//  WAP to check if a number is palindrome
function isPalindrome(number) {
  let str = number.toString();
  let reversedStr = str.split('').reverse().join('');
  return str === reversedStr;
}

console.log(isPalindrome(121));  // true
console.log(isPalindrome(123));  // false


// WAP to check if a number is armstrong
function isArmstrong(number) {
    let str = number.toString();
    let len = str.length;
    let sum = 0;

    for (let i = 0; i < len; i++) {
        sum += Math.pow(parseInt(str[i]), len);
    }

    return sum === number;
}

console.log(isArmstrong(153));  // true
console.log(isArmstrong(123));  // false

